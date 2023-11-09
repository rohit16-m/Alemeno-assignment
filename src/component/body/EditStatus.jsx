import React, { useState } from "react";

const EditStatus = ({ data }) => {
  const [status, setStatus] = useState(data?.isComplete);
  const changeStatus = () => setStatus((prev) => !prev);
  return (
    <div className="text-center">
      <p
        className={`p-2 mt-3  text-white text-center ${
          status ? "bg-red-700" : "bg-green-500"
        }`}>
        {status ? "completed" : "In Progress"}
      </p>
      <button
        className="p-2 font-extrabold text-center bg-blue-600 mt-1 text-white rounded-lg"
        onClick={changeStatus}
        disabled={status}>
        change status
      </button>
    </div>
  );
};

export default EditStatus;
