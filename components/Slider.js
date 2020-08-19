import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import BookmarkCard from "../components/BookmarkCard";
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { FlexBox } from "../reusuable/flexbox"

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  padding-left: 35px;
  display: flex;
`;

const LeftSliderButton = styled(LeftCircleFilled)`
  font-size: 50px;
  margin-top: 130px;
  transition: all 0.3s;
  &:hover {
    transform: translateX(-10%);
    color: #1890ff;
  }
`;

const RightSliderButton = styled(RightCircleFilled)`
  font-size: 50px;
  margin-top: 130px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateX(10%);
    color: #1890ff;
  }
`;

const SlideNumber = styled.div`
    font-size: 20px;
    text-align: center;
    letter-spacing: 10px;
`;

const TOTAL_SLIDES = 3;
const Slider = () => {
  
  const [currentSlide, setCurrentSlide] = useState(1);
  const { cards } = useSelector((state) => state.wallet);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);


return (
  <FlexBox>
    <LeftSliderButton className="flex-1" onClick={prevSlide} />
    <Container className="flex-8">
      <SliderContainer ref={slideRef}>
        {cards.map((card) => (
          <BookmarkCard header="Wallet" key={card.id} card={card} cards={cards}/>
        ))}
      </SliderContainer>
      <SlideNumber>{currentSlide + 1}/{TOTAL_SLIDES + 1}</SlideNumber>
    </Container>
    <RightSliderButton className="flex-1" onClick={nextSlide} />
  </FlexBox>
);
}

export default Slider;