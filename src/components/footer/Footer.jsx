import styles from './page.module.css'
import Image from 'next/image';

const Footer = () => {

 
  return ( 
    <div className={styles.conteiner}>
      <div>2023 Giorgia. All rights reserved</div>
      <div className= {styles.social}>
        <Image className= {styles.icon} width={15} height={15}src={"/1.png"} alt='gio dev fb' />
        <Image className= {styles.icon} width={15} height={15}src={"/2.png"} alt='gio dev insta' />
        <Image className= {styles.icon} width={15} height={15}src={"/3.png"} alt='gio dev twit' />
        <Image className= {styles.icon} width={15} height={15}src={"/4.png"} alt='gio dev youtube' />
      </div>
    </div>
   );
}
 
export default Footer;