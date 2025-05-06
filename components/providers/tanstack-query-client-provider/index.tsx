"use client";

import { tansackQueryClient } from "@/lib/integrations/tamstack-query";
import { Query, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";



export const TanstackQueryClientProvider = ({children}: PropsWithChildren) => {
    return <QueryClientProvider client={tansackQueryClient}>
        {children}
    </QueryClientProvider>;
}