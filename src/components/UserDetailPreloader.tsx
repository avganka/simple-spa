import {Card, Col, Placeholder, Row} from 'react-bootstrap';
import defaultAvatar from '../assets/default-user.svg';

function UserDetailPreloader() {
  return (
    <>
      <Placeholder as='p' animation='glow'>
        <Placeholder xs={6} size='lg' />
      </Placeholder>
      <Row>
        <Col sm={12} md={4} className='my-3'>
          <Card>
            <Placeholder as={Card.Body} animation='glow'>
              <Placeholder as={Card.Img} src={defaultAvatar} className='mb-4' />
              <Placeholder as={Card.Title} className='text-center' animation='glow'>
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Subtitle} className='text-center' animation='glow'>
                <Placeholder xs={4} />
              </Placeholder>
            </Placeholder>
          </Card>
        </Col>
        <Col sm={12} md={8} className='my-3'>
          <Card>
            <Placeholder as={Card.Body} animation='glow'>
              <Placeholder xs={6} />
              <Placeholder xs={4} />
              <Placeholder xs={8} />
              <Placeholder xs={6} />
              <Placeholder xs={7} />
              <Placeholder xs={8} />
            </Placeholder>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default UserDetailPreloader;
