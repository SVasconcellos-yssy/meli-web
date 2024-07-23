import {create} from 'zustand';

const useBreadcrumbStore = create((set) => ({
  breadcrumb: [],
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
}));

export default useBreadcrumbStore;
