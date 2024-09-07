import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
            No.1 Job Hunt Website
          </span>
          <h1 className="text-5xl font-bold">
            Search,Apply & <br />
            Get Your <span className="text-[#6a38c2]">Dream Jobs</span>
          </h1>
          <p>
           Discover a wide range of job openings that match your skills and interests, from software development to data analysis, and more. Our platform features a user-friendly interface that makes it easy to search and apply for positions, track your applications, and stay updated with the latest tech job openings.

Whether you’re a seasoned coder or just starting your tech career, Unstop provides the resources and tools you need to advance. Access career advice, industry insights, and connect with professionals who share your passion for technology.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find Your Dream Jobs"
              className="outline-none border-none w-full"
            />
            <Button>
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
