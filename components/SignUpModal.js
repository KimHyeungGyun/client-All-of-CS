import React, { useCallback } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleCancleAction, showModalSignUpAction } from "../actions/signAction";
import Form from 'react-bootstrap/Form';
import { setEmail, setPassword } from "../actions/userAction"
import Axios from "axios";

const Signup = () => {
  //modal
  const { visible } = useSelector((state) => state.signform.signup);

  const dispatch = useDispatch();

  const handleCancel = useCallback((e) => {
    dispatch(handleCancleAction(false));
  }, []);

  //sign up 
  const { email, password } = useSelector((state) => state.user.siginUpData)
  
  const onChangeEmail = useCallback((e) => {
      dispatch(setEmail(e.target.value));
    },[email]
  );

  const onChangePassword = useCallback((e) => {
      dispatch(setPassword(e.target.value));
    },[password]
  );

  const handleSubmit = useCallback(()=>{
    return Axios.post('http://13.125.235.4:3000/user/sign-up', {email, password})
    .then((response) => {
      alert("회워가입을 축하합니다!")
      console.log(response)
      dispatch(showModalSignUpAction(false));
      
    })
    .catch((err) => {
      console.log(err)
    })
    
  },[email, password]
  );
  
  return (
    <Modal
      title="Sign Up"
      centered
      visible={visible}
      closable={true}
      mask={false}
      width={500}
      maskClosable={true}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={onChangeEmail} />
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

export default Signup;
