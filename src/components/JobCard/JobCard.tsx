import { FC } from 'react'
import { IJob } from '../../types'
import bookmarkIcon from '../../assets/icons/bookmark.svg'
import locationIcon from '../../assets/icons/location.svg'
import { useNavigate } from 'react-router-dom'
import { findPostedYears } from '../../helpers'

export const JobCard : FC<IJob> = (props) => {

  const navigate = useNavigate();

	const openJob = (id: string) => {
		navigate(`/jobs/${id}`);
	};

	return (
		<div className='bg-gray-100 lg:bg-white h-36 mx-1 lg:mx-32 mb-2 p-1 pt-8 md:p-2 lg:p-4 flex rounded-lg justify-start cursor-pointer shadow-md lg:shadow-none relative md:static' onClick={() => openJob(props.id)}>
      <div className="w-16 md:w-32">
        <img className='w-12 h-12 md:w-20 md:h-20 rounded-full' src={`${props.picture}?random=${props.id}`} alt="job icon" />
      </div>
      <div className='w-56 md:w-5/6'>
        <h3 className='text-sky-800 text-sm md:text-lg lg:text-xl font-bold truncate md:whitespace-normal'>
          {props.title}
        </h3>
        <p className='text-gray-300 text-sm md:text-base my-1'>Department name &#183; {props.address} - {props.name}</p>
        <p className='flex items-center text-sm md:text-base text-gray-300'><span><img className='mr-2' src={locationIcon} alt="" /></span> Vienna, Austria</p>
      </div>
      <div className='w-0 md:w-40 lg:w-44 flex flex-col justify-between items-end '>
        <img className='hidden lg:block w-6 h-6' src={bookmarkIcon} alt="bookmark" />
        <p className='text-gray-400 text-xs md:text-sm xl:text-base self-end absolute top-2 right-3 md:static'>Posted {findPostedYears(props.createdAt)} years ago</p>
      </div>
    </div>
	)
}
