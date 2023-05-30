import {
  Header,
  Card,
  CardGridContainter,
  Content,
  FilterPrice,
  Layout,
  BottomNavbar,
} from ".";
import { Footer } from "../shared/";
import { useState, useRef, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { StickyHeader, FixedBottomNav } from "./styles";
import { useSearchParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import { place } from "./card/type";
import { currentConsumer } from "../consumers";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";

export const Home = () => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState({ location: 1 });
  const URL = "http://localhost:3030/places";
  const [category, setCategory] = useState("cabins");
  // const [prefix, setPrefix] = useState<{
  //   pageParam: number;
  //   queryKey: string | null;
  // }>({ pageParam: 1, queryKey: null });
  // const [searchParams, setSearchParams] = useSearchParams();
  // const types = searchParams.get("type");
  // const getPlaces = async (filters?: {
  //   sufix?: string | null;
  //   page: number;
  // }) => {
  //   if (filters) {
  //     if (filters?.sufix) {
  //       return await currentConsumer<place[]>(
  //         `http://localhost:3030/places?${filters.sufix}_page=${filters.page}`
  //       );
  //     }
  //     return await currentConsumer<place[]>(
  //       `http://localhost:3030/places?_page=${filters.page}`
  //     );
  //   }
  //   return await currentConsumer<place[]>(`http://localhost:3030/places?`);
  // };
  const getPlaces = async (prefix: {
    pageParam: number;
    queryKey?: string | null;
  }) => {
    console.log(prefix, "outside");
    //change querykey way of checking
    // if (!prefix.queryKey) {
    //   console.log("falsy");
    // }
    if (!prefix.queryKey) {
      //if (prefix.queryKey === null || prefix.queryKey === "") {
      console.log(`http://localhost:3000/places?_page=${prefix.pageParam}`);
      return await currentConsumer<place[]>(
        `http://localhost:3000/places?_page=${prefix.pageParam}`
      );
    }
    console.log(
      `http://localhost:3000/places?type=${prefix.queryKey}&_page=${prefix.pageParam}`
    );
    return await currentConsumer<place[]>(
      `http://localhost:3000/places?type=${prefix.queryKey}&_page=${prefix.pageParam}`
    );
  };
  // const nextPage = (
  //   places: place[],
  //   setNextPage: (fn: (prev: number) => void) => void
  // ) => {
  //   if (!places) {
  //     return;
  //   }
  //   setNextPage((prevPage) => prevPage + 1);
  // };
  //const { data, loading, error, resync } = useAsync(getPlaces);
  const { fetchNextPage, reset, data, hasNextPage } =
    useInfiniteScroll(getPlaces);

  //   useEffect(() => {
  //   // if (types) {
  //   //   const filterSufix = `type=${types}&`;
  //   //   resync({ sufix: filterSufix, page: 1 });
  //   // }
  //   setPrefix({ ...prefix, queryKey: types });
  // }, [types]);

  // useEffect(() => {
  //   reset(prefix);
  // }, [prefix]);

  //const { data, getNext, hasMore } = useInfiniteScroll(page);
  // const observer = useRef(
  //   new IntersectionObserver((entries) => {
  //     const first = entries[0];
  //     if (first.isIntersecting) {
  //       setPage((prevPage) => ({ ...page, location: prevPage.location + 1 }));
  //     }
  //   })
  // );

  // useEffect(() => {
  //   const URL = `http://localhost:3030/places?${
  //     searchParams.get("type") ? `type=${searchParams.get("type")}&` : ""
  //   }_page=${page.location}`;
  //   console.log(URL);
  // }, [searchParams]);

  // useEffect(() => {
  //   if (hasMore) {
  //     getNext();
  //   }
  // }, [page]);

  // useEffect(() => {
  //   const currentElement = lastElement;
  //   const currentObserver = observer.current;
  //   if (currentElement) {
  //     currentObserver.observe(currentElement);
  //   }
  //   return () => {
  //     if (currentElement) {
  //       currentObserver.unobserve(currentElement);
  //     }
  //   };
  // }, [lastElement]);

  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <StickyHeader>
          <Header setPage={setPage} setCategory={setCategory} />
        </StickyHeader>
        <div>
          <Content>
            <FilterPrice />
            <InfiniteScroll
              data={data}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              reset={reset}
              //prefix={prefix}
              //setPrefix={setPrefix}
            />
            {/* <CardGridContainter>
              {data &&
                data?.map((place) => (
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
            {/* {data &&
                data?.map((place, index) => {
                  return index === data.length - 1 && hasMore ? (
                    <div ref={setLastElement} key={index}>
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
                    </div>
                  ) : (
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
                  );
                })} */}
            {/* </CardGridContainter> */}
          </Content>
        </div>
        <Footer />

        <FixedBottomNav>
          <BottomNavbar />
        </FixedBottomNav>
      </Layout>
    </>
  );
};
