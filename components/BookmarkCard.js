import React from "react";
import {Card, Col, Row } from "antd";
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

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

const SpanLabel = styled.p`
  font-style: italic;
`;

const HoverLink = styled.a`
  color: black;
`;

const BookmarkCard = ({ card, key}) => {
  return (
    <Row gutter={12}>
      <Col span={4}>
        <WalletCard hoverable title={card.company}>
          <SpanLabel>
            <CheckCircleTwoTone twoToneColor="#52c41a"/>
            &nbsp;&nbsp;
            Department List
          </SpanLabel>
          {card.department.map((dept, idx) => {
            return (
              <p>
                <HeartTwoTone twoToneColor="#eb2f96" />
                &nbsp;&nbsp;
                <Link href="/info" department={dept}>
                  <HoverLink>{dept}</HoverLink>
                </Link>
              </p>
            );
          })}
        </WalletCard>
      </Col>
    </Row>
  );
};

// BookmarkCard.propTypes = {
//   card: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default BookmarkCard;
