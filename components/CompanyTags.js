import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { FlexBox } from '../reusuable/flexbox';
import { useDispatch, useSelector } from 'react-redux';

import { deptRequest, saveDeptArray } from "../actions/searchAction";
import DeptTags from "./DeptTags";

const TagButton = styled.button`
  border: 5px solid #008080;
  border-radius: 50px;
  box-shadow: 2px 2px 5px #999;
  font-size: 70px;
  color: #646464;
  font-weight: bolder;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const CompanyTagsForm = styled.div`
  margin-top: 200px;
  margin-left: 300px;
  /* background-color: red; */
`;

const Tags = ({ id, company }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deptRequest(id))
      }, [dispatch, id]);

    const departments = useSelector(state => state.search.departmentTags);
    const showDept = useCallback(() => {
        dispatch(saveDeptArray(departments.departments))
    }, [dispatch, departments])

    const deptArray = useSelector(state => state.search.deptArray);


    return (
      <FlexBox>
        <FlexBox className="flex-3">
          <CompanyTagsForm >
            <TagButton onClick={showDept} >{company}</TagButton>
          </CompanyTagsForm>
        </FlexBox>
        <FlexBox className="flex-7">
          <CompanyTagsForm >
            <FlexBox className="flex-5">
              {deptArray && deptArray.map((ele) => <DeptTags dept={ele.department} id={ele.id}/>)}
            </FlexBox>
          </CompanyTagsForm>
        </FlexBox>
      </FlexBox>
    );
}

export default Tags;