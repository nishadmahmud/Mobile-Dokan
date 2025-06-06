import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router";
import CartProvider from "./providers/CartProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </CartProvider>
  </StrictMode>
);
