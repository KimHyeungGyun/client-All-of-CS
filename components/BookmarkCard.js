import React, { useCallback } from "react";
import {Card, Col, Row, Modal, Button } from "antd";
import styled from 'styled-components';
import { HeartTwoTone, CheckCircleTwoTone, PhoneOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { turnVisible, saveTempDept } from "../actions/walletAction";
import { Router } from "next/router";

const WalletCard = styled(Card)`
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  box-shadow : 2px 2px 5px #999;
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 15px;
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
  /* box-shadow : 2px 2px 5px #999; */
  /* border-radius: 10px; */
  /* border: 2px solid #d9d9d9; */
`;

const BookmarkCard = ({ cards, card, key}) => {
  const { visible } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const showModal = useCallback((e) => {
    dispatch(turnVisible(true))
    // dispatch(setDept())
    // Router.push(`/info/1`)
  }, []);

  const handleOk = useCallback((e) => {
    dispatch(turnVisible(false))
  }, []);

  const handleCancel = useCallback((e) => {
    dispatch(turnVisible(false))
  }, []);
  
  const tempDept = useCallback((dept) => {
    dispatch(saveTempDept(dept))
  }, []);

  return (
    <Row gutter={12}>
      <Col span={4}>
        <WalletCard hoverable title={card.company}>
          <SpanLabel>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            &nbsp;&nbsp; Bookmark List
          </SpanLabel>
          {card.department.map((dept, idx) => {
            return (
              <p>
                <HeartTwoTone twoToneColor="#eb2f96" />
                &nbsp;&nbsp;
                <ButtonFrom key={idx} type="link" onClick={showModal}>
                  {dept}
                </ButtonFrom>
              </p>
            );
          })}
          <Modal
            title={
            <BookmarkLabel>
              <PhoneOutlined/>
              &nbsp;&nbsp;
              Information of the bookmarked department
            </BookmarkLabel>}
            centered
            visible={visible}
            closable={true}
            mask={false}
            width={800}
            maskClosable={true}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p> contents ...</p>
          </Modal>
        </WalletCard>
      </Col>
    </Row>
  );
};

// BookmarkCard.propTypes = {
//   card: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default BookmarkCard;
