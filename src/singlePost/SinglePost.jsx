import './singlePost.css'

 
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        alt=''
        src='images/man-runner-dynamic-running-royalty-free-image-1589233450.jpg'
        className='singlePostImg'
        />
        <h1 className="singlePostTitle"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <div className="singlePostEdit">
          <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className=" singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'> Author: <b>David</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostingDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veritatis dolor possimus nemo, quaerat nam fuga. Accusamus 
          voluptas sint sequi odit laudantium veritatis voluptatem, modi 
          in? Quasi totam fugiat asperiores minus explicabo maxime commodi praesentium, 
          iste corporis ullam, cum necessitatibus repellat fuga? Accusantium aliquid 
          blanditiis dolorem ipsam reiciendis dolores beatae rem.</p>
        
      </div>
    </div>
  )
}
