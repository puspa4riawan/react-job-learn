import { useEffect, useState } from 'react'

import JobList from './JobList';
import Spiner from './Spiner';

const JobLists = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/jobs');
        const data = await res.json();

        setJobs(isHome ? data.slice(0, 3) : data);
      } catch (error) {
        console.log('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  },[]);
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          { loading ? 
          (<Spiner loading={loading}/>) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                  <JobList key={job.id} job={job} />
              ))}
            
            </div>
          </>
          )}
        </div>
      </section>
  )
}

export default JobLists