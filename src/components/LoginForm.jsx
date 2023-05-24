'use client'
import Image from "next/image"
import styles from "./LoginForm.module.css"
import Link from "next/link"
import {useState } from "react"
import React from "react"

import { useRouter } from "next/router"
async function verify(usr,pass){
    
    console.log(usr, pass)
    fetch("http://localhost:3000/signup", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: usr,
    password: pass
  })
})
.then( (response) => { 
    // console.log(response.status)
   return response.status;
});
    };
export default function LoginForm()
{
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    return <div className={styles.maindiv}>
        <div className={styles.formbody}>
            <Image height={50} className={styles.image}width={50} src="/profile-empty-pic.png" alt="empty-profile-pic"></Image>
            <label className={styles.label} htmlFor="username" >Username</label>
            <input type="text" onChange={function(e){ setUsername(e.target.value)}} className={styles.inputname}></input>

            <label className={styles.label} htmlFor="password">Password</label>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)}  className={styles.inputpass}></input>
            <button className={styles.button} onClick={()=>{verify(username,password);}}>Login</button>
            <button className={styles.button}>Sign Up</button>
        </div>
    </div>
}

