import React from "react";
import Divider from "@mui/material/Divider";

function Summary({ name, email, phone, activePlan, activeAdd, submitHandler }) {
  console.log(activeAdd);
  return (
    <>
      <div className="pb-2">
        <h1 className="h1">Summary</h1>
        <p className="plainText text-left">
          You can choose between monthly or yearly billing options.
        </p>
      </div>
      <div className="grid p-2 rounded-md bg-blue-100 border border-gray-200 border-opacity-60">
        <div className="p-1">
          {/* Info */}

          <div className="grid grid-rows-2 pb-1">
            <div className="row-span-1">
              <div className="grid grid-cols-2">
                <span className="h3 font-semibold col-span-1 text-left text-gray-300 grid-rows-1">
                  {name}
                </span>
                <span className="h3 font-semibold col-span-1 text-right text-gray-300 grid-rows-1">
                  +{phone}
                </span>
              </div>
            </div>
            <span className="h3 font-semibold text-gray-300 grid-rows-1">
              {email}
            </span>
          </div>
          <Divider />

          {/* Plans */}
          <div className="grid grid-cols-3 pt-1">
            <div className="col-span-2">
              <div className="grid grid-rows-2">
                <h2 className="h2 text-lg row-span-1">
                  {activePlan.text} (Monthly)
                </h2>
                <span
                  className="h3 text-blue-400 underline cursor-pointer"
                  onClick={() => {
                    console.log("daniel");
                    submitHandler(2);
                  }}
                >
                  Change
                </span>
              </div>
            </div>
            <h1 className="h2 col-span-1 text-right">{activePlan.price}</h1>
          </div>
          <Divider />
          {/* Services */}
          <div className="p-2">
            {activeAdd.map((item, i) => {
              return (
                <div key={i} className="grid grid-cols-3 ">
                  <h1 className="h3 text-gray-300 font-semibold col-span-2">
                    {item.service}
                  </h1>
                  <p className="h3 text-right text-gray-300 font-semibold col-span-1">
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
