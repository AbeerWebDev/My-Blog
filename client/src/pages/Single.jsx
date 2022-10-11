import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/8816129/pexels-photo-8816129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Jane Doe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam sunt ducimus eligendi hic quaerat, nam explicabo, at sed eaque magni vitae voluptatibus animi ipsa voluptate autem a error atque!
          <br/>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi qui recusandae illum necessitatibus soluta. Vitae, est, praesentium modi repellat voluptatum reprehenderit dolores deleniti unde cumque, possimus hic porro harum pariatur?
          <br/>
          <br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi minus quaerat maxime impedit nisi officiis accusantium reiciendis, possimus, cupiditate placeat iure soluta, quo necessitatibus ut reprehenderit asperiores. Voluptatum, assumenda dolorem!
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, architecto quibusdam expedita quisquam ut blanditiis sapiente! Quasi sapiente inventore quia asperiores nemo beatae quis fugiat, laudantium delectus, ipsum quaerat rem.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorum explicabo quis optio quaerat molestiae, iste nulla a voluptatibus blanditiis earum obcaecati quisquam reiciendis! Tempore quia laborum hic qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae rem a, numquam obcaecati dignissimos magni fugit voluptatem eos? Voluptatum sequi earum vel quisquam porro ex neque, aliquam quam incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio asperiores dolorum alias, voluptas architecto eligendi dolor sunt autem tenetur libero saepe unde, aliquam eos hic, laudantium porro earum quasi.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single