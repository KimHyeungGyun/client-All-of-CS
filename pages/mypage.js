import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import UserProfile from "../components/UserProfile";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from "../components/Slider"

const Label = styled.label`
  font-size: 30px;
  font-weight: 1000;
  margin-left: 180px;
`;

const Mypage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>Mypage | 모두의 고객센터</title>
      </Head>
      <AppLayout>
        {/* isLoggedIn &&  */}
        {<UserProfile header="Profile" />}
        <br />
        <Label>Wallet</Label>
        <br />
        <Slider />
      </AppLayout>
    </>
  );
};

export default Mypage;
