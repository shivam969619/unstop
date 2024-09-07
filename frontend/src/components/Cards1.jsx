import React from "react";
import { Badge } from "./ui/badge";
import { Ghost } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Cards1({ job }) {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">{job?.title}</h1>
          <p className="text-sm text-gray-600">{job?.description}</p>
        </div>
        <div className="flex-items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant={Ghost}>
            {job?.positions} Positions
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant={Ghost}>
            {job?.jobType}
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant={Ghost}>
            {job?.salery} LPA
          </Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Button
            onClick={() => navigate(`/description/${job?._id}`)}
            variant="outline"
          >
            Details
          </Button>
          <Button className="bg-[#7209b7]">Save For Later</Button>
        </div>
      </div>
    </>
  );
}

export default Cards1;
