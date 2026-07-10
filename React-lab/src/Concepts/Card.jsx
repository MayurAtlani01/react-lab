import { useState} from "react";


function StudentCard({ name, age, branch,CP,AP}) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

      <p className="text-gray-600 mt-2">
        Branch: <span className="font-medium">{branch}</span>
      </p>

      <p className="text-gray-600">
        Age: <span className="font-medium">{age}</span>
      </p>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold" onClick={CP}>
          Present
        </button>

        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-semibold" onClick={AP}>
          Absent
        </button>
      </div>
    </div>
  );
}

export default StudentCard;