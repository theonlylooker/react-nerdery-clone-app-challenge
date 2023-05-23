import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";
import { ReactComponent as Share } from "../assets/share.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PlaceHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const PlaceHeaderText = styled.div`
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
`;
const BackIcon = styled(LeftArrow)`
  cursor: pointer;
`;

const PlaceHeader = () => {
  const navigate = useNavigate();
  const getBack = () => {
    navigate(-1);
  };
  return (
    <PlaceHeaderLayout>
      <div>
        <BackIcon onClick={getBack} />
        <PlaceHeaderText>Header</PlaceHeaderText>
      </div>
      <div>
        <Share />
        <Heart />
      </div>
    </PlaceHeaderLayout>
  );
};

export default PlaceHeader;
