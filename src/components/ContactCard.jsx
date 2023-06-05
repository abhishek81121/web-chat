import styles from "./ContactCard.module.css";
export default function ContactCard({ username }) {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>{username}</h1>
    </div>
  );
}
