import Button from '@/components/Button/Button';
import styles from './page.module.css'
import Image from 'next/image';



const About = () => {
  return ( 
    <div className={styles.conteiner}>
      <div className={styles.imgConteiner}>
        <Image 
        className={styles.img}
        src = "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill ={true}
        alt = ""
        
        />
        <div  className={styles.imgText}>
          <h1  className={styles.imgTitle}>Digital Storytellers</h1>
          <h2  className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div  className={styles.textConteiner}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est blanditiis iste, harum itaque, nam quam quae laboriosam quo
            <br></br> saepe quidem vero praesentium neque porro, adipisci eligendi labore sed similique!</p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, reiciendis nihil molestias sapiente ab voluptate provident eaque asperiores quia incidunt accusamus 
          <br></br>voluptates nemo numquam dolores aspernatur at deserunt ex laborum?
          <br />
          <br />- Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
        </p>
        <Button 
        url="/contact"
        text="Contact"
        />
        </div>
      </div>
    </div>
   );
}
 
export default About;