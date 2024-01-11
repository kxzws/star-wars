import { ReactElement, useEffect, useMemo } from 'react';

import { useAppDispatch, useTypedSelector } from '../../hooks';
import { getListData } from '../../redux/list/thunks';
import { getFilteredList } from '../../utils';
import { CharacterItem } from '../../components';

import { MainList as MainListCont, MainMasonry } from './styles';

export const MainList = (): ReactElement => {
  const { list, isLoading, error, moviesFilter, nameSearch, genderFilter, massFilter } =
    useTypedSelector((state) => state.list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListData());
  }, [dispatch, getListData]);

  const filteredList = useMemo(
    () => getFilteredList(list, moviesFilter, nameSearch, genderFilter, massFilter),
    [list, moviesFilter, nameSearch, genderFilter, massFilter]
  );

  return (
    <MainListCont>
      {error && `error: ${error.message}`}
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          Results: {filteredList.length}
          <MainMasonry
            breakpointCols={{ default: 3 }}
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
