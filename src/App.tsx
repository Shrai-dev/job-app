import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { JobList } from './components/JobList/JobList';
import { JobDetails } from './components/JobDetails/JobDetails';


const App: FC = () => {

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<JobList/>} />
        <Route path='/jobs' element={<JobList/>} />
        <Route path='/jobs/:jobId' element={<JobDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
