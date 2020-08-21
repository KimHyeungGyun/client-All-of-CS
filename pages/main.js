import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import styled, { createGlobalStyle } from "styled-components";
import { Input } from "antd";
import Router from "next/router";

const { Search } = Input;

const SearchWrapper = styled(Search)`
  margin-left: 300px;
`;

const Label = styled.div`
  margin-bottom: 100px;
  font-size: 80px;
  font-weight: bolder;
`;

const MainWrapper = styled.div`
  margin-top: 200px;
  margin-left: 400px;
`;

const Global = createGlobalStyle`
  .ant-btn-lg{
    font-weight: bolder;
    font-size: 20px;
    border-radius: 15px;
  }
  .ant-input-lg{
    border-radius: 18px;
  }
  .ant-input-group{
    border: 3px solid #d9d9d9;
    border-radius: 20px;
    box-shadow : 5px 5px 7px #999;
  }
  .ant-input-group-addon{
    border-radius: 10px;
  }
`;

const Main = () => {
  const onSearchHandler = useCallback((input) => {
    Router.push(`/info/${input}`)
  }, []);

  return (
    <AppLayout>
      <Global/>
      <MainWrapper>
        <Label>모두의 고객센터</Label>
        <SearchWrapper
        placeholder="원하는 고객센터 회사를 입력 하세요."
        enterButton="검색"
        size="large"
        onSearch={onSearchHandler}
        // onPressEnter={onSearchHandler}
        style={{ width: 500, height: 30 }}
        bordered={true}
      />
      </MainWrapper>
    </AppLayout>
  );
};

export default Main;
