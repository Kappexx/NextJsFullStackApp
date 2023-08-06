
import Button from '@/components/Button/Button';
import styles from './page.module.css'
import Image from 'next/image';


const Contact = () => {
  return ( 
    <div className={styles.conteiner}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgConteiner}>
      
          <Image 
          className={styles.image}
          src={"/contact.png"}
          alt=''
          
          width={300}
          height={300}

          />
        </div>
        <form className={styles.form}> 
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='name' className={styles.input}/>
          <textarea
          className={styles.textArea}
          placeholder='message'
          cols={30}
          rows={10}
          >

          </textarea>
          <Button url={""} text={"Send"}/>
        </form>

      </div>
    </div>
   );
}
 
export default Contact;