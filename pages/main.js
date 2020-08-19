import AppLayout from '../components/AppLayout';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React , {useCallback, useState} from 'react';

const Main = () => {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );

    const MainTitleText = styled.p`
        text-align : center;
        font-size : 25pt;
        margin-top : 200px;
    `;

    const ServeText = styled.p`
        text-align : center;
        font-size : 25pt;
    `;

   

    return (
        <AppLayout>

        <div>
            {/* 5초 뒤 자동 전환 */}
            <Carousel interval={5000}>
            <Carousel.Item>
            <MainTitleText>모두의 고객센터</MainTitleText>
            <Search
                style={{ width: 500, marginLeft: 500}}
                maxLength="100"
                placeholder="서비스를 받고자 하는 회사를 입력해주세요"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={value => console.log(value)}
                />
            </Carousel.Item>

            <Carousel.Item>
            <MainTitleText>검색만으로 원하는 고객센터를 찾아보세요!</MainTitleText>
            <MainTitleText>모두의 고객센터</MainTitleText>
            <MainTitleText>모두의 고객센터</MainTitleText>
            <MainTitleText>모두의 고객센터</MainTitleText>
            </Carousel.Item>
            
            <Carousel.Item>
            <MainTitleText>가족이 되어 주세요!</MainTitleText>
            <ServeText>
                가족이 되면 Wallet 기능을 이용 할 수 있어요!<br></br>
                Wallet 기능은 내가 자주 이용하는 고객센터를 모아 볼 수 있어요!<br></br>
                운영진에게 피드백을 줄 수 있어요!<br></br>
                회원들과 커뮤니티를 만들 수 있어요!<br></br>
            </ServeText>
           
            </Carousel.Item>
            </Carousel>
        </div>
        </AppLayout>
    )

 }
    
export default Main;
