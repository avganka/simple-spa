import {Col, Row, Image} from 'react-bootstrap';

import Avatar from '../assets/user.svg';

function AboutPage() {
  return (
    <>
      <h1 className='mb-3'>Обо мне</h1>
      <section>
        <Row>
          <Col sm={4}>
            <Image src={Avatar} className='w-100' rounded />
          </Col>
          <Col sm={8}>
            <div>
              <h2 className='mb-3 mt-3'>Калмук Александр Александрович</h2>
              <p>
                Разработчик, прошедший путь от верстки кнопок и "Hello, world!" до React, Typescript
                и Node. Ищу компанию с большой, дружной командой, отсутствием бюрократии и
                современным офисом. Компанию с интересными задачами и возможностью профессионального
                роста. В прошлом digital-маркетолог с 6 летним стажем.
              </p>
              <p>
                Несколько раз в месяц преподаю программирование на Scratch школьникам в кружке
                робототехники ROBBO.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <h2 className='mb-3 mt-3'>Стек</h2>
        <ul>
          <li>
            Фронт: HTML/CSS, React (Hooks, Router), Next, Redux (Thunk, Saga), Typescript, Material
            UI, Bootstrap, Tailwind
          </li>
          <li>Бэк: Node.js, Express, Mongo, Puppeteer, GraphQL</li>
          <li>Тесты: Jest, React Testing Library</li>
          <li>Другое: Figma, Photoshop</li>
        </ul>
      </section>
      <section>
        <h2 className='mb-3 mt-3'>Контакты</h2>
        <ul>
          <li>
            Телефон: <a href='tel:79215980131'>+7 (921) 598-01-31</a>
          </li>
          <li>
            Email: <a href='mailto:sasha.kalmuk@gmail.com'>sasha.kalmuk@gmail.com</a>
          </li>
          <li>
            Telegram: <a href='https://t.me/saashaa_k'>@saashaa_k</a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutPage;
