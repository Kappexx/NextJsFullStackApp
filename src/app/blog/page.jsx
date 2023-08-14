
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'

async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }
  })

  if(!res.ok){

    throw new Error('Failed to fetch data')
  }

  return res.json()
}




const Blog = async () => {

  const data = await getData()
  
  return ( 
    <div className={styles.mainContainer}>
      {data.map((item)=>{
        return(
          <Link 
          key={item.id}
          href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgeConteiner}>
        <Image 
       src={"https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/girl-with-umbrella-and-falling-feathers-johan-swanepoel.jpg?&targetx=0&targety=-86&imagewidth=787&imageheight=991&modelwidth=787&modelheight=819&backgroundcolor=606261&orientation=0"}
        alt=''
        width={400}
        height={250}
        className={styles.image}
        />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
        )
      })}
  
    </div>
   );
}
 
export default Blog;