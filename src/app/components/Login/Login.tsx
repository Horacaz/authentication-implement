'use client';
import styles from "./Login.module.css"
import { useState } from "react";
export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(isLoggedIn) {
        return(
            <div>
                <h1 className={styles.text}>You are logged in</h1>
                <button className={styles.loginButton} onClick={() => setIsLoggedIn(false)}>Log out</button>
            </div>
        )
    }
    return (
        <div>
            <h1 className={styles.text}>You must be logged in to proceed</h1>
            <button className={styles.loginButton} onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
    )
}