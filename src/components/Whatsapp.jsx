import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/201554909339"
      className="whatsapp"
      target="_blank"
    >
      <FaWhatsapp />
    </a>
  );
}