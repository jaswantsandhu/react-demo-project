import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { loginUser } from "../../../store/actions/user";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

class AdminLoginPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        // validate={(values) => {
        //   const errors = {};

        //   if (values.email === "") {
        //     errors.email = "Email  cannot be blank";
        //   }

        //   return errors;
        // }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          this.props.loginUser(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <p>
                <label>Email</label>
                <input
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter your email."
                />
                {errors && errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </p>
              <p>
                <label>Password</label>
                <input
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter your password."
                />
                {errors && errors.password && (
                  <span className="form-error">{errors.password}</span>
                )}
              </p>
              <p>
                <button type="submit">Login</button>
              </p>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default connect(null, { loginUser })(AdminLoginPage);
