import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import styled from "styled-components";

const PlaceHostLayout = styled.div`
  background-color: ${({ theme }) => `${theme.colors.neutral09}`};
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HostCard = styled.div`
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  border-radius: 12px;
  display: flex;
  max-width: 300px;
  padding: 20px 10px;
  gap: 50px;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation01}`};
`;
const HostInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HostName = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
  margin-bottom: 5px;
`;

const HostStatisticsItem = styled.div`
  padding: 10px 0px;
  font-size: ${({ theme }) => `${theme.fontSize.s}`};
`;
const HostStatistics = styled.div`
  > div:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
const PlaceHostSpan = styled.div`
  display: block;
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
`;
const PlaceHostTitle = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.light}`};
`;
const MessageButton = styled.button`
  color: ${({ theme }) => `${theme.colors.shade01}`};
  background-color: ${({ theme }) => `${theme.colors.shade02}`};
  padding: 14px 24px;
  border-radius: 8px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  max-width: fit-content;
`;
const PlaceHostFact = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;

const PlaceHost = () => {
  return (
    <PlaceHostLayout>
      <PlaceHostTitle>Meet your host</PlaceHostTitle>
      <HostCard>
        <HostInformation>
          <div>icon</div>
          <HostName>Christi-Anna</HostName>
          <div>Superhost</div>
        </HostInformation>
        <HostStatistics>
          <HostStatisticsItem>
            <PlaceHostSpan>29</PlaceHostSpan> reviews
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>
              4.9 <Star />
            </PlaceHostSpan>
            rating
          </HostStatisticsItem>
          <HostStatisticsItem>
            <PlaceHostSpan>1</PlaceHostSpan> year hosting
          </HostStatisticsItem>
        </HostStatistics>
      </HostCard>
      {/* here goes a map of items */}
      <div>
        <PlaceHostFact>
          <span>icon</span>
          <p>Born in the 80s</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Where i went to school: Carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>My work : carleton University</p>
        </PlaceHostFact>
        <PlaceHostFact>
          <span>icon</span>
          <p>Fun fact: Born on Christmas Day</p>
        </PlaceHostFact>
      </div>
      {/*  ends a map of items */}
      <MessageButton>Message Host</MessageButton>
    </PlaceHostLayout>
  );
};

export default PlaceHost;
