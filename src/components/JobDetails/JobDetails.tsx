import { FC } from 'react'
import { Link, useParams } from 'react-router-dom';
import { jobsList, mapApiKey } from '../../constants';
import { IJob } from '../../types';
import { ReturnButton } from '../Buttons/ReturnButton';
import { ApplyButton } from '../Buttons/ApplyButton';
import bookmarkIcon from '../../assets/icons/bookmark.svg'
import shareIcon from '../../assets/icons/share.svg'
import { findPostedYears, formatSalary, getCompensationText, getOverview, getResponsibilities } from '../../helpers';

export const JobDetails: FC = () => {
  const params = useParams();
  const jobData: IJob = jobsList.filter(
    (elem) => elem.id === params.jobId
  )[0];

  return (
      <section className='bg-white'>
				<div className="flex flex-col lg:flex-row mx-auto w-full px-6 lg:px-0 lg:w-5/6 ">
          <div className='mt-10 w-5/5 lg:w-2/3'>
            <div className="lg:border-gray-100 lg:border-b-2 flex flex-col py-2 lg:flex-row lg:justify-between lg:items-center">
              <h2 className='border-gray-100 pb-2 lg:pb-0 border-b-2 lg:border-0 text-sky-900 text-2xl font-bold'>Job Details</h2>
              <div className="flex pt-2 lg:pt-0">
                <div className="flex cursor-pointer">
                  <img className='w-6 h-6 mr-2' src={bookmarkIcon} alt="bookmark" />
                  Save to my list
                </div>
                <div className="flex ml-6 cursor-pointer">
                  <img className='w-6 h-6 mr-2' src={shareIcon} alt="share" />
                  Share
                </div>
              </div>
            </div>
            <ApplyButton className='hidden lg:block bg-sky-900 mt-7 px-4 py-3 flex justify-around uppercase text-sm text-white font-light rounded-lg' buttonText='apply now' />
            <div>
              <div className="flex flex-col lg:flex-row mt-7">
                <h3 className='w-full lg:w-2/3 text-sky-900 text-xl font-bold'>{jobData.title}</h3>
                <div className='w-44 ml-auto mt-2 lg:mt-0 lg:w-1/3 flex flex-col-reverse lg:flex-col text-right'>
                  <p className='text-sky-900 ml-3 text-base lg:text-xl font-bold'>{formatSalary(jobData.salary)}</p>
                  <p className='text-sky-900 ml-3 text-base lg:text-lg font-bold font-normal'>Brutto, per year</p>
                </div>                
              </div>
              <p className='text-xs relative -top-10 lg:static lg:text-base text-gray-400 mt-3'>Posted {findPostedYears(jobData.createdAt)} years ago</p>
              <p className='text-sky-900 mt-3 mb-5'>{getOverview(jobData.description)}</p>
              <h3 className='text-sky-900 font-bold mb-2'>Responsopilities:</h3>
              <p className='text-sky-900 mb-5'>{getResponsibilities(jobData.description)}</p>
              <h3 className='text-sky-900 font-bold mb-2'>Compensation & Benefits:</h3>
              <p className='text-sky-900'>{getCompensationText(jobData.description)}</p>
              <ApplyButton className='bg-sky-900 mt-7 px-4 py-3 flex justify-around uppercase text-sm text-white font-light rounded-lg' buttonText='apply now' />
                <h2 className='border-gray-100 border-b-2 flex py-3 mt-20 text-sky-900 text-2xl font-bold'>Additional info</h2>
              <h4 className='my-3 text-sky-800 text-xl'>Employment type</h4>
              <ul className='flex'>
                {jobData.employment_type.map((item, index) => {
                  return (
                    <li className='w-32 lg:w-56 h-12 mr-2 bg-blue-100 border border-slate-400 rounded-lg flex justify-center items-center text-sky-800 font-bold' key={index}>{item}</li>
                  )
                })}
              </ul>
              <h4 className='my-3 text-sky-800 text-xl'>Benefits</h4>
              <ul className='flex'>
                {jobData.benefits.map((item, index) => {
                  return (
                    <li className='w-32 lg:w-56 h-12 mr-2 bg-yellow-100 border border-yellow-400 rounded-lg flex justify-center items-center text-yellow-700 font-bold' key={index}>{item}</li>
                  )
                })}
              </ul>
              <h2 className='mt-20 border-gray-100 border-b-2 flex py-3 text-sky-900 text-2xl font-bold'>Attached images</h2>
              <ul className='flex mt-4 overflow-x-hidden md:overflow-x-visible'>
                {jobData.pictures.map((item, index) => {
                  return (
                    <li className='mr-2' key={index}>
                      <div className="bg-no-repeat bg-cover bg-center w-48 h-24 xl:w-52 xl:h-28 rounded-lg" style={{backgroundImage: `url(${item})`}}></div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Link to='/jobs'>
              <ReturnButton className='hidden lg:flex bg-gray-300 my-20 px-3 py-2 flex items-center justify-around uppercase text-gray-800 text-sm font-semibold rounded-lg relative right-16' />
            </Link>
          </div>
          <div className='mb-4 lg:w-1/3 flex flex-col lg:ml-10 lg:mt-10' >
            <h2 className='border-gray-100 pb-2 lg:hidden border-b-2 lg:border-0 text-sky-900 text-2xl font-bold mt-20'>Contacts</h2>
            <div className='w-72 sm:w-96 mx-auto lg:w-full xl:w-96'>
              <div className='bg-sky-900 rounded-tl-lg rounded-tr-lg p-4 mt-4 lg:mt-0'>
                <p className='text-gray-200 font-bold'>Department name.</p>
                <p className='text-gray-200 font-bold'>{jobData.name}</p>
                <p className='text-gray-200'>{jobData.address}</p>
                <p className='text-gray-200'>{jobData.phone}</p>
                <p className='text-gray-200'>{jobData.email}</p>
              </div>
                <img className='w-full h-56 rounded-bl-lg rounded-br-lg' 
                src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${jobData.location.long},${jobData.location.lat}&zoom=14&marker=lonlat:${jobData.location.long},${jobData.location.lat};color:%23ffffff;size:medium&apiKey=${mapApiKey}`}
                alt={jobData.address} />
              </div>              
            </div>          
				</div>
      </section>
	)
}
