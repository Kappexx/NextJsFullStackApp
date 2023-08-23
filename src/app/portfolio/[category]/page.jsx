
import Button from "@/components/Button/Button";
import styles from "./page.module.css"
import Image from "next/image";

import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) =>{
  const data = items[cat]

  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {

  const data = getData(params.category)
  
  

  return ( 
    <div className={styles.conteiner}> 
    <h1 className={styles.catTitle}>{params.category}</h1>
    {data.map((item)=>(
      <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Button url={"#"}  text={"See More"}/>
      </div>
      <div className={styles.imgConteiner}>
        <Image width={500} height={500} className={styles.img}  src={item.image} alt="" />
      </div>
    </div>
    ))}
    
    
   
      
    </div> 
  );
}
 
export default Category;