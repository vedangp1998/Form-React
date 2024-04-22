import { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    event.target.reset();

    console.log(formValues);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "firstname is Required!";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is Required!";
    }
    if (!values.email) {
      errors.email = "email is Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email formate!";
    }

    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more then 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Password is Required!";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password does not match!";
    }

    if (!values.phonenumber) {
      errors.phonenumber = "Phone No is Required!";
    }

    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Welcom to OnlineSales.ai </h2>
        <h4>Please submit the form </h4>

        <div className="container">
          <div className="control">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                values={formValues.firstname}
                onChange={handleChange}
              />
              <span>{formErrors.firstname}</span>
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                values={formValues.lastname}
                onChange={handleChange}
              />
              <span>{formErrors.lastname}</span>
            </div>
          </div>

          <div className="control">
            <div>
              <label htmlFor="firstname">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                values={formValues.email}
                onChange={handleChange}
              />
              <span>{formErrors.email}</span>
            </div>
            <div>
              <label htmlFor="lastname">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                values={formValues.City}
                onChange={handleChange}
              />
              <span>{formErrors.city}</span>
            </div>
          </div>

          <div className="control">
            <div>
              <label htmlFor="firstname">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                values={formValues.password}
                onChange={handleChange}
              />
              <span>{formErrors.password}</span>
            </div>
            <div>
              <label htmlFor="lastname">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                values={formValues.confirmpassword}
                onChange={handleChange}
              />
              <span>{formErrors.confirmpassword}</span>
            </div>
          </div>
          <div className="control-radio">
            <label>Gender : </label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
        </div>

        <hr />
        <br />
        <div className="control">
          <div>
            <label htmlFor="firstname">Phone No:</label>
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone No"
              values={formValues.phonenumber}
              onChange={handleChange}
            />
            <span>{formErrors.phonenumber}</span>
          </div>
          <div>
            <label for="start">DOB</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2024-04-23"
              min="1900-01-01"
              max="2024-04-24"
            />
          </div>
          <div>
            <label htmlFor="nationality">Nationality is Indian</label>
            <select id="nationality">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="control">
          <label htmlFor="phone">
            Select the Tech youre presently working?
          </label>
          <select id="role" name="role" required>
            <option value="reactjs">React JS</option>
            <option value="nodejs">Node Js</option>
            <option value="python">Python</option>
            <option value="blockchain">BlockChain</option>
            <option value="devops">DevOps</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <hr />
        <br />

        <div className="control-file">
          <label for="avatar">Choose a profile picture :</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>

        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control-check">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>

          <div className="control-check">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>

          <div className="control-check">
            <input
              type="checkbox"
              id="other"
              name="acquisition"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>

        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              name="terms"
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        <p className="form-actions">
          <button type="submit" className="button">
            Submit
          </button>
        </p>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message-success">Sumbitted Successfully!</div>
      ) : (
        <div className="json">
          <h3>JSON of Form :</h3>
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Form;
