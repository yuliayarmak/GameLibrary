import React, { Component, useState } from "react";
import Input from "@material-ui/core/Input";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

export const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "", name: "", surname: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required name";
          }
          if (!values.email) {
            errors.email = "Required email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required password";
          }
          if (!values.name) {
            errors.name = "Required name";
          }
          if (!values.surname) {
            errors.surname = "Required surname";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post(`/records/register`, { values }).then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/login");
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <h1></h1>
            <Input
              placeholder="Name"
              id="name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              formControlProps={{
                fullWidth: true,
              }}
            />
            {errors.name && touched.name && errors.name}
            <Input
              placeholder="Surname"
              id="surname"
              type="text"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
              formControlProps={{
                fullWidth: true,
              }}
            />
            {errors.surname && touched.surname && errors.surname}
            <Input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              formControlProps={{
                fullWidth: true,
              }}
            />
            {errors.email && touched.email && errors.email}
            <Input
              placeholder="Password"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              formControlProps={{
                fullWidth: true,
              }}
            />
            {errors.password && touched.password && errors.password}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              color="default"
              className="form__custom-button"
            >
              Register
            </Button>
            <Link to="/login"  color="inherit">already have an account?</Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  width: 400px;
  padding: 20px 50px;
  height: 500px;
  border-radius: 10px;
  background-color: #d1dad6;
  color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
