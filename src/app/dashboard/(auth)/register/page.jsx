'use client'

import Link from 'next/link';
import styles from './page.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {

  const [err, setError] = useState(false)
  
  const router = useRouter()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try{
    
      const res = await fetch("http://localhost:3000/api/auth/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {username,email, password}
      )
     })
     res.status === 201 && router.push("/dashboard/login?success=Account has been created") 
    }catch{
      console.log("something wrong");
      setError(true)
    }
  }
  return ( 
    <div className={styles.container}>
      <form className={styles.form}
      onSubmit={handleSubmit}
      >
        <input type="text" placeholder='username' className={styles.input} />

        <input type="email" placeholder='email' className={styles.input}  />

        <input type="password" placeholder='password'className={styles.input} />

        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href={"/dashboard/login"}> Login with an existing account</Link>
    </div>
   );
}
 
export default Register;