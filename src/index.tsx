import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { fetchCookies } from "./services/productAdapter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

const prefetchProducts = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery("posts", fetchCookies);
};
prefetchProducts();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
