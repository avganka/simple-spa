import PostList from '../components/PostList';

function MainPage() {
  return (
    <>
      <h1 className='mb-3'>Список постов</h1>
      <section>
        <PostList />
      </section>
    </>
  );
}

export default MainPage;
