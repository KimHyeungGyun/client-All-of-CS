import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import styled, { createGlobalStyle } from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const SearchWrapper = styled(Search)`
  margin-top : 50px;
`;

const Label = styled.div`
  font-size: 80px;
  font-weight: bolder;
`;

const MainWrapper = styled.div`
  margin-top : 100px;
  text-align: center;
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

  const onSearchHandler = useCallback((e) => {
    console.log(e);
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
        onPressEnter={onSearchHandler}
        style={{ width: 500, height: 30 }}
        bordered={true}
      />
      </MainWrapper>
    </AppLayout>
  );
};

export default Main;
