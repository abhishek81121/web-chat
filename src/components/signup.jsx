"use client";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
async function verify(usr, pass) {
  try {
    await axios.post("/api/signup", {
      name: usr,
      password: pass,
    });
  } catch (error) {
    console.error(error.message);
  }
}

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            await verify(username, password);
          }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
