import React, { useCallback } from "react";
import { Modal, Menu, Button } from "antd";
import styled from "styled-components";
import {
  showModalSignUpAction,
  showModalSignInAction,
} from "../actions/signAction";
import { useDispatch } from "react-redux";
import { FlexBox } from "../reusuable/flexbox";

import Signup from "./SignUpModal";
import Signin from "./SignInModal";

const Menubar = styled(Menu)`
  width: 100%;
  padding-top: 10px;
`;

const ButtonForm = styled(Button)`
  font-weight: bolder;
  font-size: 20px;
  color: #6e6e6e;
`;

const Nav = () => {
  const dispatch = useDispatch();

  const showModalSignUp = useCallback((e) => {
    dispatch(showModalSignUpAction(true));
  }, []);

  const showModalSignIn = useCallback((e) => {
    dispatch(showModalSignInAction(true));
  }, []);

  return (
    <FlexBox>
      <Menubar mode="horizontal" className="flex-8">
        <Menu.Item className="Home">
          <ButtonForm type="link" href="/">
            <a>Home</a>
          </ButtonForm>
        </Menu.Item>
        <Menu.Item className="Second">
          <ButtonForm type="link" href="/second">
            <a>Second Page</a>
          </ButtonForm>
        </Menu.Item>
        <Menu.Item className="Third">
          <ButtonForm type="link" href="/third">
            <a>Third Page</a>
          </ButtonForm>
        </Menu.Item>
      </Menubar>
      <Menubar mode="horizontal" className="flex-2">
        <Menu.Item className="Mypage">
          <ButtonForm type="link" href="/mypage">
            Mypage
          </ButtonForm>
        </Menu.Item>
        <Menu.Item className="SignUp">
          <ButtonForm type="link" onClick={showModalSignUp}>
            Sign Up
          </ButtonForm>
          <Signup />
        </Menu.Item>
        <Menu.Item className="SignIn">
          <ButtonForm type="link" onClick={showModalSignIn}>
            Sign In
          </ButtonForm>
          <Signin />
        </Menu.Item>
      </Menubar>
    </FlexBox>
  );
};

export default Nav;
