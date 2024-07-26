import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/query-keys";
import { getCategory } from "../../services/getCategory";

export function useGetCategory(id) {
    return useQuery({
        queryKey: [QUERY_KEY.CATEGORY_ITEM, id],
        queryFn: () => getCategory(id),
        refetchOnWindowFocus: true,
    });
}
