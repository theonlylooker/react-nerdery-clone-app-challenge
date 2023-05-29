import React, { useEffect, useRef, useState } from "react";
import { place } from "../home/card/type";
import { currentConsumer } from "../consumers/index";

const useInfiniteScroll = (page: {
  location: number;
}): {
  data: place[] | null;
  getNext: () => void;
  hasMore: boolean;
} => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<place[]>([]);
  //const [page, setPage] = useState({ location: 1 });
  const URL = `http://localhost:3000/places?_page=${page.location}`;
  useEffect(() => {
    getNext();
  }, []);

  const getNext = async () => {
    const response = await currentConsumer<place[]>(URL);
    const responseData = response.data;
    //setPage({ ...page, location: page.location + 1 });
    if (!responseData.length) setHasMore(false);
    setData((prevData) => [...data, ...responseData]);
  };
  return { data, getNext, hasMore };
};

export default useInfiniteScroll;
