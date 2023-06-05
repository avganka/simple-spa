import {Dropdown} from 'react-bootstrap';
import {SortType} from '../types';

interface SortingProps {
  onSortChange: (sort: SortType) => void;
  sort: SortType;
}

const SORT_OPTIONS = {
  popular: 'По популярности',
  desc: 'По алфавиту (возрастание)',
  asc: 'По алфавиту (убывание)',
};

function Sort({onSortChange, sort}: SortingProps) {
  return (
    <Dropdown>
      <div className='d-flex align-items-baseline flex-wrap'>
        <span className='me-2'>Сортировка:</span>
        <Dropdown.Toggle className='p-0 text-primary' variant='outline'>
          {SORT_OPTIONS[sort].toLocaleLowerCase()}
        </Dropdown.Toggle>
      </div>
      <Dropdown.Menu>
        {Object.entries(SORT_OPTIONS).map((type) => (
          <Dropdown.Item
            key={type[0]}
            data-sort={type[0]}
            onClick={() => onSortChange(type[0] as SortType)}
            className={type[0] === sort ? 'active' : ''}
          >
            {SORT_OPTIONS[type[0] as SortType]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sort;
