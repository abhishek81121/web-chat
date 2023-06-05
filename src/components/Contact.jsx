import styles from "./Contact.module.css";
import ContactChat from "./ContactChat";
import ContactCard from "./ContactCard";
export default function Contact() {
  const arr = [];
  for (let i = 0; i < 21; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <div className={styles.body}>
      <div className={styles.contactbody}>
        <h1 className={styles.heading}>Contacts</h1>
        {arr.map(function (arrr) {
          return <ContactCard username={arrr} key={arrr}></ContactCard>;
        })}
      </div>
    </div>
  );
}
