import React, { Component } from 'react'
import '../styles/style.scss';
//import {msg} from '../nodemailerFile';
//import { msg } from "express";


function FormContact({msg}) {
  return (
    <div className="contact">
      {/* {{msg}} */}
      <form action="send" method="POST"  id="formMessage" className="form-contact__form-content">
          <input 
              id="mail-name" 
              type="text" 
              className="form-contact__form-content_form-name footer-input" 
              placeholder="Имя" 
          />
          <input 
              id="mail-email" 
              type="email" 
              className="form-contact__form-content_form-email footer-input" 
              placeholder="Электронный адресс"
          />
          <textarea 
              id="mail-message" 
              name="message" 
              className="form-contact__form-content_form-message footer-input"
              placeholder="Сообщение">
          </textarea>
          <button 
              id="mail-submit" 
              type="submit" 
              className="btn-primary">
                  Отправить
          </button>
          <div className="form-message"></div>
      </form>
    </div>
  )
}

export default FormContact
  



//import serverMailPHP from '../mail.php';
//import '../js/script';


/* const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
  
    return valid;
};

class FormContact extends Component {

    constructor(props) {
        super(props);

        this.state = {
          userName: null,
            email: null,
            message: null,
            formErrors: {
              userName: "",
                email: "",
                message: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                User Name: ${this.state.userName}
                Email: ${this.state.email}
                Message: ${this.state.message}
            `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "userName":
                formErrors.userName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "message":
                formErrors.message =
                    value.length < 5 ? "minimum 5 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
      

    render() {
        const { formErrors } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit} id="formMessage" className="form-contact__form-content">
                    <input 
                        id="mail-name" 
                        type="text" 
                        className={`form-contact__form-content_form-name footer-input ${formErrors.userName.length > 0 ? "error" : null}`} 
                        placeholder="Имя" 
                        name="userName"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.userName.length > 0 && (
                        <span className="errorMessage">{formErrors.userName}</span>
                    )}
                    <input 
                        id="mail-email" 
                        type="email" 
                        className={`form-contact__form-content_form-email footer-input ${formErrors.email.length > 0 ? "error" : null}`} 
                        placeholder="Электронный адресс"
                        name="email"
                        noValidate
                        onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                    <textarea 
                        id="mail-message" 
                        name="message" 
                        className={`form-contact__form-content_form-message footer-input ${formErrors.message.length > 0 ? "error" : null}`}
                        placeholder="Сообщение"
                        noValidate
                        onChange={this.handleChange}>
                    </textarea>
                    {formErrors.message.length > 0 && (
                        <span className="errorMessage">{formErrors.message}</span>
                    )}
                    <button 
                        id="mail-submit" 
                        type="submit" 
                        className="btn-primary">
                            Отправить
                    </button>
                    <div className="form-message"></div>
                </form>
            </>
        )
    }
}

export default FormContact */


/* const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
      };
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
  
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default App; */