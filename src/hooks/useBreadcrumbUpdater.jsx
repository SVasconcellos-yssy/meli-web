import { useEffect } from "react";
import useBreadcrumbStore from "../store/useBreadCrumbStore"

export const useBreadcrumbUpdater = (categories) => {
  const { setBreadcrumb } = useBreadcrumbStore((state) => state);

  useEffect(() => {
    if (categories) {
      setBreadcrumb(categories);
    }
  }, [categories, setBreadcrumb]);
};
