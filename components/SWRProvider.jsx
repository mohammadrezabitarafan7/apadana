// components/providers/SWRProvider.jsx
"use client";

import { SWRConfig } from "swr";
import  fetcher  from "../lib/swrFetcher";

export default function SWRProvider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        dedupingInterval: 5000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
