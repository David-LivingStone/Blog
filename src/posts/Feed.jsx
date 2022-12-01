import './posts.css'
import Post from './../post/Post'

export default function Feed({ posts }) {
  return (
    <>
    <div className='posts'>
      {posts.map((post) => (
        <Post key={posts.id} post={post} />
      ))}
      
      
      
    </div>
    </>
  )
}