"use client";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
async function verify(usr, pass) {
  try {
    const response = await axios.post("/api/signup", {
      name: usr,
      password: pass,
    });
    if (response.data == "0") {
      return 0;
    } else {
      return 1;
    }
  } catch (error) {
    console.error(error.message);
  }
}

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allowed, setAllowed] = useState(true);
  return (
    <div className={styles.maindiv}>
      <div className={styles.formbody}>
        <Image
          height={50}
          className={styles.image}
          width={50}
          src="/profile-empty-pic.png"
          alt="empty-profile-pic"></Image>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          type="text"
          onChange={function (e) {
            setUsername(e.target.value);
          }}
          className={styles.inputname}></input>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputpass}></input>
        <button
          className={styles.button}
          onClick={async function () {
            const res = await verify(username, password);
            if (res == 1) {
              setAllowed(() => true);
            } else {
              setAllowed(() => false);
            }
          }}>
          Sign Up
        </button>
        {allowed === false && <span>you are not authorized to sign up</span>}
      </div>
    </div>
  );
}
