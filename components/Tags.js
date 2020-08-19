import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexBox } from '../reusuable/flexbox';

const TagButton = styled.button`

`;

const Tags = () => {
    const { tags } = useSelector((state) => state)
    const firstRow = (tags) => {
        for(let i = 0; i <= 4; i++){
            return 
        }
    }

    return (
        <div>
            <FlexBox>
                {tags.map((tag) => {
                    return <TagButton header="CompanyTag" key={tag.id} company={tag.company} />
                })}
            </FlexBox>
            <FlexBox>
                
            </FlexBox>
            <FlexBox>
                
            </FlexBox>
        </div>
    )
}

export default Tags;