import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useBids = (houseId) => {
  const [bids, setBids] = useState([]);
  const { get, loadingState } = useGetRequest(`/bid/${houseId}`);

  useEffect(() => {
    const fetchBids = async () => {
      const bids = await get();
      setBids(bids);
    };
    fetchBids();
  }, [get]);

  const postBid = async (bid) => {
    const rsp = await fetch(`https://localhost:7180/bid`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
    return await rsp.json();
  };

  const addBid = async (bid) => {
    const postedBid = await postBid(bid);
    setBids([...bids, postedBid]);
  };

  return { bids, loadingState, addBid };
};

export default useBids;
