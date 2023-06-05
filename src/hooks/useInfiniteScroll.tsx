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
  return { data, getNext, hasMore };
};

export default useInfiniteScroll;
