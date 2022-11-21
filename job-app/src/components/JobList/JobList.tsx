import { FC, useEffect, useState } from 'react';
import { token } from '../../constants';
import { IJob } from '../../types';
import { JobCard } from '../JobCard/JobCard';
import { Pagination } from '../Pagination/Pagination';
import { jobsList } from './../../constants';

export const JobList: FC = () => {
	const [jobs, setJobs] = useState<IJob[]>(jobsList);
  const [currentPage, setCurrentPage] = useState(1);
  
  const lastPage = 5;
  const PageSize = 4;

  const searchJobs = async () => {
    try {
      const res = await fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${token}`);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchJobs()
  }, [])
	
	const jobCards = jobs.map(job => {
    return <JobCard 
            key={job.id} 
            id={job.id} 
            title={job.title} 
            description={job.description} 
            pictures={job.pictures} 
            picture={job.pictures[0]} 
            phone={job.phone} 
            name={job.name} 
            address={job.address} 
            benefits={job.benefits} 
            createdAt={job.createdAt} 
            email={job.email} 
            salary={job.salary} 
            employment_type={job.employment_type} 
            location={job.location}
          />
  })

	return (
    <>
      <div className='pb-5'>{jobCards.slice((currentPage === 1 ? (currentPage - 1) : ((currentPage - 1) * (PageSize))), (PageSize * currentPage))}</div>
      <div className='w-80 flex justify-center mx-auto'>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={PageSize}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
		
	)
}
