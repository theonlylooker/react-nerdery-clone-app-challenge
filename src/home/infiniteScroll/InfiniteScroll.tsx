/*TODO new approach
filter and infinite scroll are different things
 change the filter with state and the page params should be inside the
 fetchnextpage 
*/

import React, { FC, useRef, useEffect, useState, useCallback } from "react";
import { place } from "../card/type";
import { Card, CardGridContainter } from "..";
import { useSearchParams } from "react-router-dom";
interface InfiniteScroll {
  data: place[] | null;
  fetchNextPage: (props: {
    pageParam: number;
    queryKey: string | null;
  }) => void;
  reset: (props: { pageParam: number; queryKey: string | null }) => void;
  hasNextPage: boolean;
  //prefix: { pageParam: number; queryKey: string | null };
  //setPrefix: (prefix: { pageParam: number; queryKey: string | null }) => void;
}

// const useIntersectionObserver = (options, cb) => {
//     const observer = React.useRef(null)

//     return React.useCallback((node) => {
//       if (!node) {
//         if (observer.current) {
//           observer.current.disconnect()
//         }
//         return
//       }

//       observer.current = new window.IntersectionObserver(cb, options)
//       observer.current.observe(node)
//     }, [])
//   }

const InfiniteScroll: FC<InfiniteScroll> = ({
  data,
  fetchNextPage,
  hasNextPage,
  reset,
  //prefix,
  //setPrefix,
}) => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [prefix, setPrefix] = useState<{
    pageParam: number;
    queryKey: string | null;
  }>({ pageParam: 1, queryKey: null });
  const types = searchParams.get("type");
  const handleObserver = (entries: any, observer: any) => {
    if (entries[0].isIntersecting) {
      console.log(prefix, "before");
      setPrefix({
        queryKey: "",
        pageParam: 4,
      });
      console.log(prefix, "after");
      fetchNextPage(prefix);
    }
  };
  const observer = useRef(new IntersectionObserver(handleObserver));
  // new IntersectionObserver((entries, observer) => {
  //   const first = entries[0];
  //   if (first.isIntersecting) {
  //     const a = prefix.pageParam + 1;
  //     console.log(prefix, "before");
  //     setPrefix((prevPrefix) => ({
  //       ...prevPrefix,
  //       pageParam: prevPrefix.pageParam + 1,
  //     }));
  //     console.log(prefix, "after");
  //     fetchNextPage(prefix);
  //     //console.log(prefix, "after");
  //   }
  // })

  useEffect(() => {
    // if (types) {
    //   const filterSufix = `type=${types}&`;
    //   resync({ sufix: filterSufix, page: 1 });
    // }
    //setPrefix({ ...prefix, queryKey: types });
    reset({ ...prefix, queryKey: types });
    console.log("types");
  }, [types]);

  //   useEffect(() => {
  //     reset(prefix);
  //     console.log("prefix");
  //   }, [prefix]);

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

  //   useEffect(() => {
  //     console.log(1);
  //   }, [data]);

  return (
    <CardGridContainter>
      {/* <button onClick={() => fetchNextPage(prefix)}>next page</button>
      {data?.map((place) => (
        <Card
          key={place.placeId}
          placeId={place.placeId}
          image={place.image}
          ownerId={place.ownerId}
          description={place.description}
          iconUser={place.iconUser}
          country={place.country}
          city={place.city}
          rating={place.rating}
          priceDay={place.priceDay}
          wished={place.wished}
        />
      ))} */}
      {data &&
        data?.map((place, index) => {
          return index === data.length - 1 && hasNextPage ? (
            <div ref={setLastElement} key={index}>
              <>
                soy un ref
                <Card
                  key={place.placeId}
                  placeId={place.placeId}
                  image={place.image}
                  ownerId={place.ownerId}
                  description={place.description}
                  iconUser={place.iconUser}
                  country={place.country}
                  city={place.city}
                  rating={place.rating}
                  priceDay={place.priceDay}
                  wished={place.wished}
                />
              </>
            </div>
          ) : (
            <>
              {index},{data.length},{String(hasNextPage)}
              <Card
                key={place.placeId}
                placeId={place.placeId}
                image={place.image}
                ownerId={place.ownerId}
                description={place.description}
                iconUser={place.iconUser}
                country={place.country}
                city={place.city}
                rating={place.rating}
                priceDay={place.priceDay}
                wished={place.wished}
              />
            </>
          );
        })}
    </CardGridContainter>
  );
};

export default InfiniteScroll;
