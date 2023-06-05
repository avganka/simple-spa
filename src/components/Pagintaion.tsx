import {Pagination as BSPagintaion} from 'react-bootstrap';

interface PagintaionProps {
  length: number;
  activePage: number;
  onPageClick: (pageNuber: number) => void;
}

// TODO Elipsis pagination
function Pagination({length, activePage, onPageClick}: PagintaionProps) {
  const items = [];
  for (let number = 1; number <= length; number++) {
    items.push(
      <BSPagintaion.Item
        key={number}
        active={number === activePage}
        onClick={() => onPageClick(number)}
      >
        {number}
      </BSPagintaion.Item>
    );
  }

  return (
    <BSPagintaion className='mb-0'>
      <BSPagintaion.First disabled={activePage === 1} onClick={() => onPageClick(1)} />
      <BSPagintaion.Prev disabled={activePage === 1} onClick={() => onPageClick(activePage - 1)} />
      {items}
      <BSPagintaion.Next
        disabled={activePage === length}
        onClick={() => onPageClick(activePage + 1)}
      />
      <BSPagintaion.Last disabled={activePage === length} onClick={() => onPageClick(length)} />
    </BSPagintaion>
  );
}

export default Pagination;
