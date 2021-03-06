import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    sent: false,
    msg: "",
  };

  resetForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      msg: "...sending",
    });

    let data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company,
      message: this.state.message,
    };
    axios
      .post(data)
      .then(() => {
        this.setState({ msg: "Request submitted! Thank you " });
        this.resetForm();
      })
      .catch(() => {
        this.setState({ msg: "Error, message not sent" });
      });
  };