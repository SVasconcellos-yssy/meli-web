import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/query-keys";
import { getItemDetail } from "../../services/getItemDetail";

export function useGetItemDetail(id) {
    return useQuery({
        queryKey: [QUERY_KEY.DETAIL_ITEM, id],
        queryFn: () => getItemDetail(id),
        refetchOnWindowFocus: true,
    });
}
