import {Card, Placeholder} from 'react-bootstrap';

function PostListPreloader() {
  return (
    <Card>
      <Placeholder as={Card.Header} animation='glow'>
        <Placeholder xs={6} bg='secondary' />
      </Placeholder>
      <Placeholder as={Card.Body} animation='glow'>
        <Placeholder xs={10} bg='secondary' />
        <Placeholder xs={8} bg='secondary' />
      </Placeholder>
      <Placeholder as={Card.Header} animation='glow'>
        <Placeholder.Button variant='primary' xs={4} />
      </Placeholder>
    </Card>
  );
}

export default PostListPreloader;
