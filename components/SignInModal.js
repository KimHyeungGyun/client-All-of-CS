import React, { useCallback } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleCancleAction } from "../actions/signAction";
import Form from "react-bootstrap/Form";

const Signin = () => {
  const { visible } = useSelector((state) => state.signform.signin);

  const dispatch = useDispatch();

  const handleCancel = useCallback((e) => {
    dispatch(handleCancleAction(false));
  }, []);

  return (
    <Modal
      title="Sign In"
      centered
      visible={visible}
      closable={true}
      mask={false}
      maskClosable={true}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Email" />
        </Form.Group>
      </Form>
    </Modal>
  );
};

export default Signin;
