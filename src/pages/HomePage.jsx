import React from 'react'
import Hero from '../components/Hero';
import Card from '../components/Card';
import JobLists from '../components/JobLists';
import ViewAllJobs from '../components/ViewAllJobs';
import HomeCards from '../components/HomeCards';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobLists isHome={true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage