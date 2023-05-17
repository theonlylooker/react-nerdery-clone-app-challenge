import React from "react";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

const CardImage = styled.img<{ src: string }>`
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px;
  content: url(${({ src }) => `${src}`});
`;
const CardHeart = styled(Heart)`
  position: absolute;
  top: 18px;
  right: 18px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CardRating = styled.div`
  display: flex;
  align-items: center;
`;

const CardSpanDefault = styled.span<{ display?: string }>`
  display: ${({ display }) => (display ? `${display}` : "")};
  color: ${(props) => `${props.theme.colors.shade02}`};
  font-size: ${(props) => `${props.theme.fontSize.m}`};
  font-weight: ${(props) => `${props.theme.weight.bold}`};
`;
const CardSpanSecondary = styled.span<{ display?: string }>`
  display: ${({ display }) => (display ? `${display}` : "")};
  color: ${(props) => `${props.theme.colors.neutral08}`};
  font-size: ${(props) => `${props.theme.fontSize.m}`};
`;

const Card = () => {
  return (
    <CardContainer onClick={() => alert("hola")}>
      <div className="image">
        <CardImage src="https://picsum.photos/400/350" />
        <CardHeart />
      </div>
      <CardContent>
        <CardInfo>
          <div className="info">
            <CardSpanDefault display="block">
              Groveland, California
            </CardSpanDefault>
            <CardSpanSecondary display="block">
              Yosemite National Park
            </CardSpanSecondary>
            <CardSpanSecondary display="block">Oct 23 - 28</CardSpanSecondary>
          </div>
          <div className="price">
            <CardSpanDefault>$289</CardSpanDefault>
            night
          </div>
        </CardInfo>
        <div className="rating">
          <CardRating>
            <Star />
            <span>4.91</span>
          </CardRating>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
