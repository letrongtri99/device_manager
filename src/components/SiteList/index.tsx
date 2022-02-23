import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress } from '@material-ui/core';
import SiteItem from './SiteItem';
import { siteActions } from '@stores/slices/site';
import { WattAppState } from '@stores/index';
import { SiteListContainer } from './SiteList.styled';

const SiteList = () => {
  const dispatch = useDispatch();

  const { items: siteData, fetching: siteLoading, hasMore, take } = useSelector(
    (state: WattAppState) => state.site.list
  );
  const { idSiteCurrent } = useSelector((state: WattAppState) => state.site);
  const [page, setPage] = useState<number>(1);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(document.getElementById('tabpanel-container')!.offsetHeight);
  }, []);

  useEffect(() => {
    dispatch(
      siteActions.getSiteListRequest({
        Page: page,
        PageSize: take!,
        AccessTypes: 'BillingAdmin,SiteAdmin'
      })
    );
  }, [page]);

  useEffect(() => {
    if (siteData.length > 0) {
      dispatch(
        siteActions.getSiteDetailRequest({
          id: idSiteCurrent!
        })
      );
    }
  }, [idSiteCurrent]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <Box>
      {siteLoading && page === 1 && height ? (
        <Box textAlign="center" pt={5} pb={5}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <div>
          <SiteListContainer
            dataLength={siteData.length}
            next={fetchMoreData}
            hasMore={hasMore!}
            height={height}
            loader={
              <Box textAlign="center" pt={2} pb={5}>
                <CircularProgress size={20} />
              </Box>
            }
          >
            <div>
              {siteData.map((item, index) => (
                <SiteItem
                  active={item.site.id === idSiteCurrent}
                  key={index}
                  avatar={item.site.photoUrl}
                  name={item.site.name}
                  address={item.site.location}
                  id={item.site.id}
                />
              ))}
            </div>
          </SiteListContainer>
        </div>
      )}
    </Box>
  );
};

export default SiteList;
