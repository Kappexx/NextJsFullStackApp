"use client"

import useSWR from 'swr'

import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'




const fetcher = (...args) => fetch(...args).then(res => res.json())


const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

 

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  
  
  // console.log(session);

  
  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  
  if(session.status === "unauthenticated"){
    console.log("ffff");
    router?.push('/dashboard/login')
  }
  if(session.status === "authenticated"){
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try{

      await fetch('http://localhost:3000/api/posts', {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        })
      })
      mutate()
      e.target.reset(y)

    }catch(err){
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    

    try{
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",

      })
      mutate()
    }catch(err){
      console.log(err);
    }
  }

  return <div className={styles.container}>
      <div className={styles.posts}>
        { isLoading? "loading...":  data?.map((post)=>{

          return(
            <div className={styles.post} key={post._id}>
               <div className={styles.imgContainer}>
              <Image className={styles.img} width={200} height={100} src={post.img} alt='' />
              
              </div>
              <h2 className={styles.postTitle}>
                {post.title}
              </h2>
                <span
                onClick={()=> handleDelete(post._id)}
                 className={styles.delete}>X
                </span>
            </div>
           
          )
        })}
        
      </div>
      <form
      onSubmit={handleSubmit}
       className={styles.new}>
        <h1>Add New Post</h1>

        <input type="text" placeholder='Title' className={styles.input} />

        <input type="text" placeholder='Description' className={styles.input}/>

        <input type="text" placeholder='Imge' className={styles.input}/>

        <textarea
        placeholder='Content'
        className={styles.textArea}
        cols
         = "30"
         rows = "30"
        >

        </textarea>

        <button className={styles.button}>Send</button>

       
      </form>
    </div>
  }
  
}
 
export default Dashboard;