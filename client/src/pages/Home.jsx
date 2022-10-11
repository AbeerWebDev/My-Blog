import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/8433563/pexels-photo-8433563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/7111159/pexels-photo-7111159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/7749174/pexels-photo-7749174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/9317366/pexels-photo-9317366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (

    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
          </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home