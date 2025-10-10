
  import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import favicon from "./assets/favicon.svg";

const faviconLink =
  document.querySelector<HTMLLinkElement>("link[rel='icon']") ??
  document.createElement("link");

faviconLink.rel = "icon";
faviconLink.href = favicon;

if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink);
}

createRoot(document.getElementById("root")!).render(<App />);
  
