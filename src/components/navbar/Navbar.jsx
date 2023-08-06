"use client"

import styles from './page.module.css'
import Link from "next/link";




import { links } from "./constant";

const Navbar = () => {
  return ( 
    <div className={styles.conteiner}>
      <Link href={"/"} 
      className={styles.logo}
      >girgunamia
      </Link>
      <div className={styles.links}>
        {
          links.map((link)=>{
            return(
              <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
            )
          })
        }
        <button 
        className={styles.logout}
        onClick={() => {
          console.log("logged out");
        }}  
        >
          Logout
        </button>
      </div>
    </div>
   );
}

export default Navbar;