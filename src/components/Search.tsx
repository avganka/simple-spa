import {FormEvent, useState} from 'react';
import {Button, Form} from 'react-bootstrap';

interface SearchProps {
  onSearchSubmit: (search: string) => void;
}

function Search({onSearchSubmit}: SearchProps) {
  const [value, setValue] = useState('');

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSearchSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={submitHandler} className='position-relative'>
      <Form.Control
        type='search'
        placeholder='Поиск'
        aria-describedby='search'
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        className='pe-5'
      />
      <Button variant='outline-primary' type='submit' className='position-absolute top-0 end-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
          <path d='M21 21l-6 -6'></path>
        </svg>
      </Button>
    </Form>
  );
}

export default Search;
