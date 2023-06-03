import axios from "axios";
import { ENDPOINT, LOGIN, REGISTER, USERS, WISHLIST } from "../shared/API";
import { register } from "../signup&login/types";
import { WishlistCtx } from "../context/WishlistContext";
import { UserCtxState, Wishlist } from "../shared/types/types";
import { WishlistResponse } from "../authorizedHome/wishListModal/type";
import { PlaceWithoutType } from "../authorizedHome/type";

export const fetchWishlists = async (id: string) => {
  return await axios.get<WishlistCtx>(`${ENDPOINT}${WISHLIST}?userId=${id}`);
};

export const updateUserWishlists = async (id: string, wishlists: string[]) => {
  return await axios.patch<UserCtxState>(`${ENDPOINT}${USERS}/${id}`, {
    wishlists: [...wishlists, id],
  });
};

export const registerUser = async (newUser: {
  email: string;
  password: string;
  wishlists: string[];
}) => {
  return await axios.post<register>(`${ENDPOINT}${REGISTER}`, {
    ...newUser,
  });
};

export const createWishlist = async (wishlist: Wishlist) => {
  return await axios.post<WishlistResponse>(
    `${ENDPOINT}${WISHLIST}/`,
    wishlist
  );
};

export const createWishlistElement = async (
  id: string,
  wishlist: PlaceWithoutType[],
  current: PlaceWithoutType
) => {
  return await axios.patch<Wishlist>(`${ENDPOINT}${WISHLIST}/${id}`, {
    list: [...wishlist, current],
  });
};

export const deleteWishlistElement = async (
  id: string,
  deleteId: string,
  wishlist: PlaceWithoutType[]
) => {
  return await axios.patch<Wishlist>(`${ENDPOINT}${WISHLIST}/${id}`, {
    list: wishlist.filter((place) => place.id !== deleteId),
  });
};

export const login = async (signUp: { email: string; password: string }) => {
  await axios.post<register>(`${ENDPOINT}${LOGIN}`, signUp);
};

export const emailExists = async (email: string) => {
  await axios.get<[]>(`${ENDPOINT}${USERS}?email=${email}`);
};
