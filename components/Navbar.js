import React, { useCallback } from "react";
import { Menu, Button } from "antd";
import styled, { css } from "styled-components";
import { showModalSignUpAction, showModalSignInAction} from "../actions/signAction";
import { logoutAction, signUp } from "../actions/userAction"
import { useDispatch, useSelector } from "react-redux";
import { FlexBox } from "../reusuable/flexbox";
import Axios from "axios";

import Signup from "./SignUpModal";
import Signin from "./SignInModal";


const ButtonFormLeft = styled(Button)`
  font-weight: bolder;
  font-size: 20px;
  color: #6e6e6e;
  margin-top : -100px;
  margin-left: 50px;
`;

const ButtonFormRight = styled(Button)`
  font-weight: bolder;
  font-size: 20px;
  color: #6e6e6e;
  margin-left: 50px;
`;

const ButtonFormMypage = styled(Button)`
  font-weight: bolder;
  font-size: 20px;
  color: #6e6e6e;
  margin-left: 600px;
`;

const LogoImg = {
  width : '150px'
}

const Nav = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user)

  const showModalSignUp = useCallback(() => {
    dispatch(showModalSignUpAction(true));
  }, []);

  const showModalSignIn = useCallback((e) => {
    dispatch(showModalSignInAction(true));
  }, []);

  const { user } = useSelector((state) => state.user)

  console.log(user)
  const logOut = useCallback(() => {
    if(user === null){
      console.log(user)
    }else{
      return Axios.get('http://13.125.235.4:3000/user/sign-out')
      .then((response) => {
       console.log(response)
       alert("로그아웃 되었습니다.")
       dispatch(logoutAction());
       })
       .catch((err) => {
         console.log(err)
       }),[user] 
    }
  });



  return (
    <FlexBox className=".flex-5">
      <Menu mode="horizontal" className="flex-8">
        <Menu.Item className="Home">
          <img src="/img/logo_transparent.png" alt="logo" href="/" style={LogoImg}/>
        </Menu.Item>
        <Menu.Item className="SignUp">
              <ButtonFormLeft type="link" onClick={showModalSignUp} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
               
              </ButtonFormLeft>
              <Signup/>
              </Menu.Item>
              <Menu.Item className="SignUp">
              <ButtonFormLeft type="link" onClick={showModalSignUp} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
               
              </ButtonFormLeft>
              <Signup/>
              </Menu.Item>
              <Menu.Item className="SignIn">
                <ButtonFormRight type="link" onClick={showModalSignIn} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
                </ButtonFormRight>
              </Menu.Item> 
              <Menu.Item className="SignUp">
              <ButtonFormLeft type="link" onClick={showModalSignUp} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
               
              </ButtonFormLeft>
              <Signup/>
              </Menu.Item>
              <Menu.Item className="SignUp">
              <ButtonFormLeft type="link" onClick={showModalSignUp} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
                
              </ButtonFormLeft>
              <Signup/>
              </Menu.Item>
              <Menu.Item className="SignIn">
                <ButtonFormRight type="link" onClick={showModalSignIn} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
       
                </ButtonFormRight>
              </Menu.Item> 
              <Menu.Item className="SignUp">
              <ButtonFormLeft type="link" onClick={showModalSignUp} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
                Sign Up
              </ButtonFormLeft>
              <Signup/>
              </Menu.Item>
              <Menu.Item className="SignIn">
                <ButtonFormRight type="link" onClick={showModalSignIn} style={{display : !isLoggedIn ? 'inline' : 'none'}}>
                  Sign In
                </ButtonFormRight>
              </Menu.Item> 
              <Signin/>
             <Menu.Item className="Mypage">
             <ButtonFormMypage type="link" href="/mypage" style={{display : isLoggedIn ? 'inline' : 'none'}}>
               Mypage
             </ButtonFormMypage>
             </Menu.Item>
             <Menu.Item className="logout">
             <ButtonFormRight type="link" onClick={logOut} style={{display : isLoggedIn ? 'inline' : 'none'}}>
             logOut
             </ButtonFormRight>
             </Menu.Item> 
      </Menu>
    </FlexBox>
  );
};

export default Nav;
