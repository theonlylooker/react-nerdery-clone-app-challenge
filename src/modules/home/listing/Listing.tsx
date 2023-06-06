import { FC, useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import axios from "axios";
import { ENDPOINT, PLACE } from "../../shared/API";
import { Place } from "../../shared/types/types";
import { Card, CardGridContainter } from "..";
import { useSearchParams } from "react-router-dom";
import { PlaceWithoutType } from "../type";

interface Listing {
  handleCurrent: (current: PlaceWithoutType) => void;
  handleModal: () => void;
}

export const Listing: FC<Listing> = ({ handleCurrent, handleModal }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("type");
  const getPlaces = async (page: number) => {
    if (category) {
      console.log("entre");
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
  const { getNext, data, hasNextPage } = useInfiniteScroll(getPlaces);
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        getNext();
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    getNext(true);
  }, [category]);

  return (
    <>
      {data?.length}
      <button onClick={() => getNext()}>next</button>
      <CardGridContainter>
        {data?.map((place, index) => {
          return index === data.length - 1 /*&& hasNextPage*/ ? (
            <div ref={setLastElement} key={index}>
              <>soy ref</>
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
