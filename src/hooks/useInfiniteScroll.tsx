import React, { useEffect, useRef, useState, useCallback } from "react";
import { place } from "../home/card/type";
import { currentConsumer } from "../consumers/index";
import { useSearchParams } from "react-router-dom";

// const useInfiniteScroll = (page: {
//   location: number;
// }): {
//   data: place[] | null;
//   getNext: () => void;
//   hasMore: boolean;
// } => {
//   const [hasMore, setHasMore] = useState(true);
//   const [data, setData] = useState<place[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   // const URL = `http://localhost:3030/places?${
//   //   searchParams.get("type") ? `type=${searchParams.get("type")}&` : ""
//   // }_page=${page.location}`;
//   const URL = `http://localhost:3030/places?_page=${page.location}`;
//   useEffect(() => {
//     getNext();
//   }, []);

//   const getNext = async () => {
//     console.log(URL);
//     const responseData = await currentConsumer<place[]>(URL);
//     //const responseData = response.;
//     if (!responseData.length) setHasMore(false);

//     setData((prevData) => [...data, ...responseData]);
//   };

//   return { data, getNext, hasMore };
// };

const useInfiniteScroll = <T, A>(
  queryFn: (args: A) => Promise<T>
): {
  data: T | null;
  error: unknown;
  hasNextPage: boolean;
  fetchNextPage: (args: A) => Promise<void>;
  reset: (args: A) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [pageInitalizer, setPageInitializer] = useState(1);
  //change to async name
  const asyncCallback = async (args: A) => {
    try {
      //const response = await currentConsumer<T>(URL);
      const response = await queryFn(args);
      //setLoading(false);
      setData(response);
      setPageInitializer(2);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
import { useEffect, useRef, useState } from "react";
//import { place } from "../home/card/type";
import { currentConsumer } from "../consumers/index";
import { ENDPOINT, PLACE } from "../modules/shared/API";
import { Place } from "../modules/shared/types/types";
const useInfiniteScroll = (page: {
  location: number;
}): {
  data: Place[] | null;
  getNext: () => void;
  hasMore: boolean;
} => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<Place[]>([]);
  //const [page, setPage] = useState({ location: 1 });
  const URL = `${ENDPOINT}${PLACE}?_page=${page.location}`;
  useEffect(() => {
    getNext();
  }, []);

  const getNext = async () => {
    const response = await currentConsumer<Place[]>(URL);
    const responseData = response.data;
    //setPage({ ...page, location: page.location + 1 });
    if (!responseData.length) setHasMore(false);
    setData((prevData) => [...data, ...responseData]);
  };

  const reset = async (args: A) => {
    asyncCallback(args);
  };

  const fetchNextPage = async (args: A) => {
    try {
      //console.log(page, "another one");
      console.log({ args });
      const response = await queryFn(args);
      //console.log(data);
      if (Array.isArray(response)) {
        //console.log(response.length);
        if (!response.length) {
          //console.log(response.length);
          //setHasNextPage(false);
        }
        //console.log(page);
        //setPage(page + 1);
        if (data && Array.isArray(data)) {
          //setData((prevData) => [...prevData, ...response] as T | null);
          setData([...data, ...response] as T | null);
        }
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
  };

  useEffect(() => {
    //setLoading(true);
    asyncCallback({ pageParam: pageInitalizer } as A);
  }, []);
  return { data, error, fetchNextPage, reset, hasNextPage };
};

export default useInfiniteScroll;
