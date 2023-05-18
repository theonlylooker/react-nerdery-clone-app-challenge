type Place = "cabins" | "department" | "caves" | "mini" | "dome" | "farm";

export interface place {
  ownerId: string;
  type: Place;
  image: string;
  iconUser: string;
  city: string;
  country: string;
  description: string;
  priceDay: number;
  wished: boolean;
  rating: number;
}
export type Card = Omit<place, "type">;
