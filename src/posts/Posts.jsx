import './posts.css'
import Feed from './../posts/Feed'
import Post from '../post/Post'
import { useState } from 'react';
import { useEffect } from 'react';


export default function Posts() {
  const data = [
    {
      id: 1,
      title: "My First Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae",
      datetime: "June 01, 2022 12:20:36 AM"
  
    },
    {
      id: 2,
      title: "My Second Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae",
      datetime: "Aug 01, 2022 12:20:36 AM"
  
    },
    {
      id: 3,
      title: "My Third Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae",
      datetime: "Jan 01, 2022 12:20:36 AM"
  
    },
    {
      id: 4,
      title: "My Fourth Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae",
      datetime: "Oct 01, 2022 12:20:36 AM"
  
    },
    {
      id: 5,
      title: "My Fifth Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae",
      datetime: "Nov 01, 2022 12:20:36 AM"
  
    }
  ]

  const {posts, setPosts} = useState();

  useEffect(() => {
   setPosts(data)
   console.log(data);
  }, [])
  
   
  
  return (
    <>
      <Feed posts = {posts}/>
    {/* <div className='posts'>
      {posts.length ? (
        <Feed posts = {posts}/>) : (
          <p>No post to Display</p>
        )
      }  
    </div>  */}
    </>
  )
}
