import React, { useState } from "react";
import AddContact from "../components/AddContact";
import AllContact from "../components/AllContact";
import "../index.css";

const Contact = () => {
  const [showAddContact, setShowAddContact] = useState(true);

  return (
    <div className="flex flex-col justify-center text-center mt-10 relative">
      <div className="w-full flex flex-col items-center ">
        <div className=" p-2 rounded-md shadow-md mb-2 ">
          <button
            className={`text-xl md:text-2xl font-semibold py-2 px-4 mb-2 md:mb-4 rounded-md focus:outline-none m-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ${
              showAddContact
                ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                : "text-gray-800 hover:bg-pink-300"
            }`}
            onClick={() => setShowAddContact(true)}
          >
            Add Contact
          </button>
          <button
            className={`text-xl md:text-2xl font-semibold py-2 px-4 rounded-md focus:outline-none bg-gradient-to-r m-4 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ${
              !showAddContact
                ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                : "text-gray-800 hover:bg-pink-300"
            }`}
            onClick={() => setShowAddContact(false)}
          >
            View Contacts
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="p-5 glass-container">
          {showAddContact ? <AddContact /> : <AllContact />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
