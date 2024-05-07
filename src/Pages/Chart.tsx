import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Map from "../components/Map";
import ChartPage from "../components/ChartPage";
const queryClient = new QueryClient();

const Chart = () => {
  const [showMap, setShowMap] = useState(true);
  const [showGraph, setShowGraph] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center gap-10 relative">
        {showMap && (
          <div
            className="m-2 p-2 border-black bg-white font-semibold font-serif  border-2 rounded-lg cursor-pointer"
            onClick={() => {
              setShowMap(showMap ? false : true);
              setShowGraph(showMap ? true : false);
              console.log(showGraph, showMap);
            }}
          >
            Map
          </div>
        )}
        {showGraph && (
          <div
            className="m-2 p-2 border-black bg-white font-semibold font-serif  border-2 rounded-lg cursor-pointer"
            onClick={() => {
              setShowGraph(showGraph ? false : true);
              setShowMap(showGraph ? true : false);
              console.log(showGraph, showMap);
            }}
          >
            Graph
          </div>
        )}
      </div>
      <QueryClientProvider client={queryClient}>
        {showMap && <Map />}
        {showGraph && <ChartPage />}
      </QueryClientProvider>
    </>
  );
};

export default Chart;
