import { createContext, useContext } from "react";


// This creates a Context that can hold theme-related data.

// So any component that consumes this context can get these values.
const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


// This gives you the Provider component.

// You can then wrap your application:

// <ThemeProvider value={{
//     themeMode,
//     darkTheme,
//     lightTheme
// }}>
//     <App />
// </ThemeProvider>

// Everything inside <ThemeProvider> can access those values.

// For example:

// ThemeProvider
//      │
//      ├── Navbar
//      ├── Home
//      ├── Login
//      └── Button

// All four components can access the theme.

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}



// Normally, to access Context you would write:

// const { themeMode, darkTheme, lightTheme } =
//     useContext(ThemeContext);

// This can become repetitive.

// So we create a custom hook:

// export default function useTheme() {
//     return useContext(ThemeContext);
// }

// Now any component can simply do:

// const { themeMode, darkTheme, lightTheme } = useTheme();

// So:

// useTheme()
//     ↓
// useContext(ThemeContext)
//     ↓
// ThemeContext values
// 4. Why is this useful?

// The main purpose of this code is to share theme information across many React components without passing props manually.