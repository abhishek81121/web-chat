"use client";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allowed, setAllowed] = useState(true);
  const [existuser, setExistUser] = useState(false);
  async function verify(usr, pass) {
    try {
      const response = await axios.post("/api/signup", {
        name: usr,
        password: pass,
      });
      if (response.data == "0") {
        setAllowed(() => false);
      } else if (response.data == "2") {
        setExistUser(() => true);
      } else {
        setAllowed(() => true);
        router.push("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

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
          onClick={() => {
            setAllowed(() => true);
            setExistUser(() => false);
          }}
          onChange={function (e) {
            setUsername(e.target.value);
          }}
          className={[styles.inputname, styles.input].join(" ")}></input>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          onClick={() => {
            setAllowed(() => true);
            setExistUser(() => false);
          }}
          onChange={(e) => setPassword(e.target.value)}
          className={[styles.inputpass, styles.input].join(" ")}></input>
        <button
          className={styles.button}
          onClick={async function () {
            const res = await verify(username, password);
          }}>
          Sign Up
        </button>
        {allowed == false && <span>you are not authorized to sign up</span>}
        {existuser == true && (
          <span>username or password is already taken</span>
        )}
      </div>
    </div>
  );
}
