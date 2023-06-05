import {ConnectedProps, connect} from 'react-redux';
import {CloseButton, Col, Dropdown, Row, Stack} from 'react-bootstrap';

import {RootState} from '../store';
import {fetchPosts, setSort, setSearch} from '../store/actions';

import PostCard from './PostCard';
import {useEffect, useState} from 'react';
import PostListPreloader from './PostListPreloader';
import Pagination from './Pagintaion';
import Sort from './Sort';
import {SortType} from '../types';
import {postSorting} from '../helpers';
import Search from './Search';
import {useSearchParams} from 'react-router-dom';

const mapStateToProps = (state: RootState) => ({
  posts: postSorting(
    state.sort,
    state.posts.filter((post) => post.title.includes(state.searchString))
  ),
  loading: state.loading['posts'],
  error: state.error,
  sort: state.sort,
  searchString: state.searchString,
});

const mapDispatchToProps = {
  fetchPosts,
  setSort,
  setSearch,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PostList({
  posts,
  loading,
  error,
  sort,
  searchString,
  fetchPosts,
  setSort,
  setSearch,
}: PropsFromRedux) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams();

  const pagePosts = posts.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (searchParams.has('search')) {
      setSearch(searchParams.get('search') as string);
    }
    if (searchParams.has('sort')) {
      setSort(searchParams.get('sort') as SortType);
    }
  }, [searchParams, setSearch, setSort]);

  const onPaginationPageClick = (pageNumber: number) => {
    setPage(pageNumber);
    searchParams.set('page', pageNumber.toString());
    setSearchParams(searchParams);
  };

  const onChangeLimitClick = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  const onChangeSortTypeClick = (sort: SortType) => {
    setSort(sort);
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  const onSearchSubmit = (searchString: string) => {
    setSearch(searchString);
    setPage(1);
    searchParams.set('search', searchString);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  const onSearchReset = () => {
    setSearch('');
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  if (error) return <p className='text-danger'>Error: {error}</p>;
  if (loading) return <PostListPreloader />;

  return (
    <>
      <Row className='d-flex justify-content-between align-items-center mb-3 gap-2'>
        <Col xs={12} sm='5'>
          <Sort onSortChange={onChangeSortTypeClick} sort={sort} />
        </Col>
        <Col xs={12} sm='5'>
          <Search onSearchSubmit={onSearchSubmit} />
        </Col>
      </Row>
      {searchString && (
        <>
          <p className='my-4'>
            Результаты поиска для: <span className='fw-bold fs-5'>"{searchString}"</span>
            <CloseButton onClick={onSearchReset} />
          </p>
        </>
      )}
      <Stack gap={3} className='mb-4'>
        {pagePosts && pagePosts.map((post) => <PostCard key={post.id} post={post} />)}
      </Stack>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        {posts.length > limit && (
          <Pagination
            length={Math.ceil(posts.length / limit)}
            activePage={page}
            onPageClick={onPaginationPageClick}
          />
        )}
        <div className='ms-auto'>
          <Dropdown>
            <Dropdown.Toggle variant='outline-primary'>{limit}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => onChangeLimitClick(10)}>10</Dropdown.Item>
              <Dropdown.Item onClick={() => onChangeLimitClick(20)}>20</Dropdown.Item>
              <Dropdown.Item onClick={() => onChangeLimitClick(30)}>30</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default connector(PostList);
