import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import styled, { createGlobalStyle } from "styled-components";
import { Input, Carousel } from "antd";

const { Search } = Input;

const SearchWrapper = styled(Search)`
  margin-top : 30px;
`;

const Label = styled.div`
  font-size: 80px;
  font-weight: bolder;
  margin-top: 150px;
`;

const MainWrapper = styled.div`
height: 'auto';
color: '#fff';
line-height: '160px';
text-align: 'center';
background: '#364d79';
    
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
  .ant-carousel .slick-dots li{
    background-color: #1890ff;
  }
`;




const Main = () => {
  const contentStyle = {
    height: 'auto',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
  };

  return (
    <AppLayout>
      <Global/>
      <Carousel 
        speed= '2000'
      >
      <div>
      <h3 style={contentStyle}>
      <Label>모두의 고객센터</Label>
      <SearchWrapper
          placeholder="원하는 고객센터 회사를 입력 하세요."
          enterButton="검색"
          size="large"
          // onSearch={onSearchHandler}
          // onPressEnter={onSearchHandler}
          style={{ width: 500, height: 30 }}
        ></SearchWrapper>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Label>모두의 고객센터</Label>
      <SearchWrapper
          placeholder="원하는 고객센터 회사를 입력 하세요."
          enterButton="검색"
          size="large"
          // onSearch={onSearchHandler}
          // onPressEnter={onSearchHandler}
          style={{ width: 500, height: 30 }}
        ></SearchWrapper>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Label>모두의 고객센터</Label>
      <SearchWrapper
          placeholder="원하는 고객센터 회사를 입력 하세요."
          enterButton="검색"
          size="large"
          // onSearch={onSearchHandler}
          // onPressEnter={onSearchHandler}
          style={{ width: 500, height: 30 }}
        ></SearchWrapper>
      </h3>
    </div>
    </Carousel>
     
    </AppLayout>
  );
};

export default Main;
