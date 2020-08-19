import React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const Signin = ({ handleOk, handleCancel, loading }) => {

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const { visible } = useSelector((state) => state.signform.signin);

  return (
    <>
      <Modal
        visible={visible}
        title="Sign In"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <a href="">Create an account</a>,
          <Button key="back" onClick={handleCancel}>
            돌아가기
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            가입하기
          </Button>,
        ]}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Signin;
