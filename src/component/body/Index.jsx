import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../redux/feature/apliSlice";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  if (state.api.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="course-list">
        {state.api.data &&
          state.api.data.map((course) => (
            <div className="course-list-item">
              <div className="course-info">
                <div className="course-name">{course.name}</div>
                <div className="course-instructor">{course.instructor}</div>
                <div className="course-duration">{course.duration}</div>
              </div>
              <Link to={`/course/${course.id}`}>
                <button className="course-button">See More</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Index;
