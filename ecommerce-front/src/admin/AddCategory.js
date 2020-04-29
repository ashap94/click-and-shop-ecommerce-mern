import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    let capitalName = capitalizeString(name);

    createCategory(user._id, token, { name: capitalName }).then((data) => {
      if (data.error) {
        setError(true);
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          value={name}
          className="form-control"
          placeholder="Name of Category"
          onChange={handleChange}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return (
        <h3 className="text-success">{capitalizeString(name)} is created</h3>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <h3 className="text-danger">
          {capitalizeString(name)} already exists as a category
        </h3>
      );
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link className="text-info" to="/admin/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${user.name}, ready to add a new category?`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
