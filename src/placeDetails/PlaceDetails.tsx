import { useParams } from "react-router-dom";
import PlaceHeader from "../placeHeader/PlaceHeader";
import PlaceDate from "../placeDate/PlaceDate";
import PlaceAbout from "../placeAbout/PlaceAbout";
import PlaceHost from "../placeHost/PlaceHost";
import PlaceInformation from "../placeInformation/PlaceInformation";

const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <PlaceHeader />
      <div>image</div>
      <PlaceInformation />
      <PlaceHost />
      <PlaceAbout />
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <PlaceDate />
      </div>
    </div>
  );
};

export default PlaceDetails;
