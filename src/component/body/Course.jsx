import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const courseData = state.api.data?.find((item) => item.id === Number(id));

  return (
    <div className="mobile-app-design-card ">
      <div className="card-header mt-2">
        <h2 className="card-title text-cyan-950 font-bold text-center text-9xl">
          {courseData.name}
        </h2>
        <div className="flex align-middle justify-evenly font-semibold text-cyan-900">
          Instructor
          <p className=" text-lg text-cyan-950">{courseData.instructor}</p>
        </div>
        <p className="text-center text- p-6">Description : {courseData.description}</p>
      </div>
      <div className="card-body">
      <div className="text-center text-lg text-cyan-950">Syllabus</div>
        {courseData?.syllabus?.map((chapter) => (
          <div className="">
           
            <p className="text-lg text-black mt-2 text-center">Week : {chapter.week}</p>
            <p className="text-lg text-cyan-950 mt-2 text-center">Topic : {chapter.topic}</p>
            <p className="text-lg text-cyan-950 text-center">Content : {chapter.content}</p>
            
          </div>
        ))}

        
      </div>
      <div className="card-footer">
        <div className="card-details">
          <p className="card-duration">
            Duration: <span>{courseData.duration}</span>
          </p>
          <p className="card-schedule">
            Schedule: <span>{courseData.schedule}</span>
          </p>
          <p className="card-location">
            Location: <span>{courseData.location}</span>
          </p>
        </div>
        <Link to='/'>
          <button className="bg-slate-500 p-2 rounded-2xl m-auto"> Go back</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Course;
