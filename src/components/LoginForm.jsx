"use client";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
async function verify(usr, pass) {
  console.log(usr, pass);
  try {
    await axios.post("/api/login", {
      name: usr,
      password: pass,
    });
  } catch (error) {
    console.error(error.message);
  }
}
export default function LoginForm() {
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
          onClick={() => {
            verify(username, password);
          }}>
          Login
        </button>
        <span className={styles.signup}>
          <Link href="/signup">Dont have account?sign up here</Link>
        </span>
      </div>
    </div>
  );
}
