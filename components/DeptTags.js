import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { FlexBox } from '../reusuable/flexbox';
import { useDispatch, useSelector } from 'react-redux';

import { infoRequest, saveDetailInfo } from "../actions/searchAction";
import Results from "./Results";

const TagButton = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 60px;
  padding: 20px;
  color: #646464;
  border: 3px solid #FF1E9D;
  border-radius: 50px;
  box-shadow: 2px 2px 5px #999;
  font-size: 50px;
  font-weight: bolder;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const DeptTags = ({ id, dept }) => {
    const dispatch = useDispatch();

    const infoHandler = useCallback((dept, id) => {
        dispatch(saveDetailInfo(dept, id));
        dispatch(infoRequest(id));
    }, [dispatch])

    return <TagButton onClick={() => infoHandler(dept, id)}>{dept}</TagButton>;
}

export default DeptTags;