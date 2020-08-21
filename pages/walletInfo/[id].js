import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Button } from "antd";
import { FlexBox } from "../../reusuable/flexbox";
import {getInfoOfDept} from "../../actions/walletAction"
import Link from 'next/link'


const LinkForm = styled(Link)`
  font-size: 50px;
`;
const ResultForm = styled.div`
  margin-top: 170px;
  margin-left: 500px;
  width: 100%;
`;

const NumberForm = styled.div`
  padding: 10px;
  font-size: 50px;
  font-weight: bolder;
`;

const Number = styled.div`
  font-size: 50px;
  padding: 40px;
  font-weight: bolder;
  color: #646464;
`;

const ServiceForm = styled.div``;
const Service = styled.div`
  /* margin-top: 20px; */
  /* border-radius: 45%; */
  font-size: 30px;
  padding: 20px;
  font-weight: bolder;
  /* color: white;
  background-color: #FF9100;
  border: 5px solid #969696; */
`;

const QuickGuideForm = styled.div`
  margin-left: 30%;
  width: 700px;
`;

const Guide = styled.div`
  font-size: 40px;
  padding: 40px;
  font-weight: bolder;
  color: #646464;
`;

const walletInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoOfDept(id))
  }, [dispatch, id]);

  const infomation = useSelector((state) => state.wallet.infomation);

  return (
    <>
      <Head>
        <title>Wallet Info | 모두의 고객센터</title>
      </Head>
      <AppLayout>
      <ResultForm>
        <FlexBox>
          <NumberForm>
            TELL
            {infomation && infomation.CS_numbers.map((ele) => (
              <Number>{ele.number}</Number>
            ))}
          </NumberForm>
          <ServiceForm>
            고객센터 지원 유형
            {infomation && infomation.services.map((ele) => (
              <Service>{ele.service}</Service>
            ))}
          </ServiceForm>
          <QuickGuideForm>
            Quick Guide Line Up
            {infomation && infomation.CS_numbers.map((ele) =>
              ele.guides.map((guide) => <Guide>{guide.description}</Guide>)
            )}
          </QuickGuideForm>
        </FlexBox>
      </ResultForm>
      <LinkForm href="/mypage" type="text" danger><a>MyPage 페이지로 이동</a></LinkForm>
      </AppLayout>
    </>
  );
};

export default walletInfo;
