import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./course.css";
import { fetchDashBoard } from "../../redux/feature/dashboard";
import EditStatus from "./EditStatus";

const DashBoard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDashBoard());
  }, [dispatch]);

  const studentCourse = state.dashboard.data?.map((stud) => {
    const courses = stud.status?.map((sc) => {
      return {
        ...sc,
        course: state.api.data?.find((c) => c.id === sc.courseId),
      };
    });
    return { ...stud, courses };
  });

  return (
    <>
      <div className="mobile-app-design-card">
        {studentCourse?.map((student) => (
          <div>
            <div className="card-header">
              <h2 className="card-title">{student.name}</h2>
              <p className="card-instructor">{student.email}</p>
            </div>

            <div className="card-body">
              <div className="course-list">
                {student.courses?.map((course) => (
                  <>
                    <div className="course-list-item">
                      <div className="course-info">
                        <div className="course-name">{course.course.name}</div>
                        <div className="course-instructor">
                          {course.course.instructor}
                        </div>
                        <div className="course-duration">
                          {course.course.duration}
                        </div>

                        <div>
                          <EditStatus data={course} />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashBoard;
