import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobLists from './components/JobLists';
import ViewAllJobs from './components/ViewAllJobs';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobLists/>
      <ViewAllJobs/>
    </>
       
  )
}

export default App