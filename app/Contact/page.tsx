import { useContext } from "react";
import { ContactPage } from "./Contact";
import { ThemeContext } from "../store/CtxProvider";

export default function Contact() {
  const theme = useContext(ThemeContext);
  return (
      <ContactPage theme={theme.body}/>
  );
}
