import shortUUID from "short-uuid";
import React, { FC, useContext, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalClose,
  ModalContent,
  Input,
  ModalAction,
  ModalButton,
} from "./styles";
import axios from "axios";
import { UserContext, useUserContext } from "../../context/Context";
import { Wishlist } from "../../shared/types/types";
import { Modal as ModalProps, WishlistResponse } from "./type";
import { WishlistContext } from "../../context/WishlistContext";
import { ENDPOINT, WISHLIST } from "../../shared/API";
import useAsync from "../../hooks/useAsync";
import { createWishlist } from "../../AXIOS/functions";
const WishListModal: FC<ModalProps> = ({
  modal,
  handleModal,
  currentPlace,
}) => {
  const { user, setUser } = useContext(UserContext);
  const { addWishlist } = useUserContext();
  const { wishlist: wishlistGlobal, setWishlist: setWishlistGlobal } =
    useContext(WishlistContext);
  const initialWishListState: Wishlist = {
    id: "",
    userId: "",
    name: "",
    list: [],
  };
  const [wishlist, setWishlist] = useState<Wishlist>(initialWishListState);
  const handleWishlist = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWishlist({ ...wishlist, name: e.currentTarget.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = shortUUID.generate();
    try {
      if (currentPlace) {
        if (user) {
          const response = await axios.post<WishlistResponse>(
            `${ENDPOINT}${WISHLIST}/`,
            {
              ...wishlist,
              id,
              userId: user.id,
              list: [...wishlist.list, currentPlace],
            }
          );
          const data = await response.data;
          //useAsync(createWishlist)
          console.log("im here");
          addWishlist(data.id);
          setWishlistGlobal([
            ...wishlistGlobal,
            { id, list: data.list, name: data.name },
          ]);
          handleModal();
        }
      }
    } catch (error) {
      console.log("error to add wishlist");
    }
  };
  return (
    <Modal modal={modal}>
      <ModalBody modal={modal}>
        <ModalHeader>
          <ModalClose onClick={handleModal} />
          <h1>Create wishlist</h1>
        </ModalHeader>
        <form>
          <ModalContent>
            <Input>
              <input
                type="text"
                name="wishlist"
                id="wishlist"
                value={wishlist.name}
                onChange={handleWishlist}
              />
              <label htmlFor="wishlist">Name</label>
            </Input>
          </ModalContent>
          <ModalAction>
            <ModalButton secondary={true}>Clear</ModalButton>
            <ModalButton onClick={handleSubmit} type="submit">
              Aceptar
            </ModalButton>
          </ModalAction>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default WishListModal;
