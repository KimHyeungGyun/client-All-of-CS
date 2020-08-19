import React, {useCallback} from 'react';
import Form from 'react-bootstrap/Form';
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleCancleAction } from "../actions/signAction"

const Signup = ({handleOk, handleCancel, loading}) =>{
    const dispatch = useDispatch();
    const { visible } = useSelector(state => state.signform.signup);

    const handleCancle= useCallback(() => {
        dispatch(handleCancleAction())
    })

        return (
          <>
            <Modal
                visible={visible}
                title="Sign Up"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                <Button key="back" onClick={handleCancle}>
                    돌아가기
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={handleOk}
                >
                    가입하기
                </Button>
                ]}
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
          </>
        );
}


export default Signup;