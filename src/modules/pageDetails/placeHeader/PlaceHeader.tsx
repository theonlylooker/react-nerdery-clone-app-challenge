import { Share, Heart } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { PlaceHeaderLayout, BackIcon, PlaceHeaderText } from "./styles";

export const PlaceHeader = () => {
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
