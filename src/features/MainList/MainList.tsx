import { ReactElement, useEffect, useMemo } from 'react';

import { useAppDispatch, useTypedSelector } from '../../hooks';
import { getListData } from '../../redux/list/thunks';
import { getFilteredList } from '../../utils';
import { CharacterItem, ErrorTypography, Loading } from '../../components';

import { CountText, MainList as MainListCont, MainMasonry } from './styles';

export const MainList = (): ReactElement => {
  const { list, isLoading, error, moviesFilter, nameSearch, genderFilter, massFilter } =
    useTypedSelector((state) => state.list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!list.length) dispatch(getListData());
  }, [dispatch, getListData]);

  const filteredList = useMemo(
    () => getFilteredList(list, moviesFilter, nameSearch, genderFilter, massFilter),
    [list, moviesFilter, nameSearch, genderFilter, massFilter]
  );

  return (
    <MainListCont>
      {error && <ErrorTypography>{error.message}</ErrorTypography>}
      {isLoading ? (
        <Loading color="white" />
      ) : (
        <>
          <CountText>Results: {filteredList.length}</CountText>
          <MainMasonry
            breakpointCols={{ default: 4, 1800: 3, 1200: 2, 780: 1 }}
            className="masonry"
            columnClassName="masonry"
          >
            {filteredList.map((item) => (
              <CharacterItem key={item.url} data={item} />
            ))}
          </MainMasonry>
        </>
      )}
    </MainListCont>
  );
};
