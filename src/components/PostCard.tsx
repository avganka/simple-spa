import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {Post} from '../types';
import Avatar from './UserInfo';

interface PostCardProps {
  post: Post;
}

function PostCard({post}: PostCardProps) {
  return (
    <Card>
      <Card.Header as='h5'>{post.title}</Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        <div className='d-flex justify-content-between align-items-center gap-3'>
          <Button variant='primary'>Показать комментарии</Button>
          <div>
            <Link to={`/user/${post.userId}`}>
              <Avatar />
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
