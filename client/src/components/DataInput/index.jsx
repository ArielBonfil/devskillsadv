import React, { useState, useContext } from "react";
import "./DataInput.css";
import { AppContext } from "../../Context";
const DataInput = () => {
  const { addMember, actualData } = useContext(AppContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [ssn, setSsn] = useState();
  const handleSubmit = (e) => {
    let newMember = {
      firstName,
      lastName,
      address,
      ssn,
    };
    let memberExist = actualData.find((m) => m.ssn === ssn);
    if (
      newMember.firstName &&
      newMember.lastName &&
      newMember.address &&
      newMember.ssn
    ) {
      if (!memberExist) {
        addMember(newMember);
      } else {
        alert("The member with ssn " + ssn + "already exists");
      }
    } else {
      alert("Rellene los campos");
    }

    e.preventDefault();
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <div className="formLabels__container">
          <label>
            First Name:
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value.trim())}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value.trim())}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value.trim())}
            />
          </label>
          <label>
            SSN:
            <input
              type="text"
              onChange={(e) => setSsn(e.target.value.trim())}
            />
          </label>
        </div>
        <div className="form__buttons">
          <div
            onClick={() =>
              document
                .querySelectorAll(".formLabels__container input")
                .forEach((i) => (i.value = ""))
            }
          >
            Reset
          </div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default DataInput;
