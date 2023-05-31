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
import { UserContext } from "../../context/Context";
import { Wishlist } from "../../shared/types/types";
import { Modal as ModalProps, WishlistResponse } from "./type";
import { WishlistContext } from "../../context/WishlistContext";
import { ENDPOINT, WISHLIST } from "../../shared/API";
const WishListModal: FC<ModalProps> = ({
  modal,
  handleModal,
  currentPlace,
}) => {
  const { user, setUser } = useContext(UserContext);
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
        setUser({
          ...user,
          wishlists: [...user.wishlists, data.id],
        });
        setWishlistGlobal([
          ...wishlistGlobal,
          { id, list: data.list, name: data.name },
        ]);
        console.log(data);

        // const response = await axios.patch(
        //   `http://localhost:3000/users/${user.id}`,
        //   {
        //     wishLists: [{ ...wishlist, id, list: [currentPlace] }],
        //   }
        // );
        // const data = await response.data;
        // setUser({
        //   ...user,
        //   wishLists: [{ ...wishlist, id, list: [currentPlace] }],
        // });
        //console.log(data);
        handleModal();
      }
    } catch (error) {
      console.log("error");
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
