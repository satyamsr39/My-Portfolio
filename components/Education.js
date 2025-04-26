import React from "react";

const Education = () => {
  return (
    <div className="p-6 my-4 ">
      <h2 className="text-center font-bold text-2xl mb-4 ">Education</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">🎓 Bachelor of Technology (B.Tech (CSE)) <span className="text-sm">(Pursuing)</span></h3>
          <p className="text-gray-700">Dr. Ambedkar Institute of Technology for Handicapped, KANPUR</p>
          <p className="text-gray-600">2022 – Present</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">🏫 Intermediate (12th Grade)</h3>
          <p className="text-gray-700">MAHATMA GANDHI INTERMEDIATE COLLEGE, GORAKHPUR – UP Board</p>
          <p className="text-gray-600">2022</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">🏫 High School (10th Grade)</h3>
          <p className="text-gray-700">NAVALS NATIONAL ACADEMY, GORAKHPUR – CBSE Board</p>
          <p className="text-gray-600">2020</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
