import { create } from "zustand";

interface SidebarStore {
    isSidebarMenuOpen: boolean;
    toggleSidebarMenu: () => void;
    closeSidebarMenu: () => void;
}

const useSidebarStore = create<SidebarStore>((set) => ({
    isSidebarMenuOpen: false,
    toggleSidebarMenu: () => set((state) => ({   
        isSidebarMenuOpen: !state.isSidebarMenuOpen 
    })),
    closeSidebarMenu: () => set({ isSidebarMenuOpen: false }),
}));

export default useSidebarStore;