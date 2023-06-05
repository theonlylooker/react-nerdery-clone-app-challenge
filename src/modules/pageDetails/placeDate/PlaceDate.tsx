import {
  PlaceDateLayout,
  PlaceDateText,
  PlaceDateRange,
  PlaceDateButton,
} from "./styles";
export const PlaceDate = () => {
  return (
    <PlaceDateLayout>
      <PlaceDateText>
        <div>
          <span>$164 </span>night
        </div>
        <PlaceDateRange>Jun 1 - 6</PlaceDateRange>
      </PlaceDateText>
      <PlaceDateButton>Change Dates</PlaceDateButton>
    </PlaceDateLayout>
  );
};
