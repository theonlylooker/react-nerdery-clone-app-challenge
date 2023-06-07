import { FC, useEffect } from "react";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import axios from "axios";
import { ENDPOINT, PLACE } from "../../shared/API";
import { Place } from "../../shared/types/types";
import { Card, CardGridContainter } from "..";
import { useSearchParams } from "react-router-dom";
import { PlaceWithoutType } from "../type";
import useIntersectObserver from "../../../hooks/useIntersectObserver";

interface Listing {
  handleCurrent: (current: PlaceWithoutType) => void;
  handleModal: () => void;
}

export const Listing: FC<Listing> = ({ handleCurrent, handleModal }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("type");
  const getPlaces = async (page: number) => {
    if (category) {
      const response = await axios.get<Place[]>(
        `${ENDPOINT}${PLACE}?type=${category}&_page=${page}`
      );
      return response.data;
    }
    const response = await axios.get<Place[]>(
      `${ENDPOINT}${PLACE}?_page=${page}`
    );
    return response.data;
  };
  const { getNext, data } = useInfiniteScroll(getPlaces);
  const { setLastElement } = useIntersectObserver(getNext);
  useEffect(() => {
    getNext(true);
  }, [category]);

  return (
    <>
      <CardGridContainter>
        {data?.map((place, index) => {
          return index === data.length - 1 /*&& hasNextPage*/ ? (
            <div ref={setLastElement} key={index}>
              <Card
                key={place.id}
                id={place.id}
                image={place.image}
                ownerId={place.ownerId}
                description={place.description}
                iconUser={place.iconUser}
                country={place.country}
                city={place.city}
                rating={place.rating}
                priceDay={place.priceDay}
                handleModal={handleModal}
                handleCurrent={handleCurrent}
              />
            </div>
          ) : (
            <Card
              key={place.id}
              id={place.id}
              image={place.image}
              ownerId={place.ownerId}
              description={place.description}
              iconUser={place.iconUser}
              country={place.country}
              city={place.city}
              rating={place.rating}
              priceDay={place.priceDay}
              handleModal={handleModal}
              handleCurrent={handleCurrent}
            />
          );
        })}
      </CardGridContainter>
    </>
  );
};
