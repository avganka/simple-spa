import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Card, Col, Row, Stack} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';

import {RootState} from '../store';
import {fetchUserWithPosts} from '../store/actions';
import PostCard from './PostCard';
import UserDetailPreloader from './UserDetailPreloader';
import defaultAvatar from '../assets/default-user.svg';
import companyIcon from '../assets/company.svg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/mail.svg';
import locationIcon from '../assets/location.svg';
import websiteIcon from '../assets/website.svg';

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  loading: state.loading['user'],
  error: state.error,
});

const mapDispatchToProps = {
  fetchUserWithPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const UserDetail = ({user, loading, error, fetchUserWithPosts}: PropsFromRedux) => {
  const {userId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      fetchUserWithPosts(Number(userId));
    }
  }, [userId, fetchUserWithPosts]);

  if (loading) return <UserDetailPreloader />;
  if (error) return <p className='text-danger'>Error: {error}</p>;
  if (!user)
    return (
      <div className='d-flex  justify-content-between align-items-center'>
        <h1 className='mb-3'>Пользователь не найден</h1>
        <Button variant='outline-primary' onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
    );

  return (
    <>
      <div className='d-flex  justify-content-between align-items-center'>
        <h1 className='mb-3'>Пользователь {user.name}</h1>
        <Button variant='outline-primary' onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
      <Row>
        <Col sm={12} md={4} className='my-3'>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={defaultAvatar} className='mb-4' />
              <Card.Title className='text-center'>{user.name}</Card.Title>
              <Card.Subtitle className='text-center text-secondary'>{user?.username}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={8} className='my-3'>
          <Card>
            <Card.Body>
              <Card.Text className='d-flex align-items-center'>
                <img src={companyIcon} />
                <span className='ms-3'>{user.company.name}</span>
              </Card.Text>
              <Card.Text className='d-flex align-items-center'>
                <img src={locationIcon} />
                <span className='ms-3'>{user.address.city}</span>
              </Card.Text>
              <Card.Text className='d-flex align-items-center'>
                <img src={emailIcon} />
                <a href={`mailto:${user.email}`} className='ms-3'>
                  {user.email}
                </a>
              </Card.Text>
              <Card.Text className='d-flex align-items-center'>
                <img src={phoneIcon} />
                <span className='ms-3'>{user.phone}</span>
              </Card.Text>
              <Card.Text className='d-flex align-items-center'>
                <img src={websiteIcon} />
                <a href={`https://${user.website}`} className='ms-3'>
                  {user.website}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className='mb-3 mt-3'>Посты {user.name}:</h2>
      <Stack gap={3} className='mb-4'>
        {user.posts && user.posts.map((post) => <PostCard key={post.id} post={post} />)}
      </Stack>
    </>
  );
};

export default connector(UserDetail);
