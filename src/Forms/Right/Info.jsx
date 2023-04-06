import React from "react";

function Info({ name, setName, email, setEmail, phone, setPhone }) {
  return (
    <>
      <div className="pb-4">
        <h1 className="h1">Personal info</h1>
        <p className="plainText">
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

          <div className="text-right pt-4 pr-6"></div>
        </form>
      </div>
    </>
  );
}

export default Info;
