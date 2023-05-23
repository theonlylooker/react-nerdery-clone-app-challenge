import styled from "styled-components";

const PlaceAboutSubtitle = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.light}`};
`;
const PlaceAboutLayout = styled.div`
  padding: 20px;
`;

const PlaceAboutIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral03}`};
  padding-bottom: 20px;
`;
const PlaceAboutFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0px;
`;
const PlaceAboutFeaturesItems = styled.div`
  display: flex;
  gap: 20px;
  > div:last-child {
    font-size: ${({ theme }) => `${theme.fontSize.l}`};
  }
`;
const PlaceAboutParagraph = styled.div`
  line-height: 24px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;

const PlaceAbout = () => {
  return (
    <PlaceAboutLayout>
      <PlaceAboutIntroduction>
        <PlaceAboutSubtitle>About this place</PlaceAboutSubtitle>
        <PlaceAboutParagraph>
          This unique place has a style all its own. A very quiet homely house
          with a modern contemporary style. 25 mins to downtown Ottawa. <br />
          The antidote to hotel rooms and sterile Airbnb rentals. Aesthetic and
          comfort abound in the charming and well furnished unit. Spacious and
          drenched in natural light. Take a look around, we'd love to host you
        </PlaceAboutParagraph>
      </PlaceAboutIntroduction>
      <PlaceAboutFeatures>
        <PlaceAboutSubtitle>What this place offers</PlaceAboutSubtitle>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Lock on bedroom door</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Kitchen</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Wifi</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Dedicated workspace</div>
        </PlaceAboutFeaturesItems>
        <PlaceAboutFeaturesItems>
          <div>icon</div>
          <div>Free parking on premises</div>
        </PlaceAboutFeaturesItems>
      </PlaceAboutFeatures>
    </PlaceAboutLayout>
  );
};

export default PlaceAbout;
