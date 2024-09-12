import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { store } from "./redux/store.config";
import "./index.css";

createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={AppRouter} />
      </NextUIProvider>
    </Provider>

);
