import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import CompanyTags from "../../components/CompanyTags";
import Results from "../../components/Results";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { searchHandler } from '../../actions/searchAction';
import styled from "styled-components";
import { Button } from "antd";

const Error = styled.div`
  margin-top: 300px;
  margin-left: 600px;
  font-size: 40px;
  font-weight: bolder;
`;

const ButtonForm = styled(Button)`
  margin-left: 150px;
  margin-top: 70px;
  font-size: 30px;
`;

const Info = () => {
  const router = useRouter();
  const { search } = router.query;
  
  const dispatch = useDispatch();
  console.log( typeof search);
  useEffect(() => {
    dispatch(searchHandler(search))
  }, [dispatch, search]);

  const { companyTags } = useSelector(state => state.search);
  
  const filter = (companyTags) => {
    if (companyTags) {
      if (companyTags.length === 0) {
        return (
          <Error>
            오! 이런... 찾는 고객센터의 회사가 없네요.
            <br />
            <ButtonForm href="/" type="text" danger>
              메인 페이지로 이동
            </ButtonForm>
          </Error>
        );
      } else return (
        companyTags.map((ele) => <CompanyTags id={ele.id} company={ele.company} />)
      );
      }
  };
  
  const infomation = useSelector(state => state.search.infomation)

  return (
    <>
      <Head>
        <title>Info | 모두의 고객센터</title>
      </Head>
      <AppLayout>
        {filter(companyTags)}
        {infomation && <Results info={infomation}/>}
      </AppLayout>
    </>
  );
};

export default Info;
