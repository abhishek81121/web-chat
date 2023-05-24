import styles from "./contact.module.css";
import ContactChat from "./ContactChat";
export default function Contact() {
  const arr = [];
  for (let i = 0; i < 21; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Contacts</h1>
      {arr.map(function (arrr) {
        return <h1 key={arrr}>{arrr}</h1>;
      })}
    </div>
  );
}
