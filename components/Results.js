import React, { useCallback } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Router from "next/router";
import {useDispatch, useSelector} from "react-redux"
import { FlexBox } from "../reusuable/flexbox";
import {registerWallet} from "../actions/searchAction"

const ButtonStyle = styled.span`
  margin-left: 90%;
  .icon {
    font-size: 50px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
      color: #ffc81e;
      /* background-color: #FFC81E; */
    }
  }
`;

const ResultForm = styled.div`
  margin-top: 170px;
  margin-left: 70px;
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
  margin-top: 20px;
  border-radius: 45%;
  font-size: 30px;
  padding: 20px;
  font-weight: bolder;
  color: white;
  background-color: #FF9100;
  border: 5px solid #969696;
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

const Results = ({ info }) => {
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.search.infomation)

  const iconClickHandler = useCallback(() => {
    dispatch(registerWallet(id))
  }, [id]);

  return (
    <>
      <ResultForm>
        <FlexBox>
          <NumberForm>
            TELL
            {info.CS_numbers.map((ele) => (
              <Number>{ele.number}</Number>
            ))}
          </NumberForm>
          <ServiceForm>
            {info.services.map((ele) => (
              <Service>{ele.service}</Service>
            ))}
          </ServiceForm>
          <QuickGuideForm>
            {info.CS_numbers.map((ele) =>
              ele.guides.map((guide) => <Guide>{guide.description}</Guide>)
            )}
            <ButtonStyle className="flex-3" onClick={iconClickHandler}>
              <Icon fitted className="icon" name="star" />
            </ButtonStyle>
          </QuickGuideForm>
        </FlexBox>
      </ResultForm>
    </>
  );
};

export default Results;
