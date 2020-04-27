import React from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => {
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text_muted">Name</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label className="text_muted">Email</label>
        <input type="email" className="form-control" />
      </div>

      <div className="form-group">
        <label className="text_muted">Password</label>
        <input type="password" className="form-control" />
      </div>
    </form>
  );

  return (
    <Layout title="Signup" description="Signup to Node React E-commerce App">
      {signUpForm()}
    </Layout>
  );
};
export default Signup;
