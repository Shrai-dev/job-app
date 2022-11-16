import { FC } from 'react'
import { IJob } from '../../types'
import bookmarkIcon from '../../assets/icons/bookmark.svg'
import locationIcon from '../../assets/icons/location.svg'

export const JobCard : FC<IJob> = (props) => {

	const findPostedYears = (date: string) => {
    const dateNow = new Date();
    const datePosted = new Date(date);
    const timeDiff = Math.abs(dateNow.getTime() - datePosted.getTime());
    const postedYears = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    return postedYears
  }

	return (
		<div className='bg-white h-40 mx-32 mb-2 p-4 flex rounded-lg justify-start'>
      <div className="w-1/6">
        <img className='w-20 h-20 rounded-full' src={`${props.picture}?random=${props.id}`} alt="job icon" />
      </div>
      <div className='w-5/6'>
        <h3 className='text-gray-600 text-xl font-bold'>
          {props.title}
        </h3>
        <p className='text-gray-300'>Department name 	&#183; {props.address}</p>
        <p className='flex items-center text-gray-300'><span><img className='mr-2' src={locationIcon} alt="" /></span> Vienna, Austria</p>
      </div>
      <div className='w-1/6'></div>
      <div className='w-1/6 flex flex-col items-end'>
        <img className='w-6 h-6' src={bookmarkIcon} alt="bookmark" />
        <p className='text-gray-400'>Posted {findPostedYears(props.createdAt)} years ago</p>
      </div>
    </div>
	)
}
