import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";

function Preferences() {
  const [notification, setNotification] = useState('');
  const { setData, data} = useForm();
  const navigate = useNavigate();

  const personelPref = (e) => {
    e.preventDefault();
    setData((prevData) => ({ ...prevData, notification }));
    console.log('Updated Form Data:', { ...data, notification });
    navigate("/summary");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <div className="text-center text-2xl space-y-2 mt-5">
        <h1>Multi-Step Registration Form</h1>
        <p>
          Step 3 of 3: <span className="font-medium">Personel Information</span>
        </p>
      </div>

      <div className="text-2xl mt-6 space-y-3">
        <p>Receive Notifications?</p>
        <div className="flex space-x-6 justify-center items-center">
          <label htmlFor="">No</label>
          <input
            type="radio"
            id="no"
            name="notification"
            checked={!notification}
            onChange={() => setNotification(false)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            id="yes"
            name="notification"
            checked={notification}
            onChange={() => setNotification(true)}
          />{" "}
        </div>
      </div>
      <div className="text-2xl space-x-4 mt-4">
        <Link to="../address">
          <button className="border-2 border-black bg-blue-500 px-4 py-2 rounded-lg mt-4">
            Back
          </button>
        </Link>

        <Link to="/summary">
          <button
            className="border-2 border-black bg-blue-500 px-4 py-2 rounded-lg mt-4"
            onClick={personelPref}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Preferences;
