import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";

function Personel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {setData} = useForm();
  const navigate = useNavigate();

  const personelData = (e) => {
    e.preventDefault();
    setData({name, email}); 
    navigate("/address")
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-2xl text-center mt-4">
        <h1>Multi-Step Registration Form</h1>
        <p>
          Step 1 of 3: <span className="font-medium">Personel Information</span>
        </p>
      </div>
      <div className="flex flex-col items-start justify-start space-y-2">
        <label htmlFor="" className="font-medium text-xl">
          Name:{" "}
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border-black border-2 px-4 py-2"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        <label htmlFor="" className="font-medium text-xl">
          Email:{" "}
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border-black border-2 px-4 py-2"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4 border-2 border-black rounded-lg px-4 py-2 bg-blue-500 text-2xl">
        <Link to="address">
          <button onClick={personelData}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Personel;
