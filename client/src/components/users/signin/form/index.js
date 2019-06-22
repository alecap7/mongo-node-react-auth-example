import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Text, Password, Submit } from "../../../shared/inputs";
import { Error } from "./styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
});

const Form = ({
  handleSubmit,
  isSubmitting,
  handleChange,
  handleBlur,
  touched,
  errors,
  status
}) => (
  <form onSubmit={handleSubmit}>
    <h6>Username</h6>
    <Text
      name="username"
      error={
        (errors.username && touched.username) || (status && status.username)
      }
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <br />
    {errors.username && touched.username && <Error>{errors.username}</Error>}
    {status && status.username && <Error>{status.username}</Error>}
    <h6>Password</h6>
    <Password
      name="password"
      error={
        (errors.password && touched.password) || (status && status.password)
      }
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <br />
    {errors.password && touched.password && <Error>{errors.password}</Error>}
    {status && status.password && <Error>{status.password}</Error>}
    <br />
    <Submit disabled={isSubmitting} value="Signin" />
  </form>
);

const FinalForm = ({ history, authenticate }) => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    const { ok, errors } = await authenticate(values);
    if (ok) history.push("/users/profile");
    else {
      setSubmitting(false);
      setStatus(errors);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={Form}
    />
  );
};

export default withRouter(
  connect(
    null,
    actions
  )(FinalForm)
);
