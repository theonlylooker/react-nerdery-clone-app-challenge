import { PlaceWithoutType } from "../type";

export interface Card extends Omit<PlaceWithoutType, "type" | "wished"> {
  handleModal: () => void;
  handleCurrent: (current: PlaceWithoutType) => void;
}
