import { JOB_API_END_POINT, USER_END_POINT } from "@/constants";
import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAlljobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      console.log("logging cookie before tryvatch",document.cookie);
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getalljob`, {
          withCredentials: true,
        });
        console.log("logging cookie after trycatch",document.cookie);
        if (res.data.success) {
          console.log(res.data);
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAlljobs;
