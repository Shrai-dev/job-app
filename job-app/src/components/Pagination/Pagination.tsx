import { PageLink } from './PageLink';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

export interface IProps {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: IProps) => {

  const pageNums = [];

	for (let i = 1; i <= maxLength + 1; i++) {
		pageNums.push(i);
	} 

  return (
    <nav className="flex items-center justify-center bg-gray-100 border-2 rounded-lg">
      <PageLink
        className='w-10 h-10 cursor-pointer flex items-center justify-center mx-1'
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <img className='border-r-2 pr-2' src={arrowLeft} alt="arrow left" />
      </PageLink>
      {pageNums.map((pageNum, i) => (
        <PageLink
          key={i}
          className='w-8 h-8 text-gray-400 font-bold cursor-pointer flex items-center justify-center'
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink
        className='w-10 h-10 cursor-pointer flex items-center justify-center mx-1'
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <img className='border-l-2 pl-2' src={arrowRight} alt="arrow right" />
      </PageLink>
    </nav>
  );
}
