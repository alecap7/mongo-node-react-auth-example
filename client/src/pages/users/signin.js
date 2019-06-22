import React from "react";
import Layout from "../../components/shared/layout";
import { Form } from "../../components/users/signin";

const Signin = function() {
  return (
    <Layout>
      <h2>Signin</h2>
      <Form />
    </Layout>
  );
};

export default Signin;
