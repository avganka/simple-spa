import {Button, Card, ListGroup, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ConnectedProps, connect} from 'react-redux';

import {RootState} from '../store';
import {Post} from '../types';
import Avatar from './UserInfo';
import {useState} from 'react';
import {fetchComments} from '../store/actions';

interface PostCardProps {
  post: Post;
}

const mapStateToProps = (state: RootState, props: PostCardProps) => ({
  comments: state.comments,
  loading: state.loading[`comment-${props.post.id}`],
  error: state.error,
  post: props.post,
});

const mapDispatchToProps = {
  fetchComments,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PostCard({post, comments, loading, error, fetchComments}: PropsFromRedux) {
  const [showComments, setShowCommets] = useState<boolean>(false);

  const onCommentsToggleClick = () => {
    setShowCommets((prev) => !prev);

    if (!comments[post.id]) {
      fetchComments(post.id);
    }
  };

  return (
    <Card>
      <Card.Header as='h5'>{post.title}</Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        <div className='d-flex justify-content-between align-items-center gap-3'>
          <Button variant='primary' disabled={loading} onClick={onCommentsToggleClick}>
            {loading ? (
              <>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                  className='me-2'
                />
                Loading...
              </>
            ) : showComments ? (
              'Скрыть комментарии'
            ) : (
              'Показать комментарии'
            )}
          </Button>
          <div>
            <Link to={`/user/${post.userId}`}>
              <Avatar />
            </Link>
          </div>
        </div>
        {error && <p className='text-danger'>Error: {error}</p>}
      </Card.Body>

      {showComments && (
        <ListGroup variant='flush'>
          {comments[post.id] &&
            comments[post.id].map((comment) => (
              <ListGroup.Item key={comment.id} className='py-3 bg-light'>
                <p className='font-weight-bold text-primary'>
                  {comment.name} ({comment.email})
                </p>
                <small className='font-weight-bold'>{comment.body}</small>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </Card>
  );
}

export default connector(PostCard);
