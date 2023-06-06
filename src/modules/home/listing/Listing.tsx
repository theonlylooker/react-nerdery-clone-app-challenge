import React, { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import axios from "axios";
import { ENDPOINT, PLACE } from "../../shared/API";
import { Place } from "../../shared/types/types";
import { Card, CardGridContainter } from "..";

export const Listing = () => {
  const getPlaces = async (page: number) => {
    const response = await axios.get<Place[]>(
      `${ENDPOINT}${PLACE}?_page=${page}`
    );
    return response.data;
  };
  const { getNext, data, hasNextPage } = useInfiniteScroll(getPlaces);
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [test, setTest] = useState("soy un test");

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

  return (
    <>
      {data?.length}
      <button onClick={getNext}>next</button>
      <CardGridContainter>
        {data?.map((place, index) => {
          return index === data.length - 1 && hasNextPage ? (
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
                handleModal={() => console.log(1)}
                handleCurrent={() => console.log(2)}
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
              handleModal={() => console.log(2)}
              handleCurrent={() => console.log(1)}
            />
          );
        })}
      </CardGridContainter>
    </>
  );
};
