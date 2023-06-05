import Contact from "@/components/Contact";
import ContactChat from "@/components/ContactChat";
export default function chat() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Contact></Contact>
      <ContactChat></ContactChat>
    </div>
  );
}
