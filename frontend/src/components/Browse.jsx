import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Cards1 from "./Cards1";
import useGetAlljobs from "@/hooks/useGetAlljobs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import Cards3 from "./Cards3";
const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Browse = () => {
  useGetAlljobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className="ml-4">
          <h1>Search Results ({jobs.length})</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-4 my-3 ml-4 mr-4 mt-4">
            {allJobs.map((job) => {
              return <Cards1 key={job._id} job={job} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
