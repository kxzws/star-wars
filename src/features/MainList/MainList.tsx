import { ReactElement, useEffect } from 'react';

import { useAppDispatch, useTypedSelector } from '../../hooks';
import { getListData } from '../../redux/list/thunks';
import { CharacterItem } from '../../components';

import { MainList as MainListCont, MainMasonry } from './styles';

export const MainList = (): ReactElement => {
  const { list, isLoading, error } = useTypedSelector((state) => state.list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListData());
  }, [dispatch, getListData]);

  return (
    <MainListCont>
      {error && `error: ${error.message}`}
      {isLoading ? (
        'Loading...'
      ) : (
        <MainMasonry breakpointCols={{ default: 3 }} className="masonry" columnClassName="masonry">
          {list.map((item) => (
            <CharacterItem key={item.url} data={item} />
          ))}
        </MainMasonry>
      )}
    </MainListCont>
  );
};
