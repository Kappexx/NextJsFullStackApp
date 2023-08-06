
import Button from "@/components/Button/Button";
import styles from "./page.module.css"
import Image from "next/image";

const Category = ({params}) => {

  console.log(params);
  return ( 
    <div className={styles.conteiner}> 
    <h1 className={styles.catTitle}>{params.category}</h1>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button url={"#"}  text={"See More"}/>
      </div>
      <div className={styles.imgConteiner}>
        <Image width={500} height={500} className={styles.img}  src={"https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/girl-with-umbrella-and-falling-feathers-johan-swanepoel.jpg?&targetx=0&targety=-86&imagewidth=787&imageheight=991&modelwidth=787&modelheight=819&backgroundcolor=606261&orientation=0"} alt="" />
      </div>
    </div>
    
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button url={"#"}  text={"See More"}/>
      </div>
      <div className={styles.imgConteiner}>
        <Image width={500} height={500} className={styles.img}  src={"https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/girl-with-umbrella-and-falling-feathers-johan-swanepoel.jpg?&targetx=0&targety=-86&imagewidth=787&imageheight=991&modelwidth=787&modelheight=819&backgroundcolor=606261&orientation=0"} alt="" />
      </div>
    </div>
      
    </div> 
  );
}
 
export default Category;