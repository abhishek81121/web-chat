"use client";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongcred, setWrongcred] = useState(false);
  const router = useRouter();
  async function verify(usr, pass) {
    console.log(usr, pass);

    const response = await axios
      .post("/api/login", {
        name: usr,
        password: pass,
      })
      .then(function (response) {
        if (response.status == 200) {
          try {
            axios.post("api/authri/login", { name: usr });
            router.push("/chat");
          } catch (error) {
            console.log(error.message);
          }
        } else {
          setWrongcred(() => true);
        }
      })
      .catch((error) => console.log(error.message));
    //
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
          onChange={function (e) {
            setUsername(e.target.value);
          }}
          onClick={() => setWrongcred(() => false)}
          className={[styles.inputname, styles.input].join(" ")}></input>

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setWrongcred(() => false)}
          className={[styles.inputpass, styles.input].join(" ")}></input>
        <button
          className={styles.button}
          onClick={() => {
            verify(username, password);
          }}>
          Login
        </button>
        {wrongcred && (
          <span>you are either not resgitered or wrong credentials</span>
        )}
        <span className={styles.signup}>
          <Link href="/signup">Dont have account?sign up here</Link>
        </span>
      </div>
    </div>
  );
}
