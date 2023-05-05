import { useState } from "react";

export const Themer = () => {
    
    const [theme, setTheme] = useState("light");
    const body = document.querySelector("body");

    const themeHandler = () => {
        if(theme === "light"){
            setTheme("dark");
            body.className = "";
            body.classList.add("body-" + theme);
        } else {
            setTheme("light");
            body.className = "";
            body.classList.add("body-" + theme);
        }
    }

    return (
        <div className="themer-container">
            {
            theme == "light" && 
            <span onClick={() => themeHandler()}>🌙</span>
            }

            {
            theme == "dark" && 
            <span onClick={() => themeHandler()}>🔆</span>
            }
        </div>
    )
}