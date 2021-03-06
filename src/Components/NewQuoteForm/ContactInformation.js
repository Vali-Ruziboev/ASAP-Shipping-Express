import { useHistory, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import useForceUpdate from "use-force-update";
const ContactInformation = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  number,
  setNumber,
  email,
  setEmail,
  date,
  setDate,
  validate,
  zipsValid,
  submit,
}) => {
  const [validator] = useState(new SimpleReactValidator());
  const forceUpdate = useForceUpdate();
  const history = useHistory();
  const { url } = useRouteMatch();
  const updatedPath = (() => {
    if (url === "/contact_information") {
      return "";
    } else {
      return `/${url.split("/")[1]}`;
    }
  })();
  const handleSubmit = (e) => {
    if (validator.allValid()) {
      submit(e);
      history.push(`${updatedPath}/quote_submitted`);
    } else {
      validator.showMessages();
      forceUpdate();
    }
  };

  const previous = () => history.push(`${updatedPath}/vehicle_information`);
  useEffect(() => {
    if (
      validate.map((i) => i.some((j) => j === "")).some((t) => t === true) ||
      zipsValid.some((i) => i === "")
    ) {
      history.push(`${updatedPath}`);
    }
  }, []);
  return (
    <div>
      <h4>Contact Information</h4>
      <div className="contact_info">
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <span className="invalid-input-field">
          {validator.message("first name", firstName, "required")}
        </span>
      </div>
      <div className="contact_info">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <span className="invalid-input-field">
          {validator.message("last name", lastName, "required")}
        </span>
      </div>
      <div className="contact_info">
        <label htmlFor="number">Phone Number</label>
        <input
          type="text"
          placeholder="(555) 555-5555"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <span className="invalid-input-field">
          {validator.message("number", number, "required|phone")}
        </span>
      </div>
      <div className="contact_info">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="invalid-input-field">
          {validator.message("email", email, "required|email")}
        </span>
      </div>
      <div className="contact_info">
        <label htmlFor="date">Pickup Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <span className="invalid-input-field">
          {validator.message("date", date, "required")}
        </span>
      </div>
      <div className="btns">
        <button onClick={previous}>{`< Previous`}</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ContactInformation;
