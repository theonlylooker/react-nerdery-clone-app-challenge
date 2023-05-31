import { Place } from "../../shared/types/types";

export type Card = Omit<Place, "type">;
