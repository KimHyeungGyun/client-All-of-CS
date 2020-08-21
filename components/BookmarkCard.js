import React, { useCallback } from "react";
import {Card, Button, Col, Row } from "antd";
import styled from 'styled-components';
import { HeartTwoTone, CheckCircleTwoTone, PhoneOutlined } from '@ant-design/icons';
import { useDispatch,  } from "react-redux";
import { getInfoOfDept } from "../actions/walletAction";
import Router from "next/router";
// import {Button} from 'react-bootstrap'

const WalletCard = styled(Card)`
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  box-shadow : 2px 2px 5px #999;
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const SpanLabel = styled.div`
  font-style: italic;
  font-weight: bolder;
`;

const BookmarkLabel = styled.div`
  font-weight: bolder;
  font-size: 30px;
  padding-top: 50px;
`;

const ButtonFrom = styled(Button)`
  color: #323232;
  font-style: italic;
  font-weight: bolder;
`;

const BookmarkCard = ({ company, dept, id}) => {
  const dispatch = useDispatch();

  const showInfoOfDept = useCallback((deptId) => {
    dispatch(getInfoOfDept(deptId))
    Router.push(`/walletInfo/${deptId}`)
  }, [dispatch, getInfoOfDept]);

  return (
    <Row gutter={12}>
      <Col span={4}>
        <WalletCard hoverable title={company}>
          <SpanLabel>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            &nbsp;&nbsp; Bookmark List
          </SpanLabel>
          {dept.map((departments) => {
            return (
              <p>
                <HeartTwoTone twoToneColor="#eb2f96" />
                &nbsp;&nbsp;
                <ButtonFrom type="link" onClick={() => showInfoOfDept(departments.id)}>{departments.department}</ButtonFrom>
              </p>
            );
          })}
        </WalletCard>
      </Col>
    </Row>
  );
};

export default BookmarkCard;
