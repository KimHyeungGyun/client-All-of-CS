import React from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import Tags from "../../components/Tags";
import Results from "../../components/Results";
import { useRouter } from "next/router";

const Info = () => {
  const router = useRouter();
  const { dept } = router.query;

  return (
    <>
      <Head>
        <title>Info | 모두의 고객센터</title>
      </Head>
      <AppLayout>
        {/* <Tags /> */}

        <Results dept={dept}/>

      </AppLayout>
    </>
  );
};

export default Info;
