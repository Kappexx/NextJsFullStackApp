"use client"

import styles from './page.module.css'
import Link from "next/link";




import { links } from "./constant";
import DarkNodeToggle from '../DarkModeTogle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();

  return ( 
    <div className={styles.conteiner}>
      <Link href={"/"} 
      className={styles.logo}
      >girgunamia
      </Link>
      <div className={styles.links}>
        <DarkNodeToggle />
        {
          links.map((link)=>{
            return(
              <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
            )
          })
        }
        {session.status === "authenticated" && (<button 
        className={styles.logout}
        onClick={signOut}  
        >
          Logout
        </button>)}
        
      </div>
    </div>
   );
}

export default Navbar;