import { useParams } from "react-router-dom";
import {
  PlaceHeader,
  PlaceDate,
  PlaceAbout,
  PlaceHost,
  PlaceInformation,
} from ".";
import { Footer } from "../shared/";
import { FixedBottomNav } from "./styles";

export const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <PlaceHeader />
      <div>image</div>
      <PlaceInformation />
      <PlaceHost />
      <PlaceAbout />
      <FixedBottomNav>
        <PlaceDate />
      </FixedBottomNav>
      <Footer />
    </div>
  );
};
