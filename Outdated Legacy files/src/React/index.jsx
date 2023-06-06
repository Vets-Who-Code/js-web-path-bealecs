import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Themer } from "./Components/Themer";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);

//navbar theme switcher below

const navbarContainer = document.getElementById("themer");
const themeRoot = createRoot(navbarContainer);
themeRoot.render(<Themer />);