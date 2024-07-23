import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/query-keys";
import { getQueryItems } from "../../services/getQueryItems";

export function useGetQueryItems(query) {
    return useQuery({
        queryKey: [QUERY_KEY.QUERY_ITEMS, query],
        queryFn: () => getQueryItems(query),
        refetchOnWindowFocus: true,
    });
}
