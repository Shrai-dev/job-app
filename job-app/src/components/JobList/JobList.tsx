import { FC, useEffect, useState } from 'react'
import { token } from '../../constants';
import { IJob } from '../../types';
import { JobCard } from '../JobCard/JobCard';

export const JobList: FC = () => {
	const [jobs, setJobs] = useState<IJob[]>([]);

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
		<div className='pb-10'>{jobCards}</div>
	)
}
