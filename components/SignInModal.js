import React, { useCallback } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleCancleAction } from "../actions/signAction";
import Form from "react-bootstrap/Form";
import { setEmail, setPassword, loginAction } from "../actions/userAction"
import Axios from "axios";

const Signin = () => {
  //modal
  const { visible } = useSelector((state) => state.signform.signin);

  const dispatch = useDispatch();

  const handleCancel = useCallback((e) => {
    dispatch(handleCancleAction(false));
  }, []);

  //sign in
  const { email, password } = useSelector((state) => state.user.siginUpData)
  
  const onChangeEmail = useCallback((e) => {
      dispatch(setEmail(e.target.value));
    },[email]
  );

  const onChangePassword = useCallback((e) => {
      dispatch(setPassword(e.target.value));
    },[password]
  );

  const handleLogin = useCallback(() => {
    if(!email){
      alert("이메일을 입력해주세요.")
    }else if(!password){
      alert("패스워드를 입력해주세요.")
    }else{
      //db와 비교해서 이메일이 있으면 로그인 안되게 막기.
      //db와 비교해서 패스워드가 맞지 않으면 로그인 안되게 막기
      //로그인 시 세션유지하면서 mypage 접근 허용
      dispatch(loginAction())
    }
      
    },[email, password]
  )

  return (
    <Modal
      title="Sign In"
      centered
      visible={visible}
      closable={true}
      mask={false}
      maskClosable={true}
      onOk={handleLogin}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Email" />
        </Form.Group>
      </Form>
    </Modal>
  );
};

export default Signin;
