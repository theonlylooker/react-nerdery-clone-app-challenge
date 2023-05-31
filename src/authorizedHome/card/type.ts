import { PlaceWithoutType } from "../type";

export interface Card extends Omit<PlaceWithoutType, "type"> {
  handleModal: () => void;
  handleCurrent: (current: PlaceWithoutType) => void;
}
