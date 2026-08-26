import { RouterProvider } from "react-router";
import { router } from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import ReactLenis from "lenis/react";

export function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
