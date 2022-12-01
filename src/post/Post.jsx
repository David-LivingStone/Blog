import './post.css'
import {Link} from 'react-router-dom';



export default function Post({post}) {


  return (
  <>
    
    <div className='post'>
      <img 
      className='postImg'
      src='images/purpose.jpg'
      alt=''
      />
     
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
          </div>
          <Link to={`/post/${post.id}`}>
          <span className='postTitle'>
            {post.title}
          </span>
          <hr/>
          <span className='postDate'> {post.datetime}</span>
          </Link>
      </div>
      <p className='postDesc'>{
        (post.body).length <= 25
          ? post.body
          : `${(post.body).slice(0, 25)}...`
      }
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, itaque necessitatibus? 
        Commodi iste provident omnis delectus laboriosam quaerat, molestias voluptate culpa a, optio 
        sed et rerum! Non quam et praesentium maiores ratione. Modi doloribus est reiciendis, quas 
        tempore ratione quos eos, natus nam dolorum corporis quia assumenda maiores, ab provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, itaque necessitatibus? 
        Commodi iste provident omnis delectus laboriosam quaerat, molestias voluptate culpa a, optio 
        sed et rerum! Non quam et praesentium maiores ratione. Modi doloribus est reiciendis, quas 
        tempore ratione quos eos, natus nam dolorum corporis quia assumenda maiores, ab provident.
      </p>
      
    </div>
    
    </>
  )
}
