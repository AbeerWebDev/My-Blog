import React from 'react'

const Menu = () => {
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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu