import {ConnectedProps, connect} from 'react-redux';
import {Stack} from 'react-bootstrap';
import {RootState} from '../store';
import {fetchPosts} from '../store/actions';

import PostCard from './PostCard';
import {useEffect} from 'react';

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
  error: state.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PostList({posts, fetchPosts}: PropsFromRedux) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Stack gap={3} className='mb-4'>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </Stack>
  );
}

export default connector(PostList);
