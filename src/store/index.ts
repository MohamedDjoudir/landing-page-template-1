// Store utilities
// Add your state management logic here (Zustand, Redux, etc.)

// Example with a simple store pattern
export interface AppState {
    theme: "light" | "dark";
    sidebarOpen: boolean;
}

export const initialState: AppState = {
    theme: "dark",
    sidebarOpen: false,
};
