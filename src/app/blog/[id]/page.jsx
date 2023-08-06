
import styles from "./page.module.css"
import Image from "next/image";

const Blogpost = () => {
  return ( 
    <div className={styles.conteiner}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore velit assumenda
          </h1>
          <p  className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo praesentium natus cupiditate, rerum ipsam iusto modi nam molestias blanditiis incidunt. Fugiat vel nisi dolorem laboriosam earum eligendi odit, nostrum corrupti.
          </p>
          <div className={styles.author}>
            <Image 
              src={"https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/girl-with-umbrella-and-falling-feathers-johan-swanepoel.jpg?&targetx=0&targety=-86&imagewidth=787&imageheight=991&modelwidth=787&modelheight=819&backgroundcolor=606261&orientation=0"}
              alt=""
              width={40}
              height={40}
            />
            <span className={styles.username}>Giorgi Kapanadze</span>
          </div>
        </div>
        <div className={styles.imageConteiner}>
        <Image 
              src={"https://render.fineartamerica.com/images/rendered/default/shower-curtain/images/artworkimages/medium/1/girl-with-umbrella-and-falling-feathers-johan-swanepoel.jpg?&targetx=0&targety=-86&imagewidth=787&imageheight=991&modelwidth=787&modelheight=819&backgroundcolor=606261&orientation=0"}
              alt=""
             width={400}
             height={400}
              className={styles.image}
            />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam tempore magnam odio corporis fuga. Labore consequatur atque nobis repellendus iusto quae ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          corporis fuga. Labore consequatur atque nobis 
          <br></br>
          repellendus iusto quae ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          corporis fuga. Labore consequatur atque nobis repellendus iusto quae 
          <br></br>
          ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          corporis fuga. Labore consequatur atque nobis repellendus iusto quae ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
          consequatur atque nobis repellendus iusto quae ipsum dolorum sapiente praesentium, minima quis, eligendi fugiat amet.
        </p>
      </div>
    </div>
  );
}
 
export default Blogpost;