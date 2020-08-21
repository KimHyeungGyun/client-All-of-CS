import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled, { createGlobalStyle } from "styled-components";
import { FlexBox } from "../reusuable/flexbox";
import Avatar from "./UploadAvatar";
import AccountChange from "./ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setUsername } from "../actions/userAction"

const UserProfileForm = styled.div`
  margin-top: 50px;
  margin-right: 10%;
  margin-left: 200px;
`;
const Email = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const Username = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 35px;
  font-weight: 1000;
`;

const UsernameUpdate = styled(Form)`
  margin-right: 25%;
  margin-top: 10px;
`;

const EmailUpdate = styled(Form)`
  margin-right: 25%;
  margin-top: 10px;
`;

const Global = createGlobalStyle`
  .ant-upload{
    margin-top: 20px;
  }
`;

const UserProfile = () => {

  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user.siginUpData);

  const onChangeEmail = useCallback(
    (e) => {
      const body = {
        email: e.target.value,
      }
      dispatch(setEmail(body));
    },
    []
  );

  const onChangeUsername = useCallback(
    (e) => {
      const body = {
        email: e.target.value,
      }
      dispatch(setUsername(body));
    },
    []
  );

  const onSubmitEmail = useCallback(
    (e) => {
      let body = {
        email,
      }
      dispatch(setEmail(body));
    },
    [email]
  );

  const onSubmitUsername = useCallback(
    (e) => {
    },
    []
  );

  return (
    <>
      <FlexBox>
        <UserProfileForm className="flex-7">
          <Label>Profile</Label>
          <Global />
          <Avatar />
          <Email>Email : kwh4921@gmail.com</Email>
          <EmailUpdate onFinish={onSubmitEmail}>
            <FlexBox>
              <Input
                className="flex-9"
                addonBefore="New Email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter the email you want to change."
                onChange={onChangeEmail}
              />
              <Button className="flex-1" type="primary" htmlType="submit">
                Change
              </Button>
            </FlexBox>
          </EmailUpdate>
          <Username>Username : DevWhkang</Username>
          <UsernameUpdate onFinish={onSubmitUsername}>
            <FlexBox>
              <Input
                className="flex-9"
                addonBefore="Username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Please update your name."
                onChange={onChangeUsername}
              />
              <Button className="flex-1" type="primary" htmlType="submit">
                Update
              </Button>
            </FlexBox>
          </UsernameUpdate>
        </UserProfileForm>
        <AccountChange className="flex-3" />
      </FlexBox>
    </>
  );
};

export default UserProfile;
