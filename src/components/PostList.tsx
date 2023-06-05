import {ConnectedProps, connect} from 'react-redux';
import {Dropdown, Stack} from 'react-bootstrap';
import {RootState} from '../store';
import {fetchPosts} from '../store/actions';

import PostCard from './PostCard';
import {useEffect, useState} from 'react';
import PostListPreloader from './PostListPreloader';
import Pagination from './Pagintaion';

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
  loading: state.loading['posts'],
  error: state.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PostList({posts, loading, error, fetchPosts}: PropsFromRedux) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const pagePosts = posts.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const onPaginationPageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const onChangeLimitClick = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  if (error) return <p className='text-danger'>Error: {error}</p>;
  if (loading) return <PostListPreloader />;

  return (
    <>
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
