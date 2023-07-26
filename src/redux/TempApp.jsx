import React, { useState } from 'react'

function TempApp() {

    const count = useState(0);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
        //   onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        //   onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default TempApp