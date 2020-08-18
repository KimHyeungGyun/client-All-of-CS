import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Tags from "../components/Tags";
import Results from "../components/Results";

const Info = ({ department }) => {
  return (
    <>
      <Head>
        <title>Mypage | 모두의 고객센터</title>
      </Head>
      <AppLayout>
        <Tags />
        {console.log(department)}
        <Results />
      </AppLayout>
    </>
  );
};

export default Info;
