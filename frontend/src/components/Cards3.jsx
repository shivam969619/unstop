import React from "react";
import { Button } from "./ui/button";
import { Bookmark, Ghost } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import comapnylogo from "../assets/download (1).jpeg";
import { Badge } from "./ui/badge";
import { Link, useNavigate } from "react-router-dom";

function Cards3({ job }) {
  const navigate = useNavigate();
  // const jobId = "lsekdhjgdsnfvsdkjf";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
        <div className="flex items-center gap-2 my-2">
          <Button variant="outline">
            <Avatar variant="">
              <AvatarImage src={job?.company?.logo} className="h-full w-full" />
            </Avatar>
          </Button>
          <div>
            <h1>{job?.company?.name}</h1>
            <p>India</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-600">{job?.title}</h1>
          <p className="text-sm text-gray-600">{job?.description}</p>
        </div>
        <div className="flex-items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant={Ghost}>
            {job?.positions}
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant={Ghost}>
            {job?.jobType}
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant={Ghost}>
            {job?.salery}
          </Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Button
            onClick={() => navigate(`/description/${job?._id}`)}
            variant="outline"
          >
            Details
          </Button>
          <Button className="bg-[#7209b7]">Save for later</Button>
        </div>
      </div>
    </>
  );
}

export default Cards3;
