import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <div className="text-center text-2xl space-y-2 mt-5">
        <h1>Multi-Step Registration Form</h1>
        <p>
          Step 2 of 3: <span className="font-bold">Personel Information</span>
        </p>
      </div>
      <div className="flex flex-col items-start justify-start space-y-4 text-2xl">
        <label htmlFor="">
          Country:{" "}
          <select name="" className="border-black border-2">
            <option value="">Palestine</option>
            <option value="">Lebanon</option>
            <option value="">Syria</option>
            <option value="">Pakistan</option>
          </select>
        </label>

        <label htmlFor="">
          City: <input type="text" className="border-2 border-black" />
        </label>
      </div>
      <div className="flex space-x-10">
        <Link to="/">
          <button className="text-2xl border-2 border-black rounded-lg px-4 py-2 bg-blue-500">Back</button>
        </Link>

        <Link to="/preferences">
          <button className="text-2xl border-2 border-black rounded-lg px-4 py-2 bg-blue-500">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Address;
