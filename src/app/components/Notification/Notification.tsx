import styles from "./Notification.module.css";
export default function Notification({ message }: { message: string }) {
  return (
    <div>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
