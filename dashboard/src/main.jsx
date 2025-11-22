import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { toastOptions } from "./utils/constants.js";


const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster 
          toastOptions={toastOptions}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
