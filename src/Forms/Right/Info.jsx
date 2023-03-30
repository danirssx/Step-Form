import React from "react";

function Info({ name, setName, email, setEmail, phone, setPhone }) {
  const buttonHandler = (e) => {
    e.preventDefault();

    // Set empty values
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="p-4">
      <div className="pb-4">
        <h1 className="text-gray-300 text-left font-semibold text-4xl">
          Personal Info
        </h1>
        <p className="text-gray-200 font-light text-sm pt-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div>
        <form>
          <div className="pb-2 text-left">
            <h3 className="h3">Name</h3>
            <input
              className="input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="pb-2 text-left">
            <h3 className="h3">Email Address</h3>
            <input
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="pb-2 text-left">
            <h3 className="h3">Phone Number</h3>
            <input
              className="input"
              placeholder="+"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="text-right pt-4 pr-6">
            <button className="button" onClick={buttonHandler}>
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Info;
