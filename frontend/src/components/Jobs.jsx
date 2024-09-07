import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto mt-5 pl-3">
          <div className="flex gap-5">
            <div className="md:w-[20%] w-[30%]">
              <Cards2 />
            </div>
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              {filterJobs.length <= 0 ? (
                <span>Jobs Not found</span>
              ) : (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  {filterJobs.map((job) => (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      key={job?._id}
                    >
                      <Cards3 job={job} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
