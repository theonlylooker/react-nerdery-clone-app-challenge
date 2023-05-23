import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import styled from "styled-components";

const PlaceInformationH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxxl}`};
`;
const PlaceInformationH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
`;
const PlaceInformationLayout = styled.div`
  padding: 24px;
`;
const PlaceInformationStatistics = styled.div`
  display: flex;
  gap: 10px;
  > div:not(:first-child) {
    text-decoration: underline;
  }
`;
const PlaceInformationHeader = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const PlaceInformationFeature = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid black;
`;

const PlaceInformationFeatureHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlaceInformationFeatureCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 16px;
  justify-content: space-between;
  gap: 20px;
`;
const PlaceInformationCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
const PlaceInformationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0px;
`;
const PlaceInformationListItem = styled.div`
  display: flex;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const PlaceInformationListItemTitle = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;
const PlaceInformationListItemSubtitle = styled.div`
  color: ${({ theme }) => `${theme.colors.neutral06}`};
`;
const PlaceInformation = () => {
  return (
    <PlaceInformationLayout>
      <PlaceInformationHeader>
        <PlaceInformationH1>
          Cheerful 1-bedroom in a townhouse with parking
        </PlaceInformationH1>
        <PlaceInformationStatistics>
          <div>
            <Star /> <span>4.87</span>
          </div>
          <div>15 reviews</div>
          <div>Ottawa</div>
        </PlaceInformationStatistics>
      </PlaceInformationHeader>

      <PlaceInformationFeature>
        <PlaceInformationFeatureHeader>
          <PlaceInformationH2>
            Room in a townhouse hosted by Christi-Anna
          </PlaceInformationH2>
          <div>icon</div>
        </PlaceInformationFeatureHeader>
        <PlaceInformationCardGrid>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>1 bed</div>
          </PlaceInformationFeatureCard>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>Shared bathroom</div>
          </PlaceInformationFeatureCard>
          <PlaceInformationFeatureCard>
            <div>icon</div>
            <div>Host or others may share home</div>
          </PlaceInformationFeatureCard>
        </PlaceInformationCardGrid>
      </PlaceInformationFeature>

      <PlaceInformationList>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Room in a townhouse
            </PlaceInformationListItemTitle>
            <PlaceInformationListItemSubtitle>
              Your own room in a home, plus access to shared spaces.
            </PlaceInformationListItemSubtitle>
          </div>
        </PlaceInformationListItem>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Dedicated workspace
            </PlaceInformationListItemTitle>
            <PlaceInformationListItemSubtitle>
              A common area with wifi that's well-suited for working.
            </PlaceInformationListItemSubtitle>
          </div>
        </PlaceInformationListItem>
        <PlaceInformationListItem>
          <div>icon</div>
          <div>
            <PlaceInformationListItemTitle>
              Free cancellation before May 31
            </PlaceInformationListItemTitle>
          </div>
        </PlaceInformationListItem>
      </PlaceInformationList>
    </PlaceInformationLayout>
  );
};

export default PlaceInformation;
