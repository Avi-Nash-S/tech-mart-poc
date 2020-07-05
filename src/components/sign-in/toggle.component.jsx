import React from "react";
import FormItem from "antd/lib/form/FormItem";
import { Form, Button } from "antd";
import "./toggle.style.css";

import { ToggleContainer } from "./sign-in.styles";

const Toggle = (props) => (
  <ToggleContainer>
    <Form className="Form_toggle">
      <FormItem
        className="lgn_btn"
        style={{ borderBottom: "solid 1px #041e42" }}
      >
        <Button className="login_btn" onClick={props.onLoginClick}>
          Login
        </Button>
      </FormItem>
      <FormItem
        className="Reg_btn"
        style={{ borderBottom: "solid 1px #041e42" }}
      >
        <Button className="Register_btn" onClick={props.onRegisterClick}>
          Register
        </Button>
      </FormItem>
      <FormItem
        className="Sup_btn"
        style={{ borderBottom: "solid 1px #041e42" }}
      >
        <Button className="Support_btn" onClick={props.onSupportClick}>
          Support
        </Button>
      </FormItem>
    </Form>
  </ToggleContainer>
);

export default Toggle;
