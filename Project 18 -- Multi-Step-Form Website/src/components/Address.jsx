import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../contexts/FormContext";

function Address() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { setData } = useForm();

  const personel = (e) => {
    e.preventDefault();
    if(city === '')
    {
      alert('please fill in the field')
    }
    else
    {
      setData((prevData) => ({
        ...prevData,
        city,
        country,
      }));
      
      navigate("/preferences");
    }
  };

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
          <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border-black border-2"
          >
            <option>Select a country</option>
            <option>Palestine</option>
            <option>Lebanon</option>
            <option>Syria</option>
            <option>Pakistan</option>
          </select>
        </label>

        <label htmlFor="">
          City:{" "}
          <input
            type="text"
            className="border-2 border-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      </div>
      <div className="flex space-x-10">
        <Link to="/">
          <button className="text-2xl border-2 border-black rounded-lg px-4 py-2 bg-blue-500">
            Back
          </button>
        </Link>

        <Link to="/preferences">
          <button
            className="text-2xl border-2 border-black rounded-lg px-4 py-2 bg-blue-500"
            onClick={personel}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Address;
