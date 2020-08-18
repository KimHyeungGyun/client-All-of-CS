import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { LockOutlined } from '@ant-design/icons';
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../actions/userAction";


const ChangeAccountForm = styled(Form)`
  padding-top: 20px;
  padding-right: 25%;
`;

const ChangeInput = styled(Input)`
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Label = styled.div`
  font-size: 35px;
  font-weight: 1000;
  margin-top: 30px;
  margin-bottom: 65px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const ChangeButton = styled.div`
  margin-top: 10px;
`;

const AccountChange = () => {
  const dispatch = useDispatch();
  const { password } = useSelector((state) => state.user.siginUpData);

  //password state change of redux store
  const onChangePassword = useCallback((e) => {
    dispatch(setPassword(e.target.value));
  }, []);

  //useSelect -> password === passwordCheck ? true : ErrorMessage
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  
  //restrictions
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      console.log(password);


    },
    [password, passwordCheck, term]
  );

  return (
    <>
      <ChangeAccountForm onFinish={onSubmit}>
        <Label>Change Password</Label>
        {/* <div>
          <label>New Email</label>
          <br />
          <ChangeInput
            name="user-email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter the Email you want to change."
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div> */}
        <div>
          <label>New Password</label>
          <br />
          <ChangeInput
            name="user-password"
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Enter the Password you want to change."
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Confirm Password</label>
          <br />
          <ChangeInput
            name="user-password-check"
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Check New Password."
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage> Entered passwords do not match.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            Do you agree to the collection and use of personal information?
          </Checkbox>
          {termError && (
            <ErrorMessage>Accept the terms and conditions.</ErrorMessage>
          )}
        </div>
        <ChangeButton>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </ChangeButton>
      </ChangeAccountForm>
    </>
  );
};

export default AccountChange;
