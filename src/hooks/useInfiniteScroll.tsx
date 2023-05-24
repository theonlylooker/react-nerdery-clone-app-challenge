import React, { useEffect, useRef, useState } from "react";
import { place } from "../home/card/type";
import { currentConsumer } from "../consumers/index";
import { useSearchParams } from "react-router-dom";

const useInfiniteScroll = (page: {
  location: number;
}): {
  data: place[] | null;
  getNext: () => void;
  hasMore: boolean;
} => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<place[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const URL = `http://localhost:3030/places?${
  //   searchParams.get("type") ? `type=${searchParams.get("type")}&` : ""
  // }_page=${page.location}`;
  const URL = `http://localhost:3030/places?_page=${page.location}`;
  useEffect(() => {
    getNext();
  }, []);

  const getNext = async () => {
    console.log(URL);
    const response = await currentConsumer<place[]>(URL);
    const responseData = response.data;
    if (!responseData.length) setHasMore(false);

    setData((prevData) => [...data, ...responseData]);
  };

  return { data, getNext, hasMore };
};

export default useInfiniteScroll;
