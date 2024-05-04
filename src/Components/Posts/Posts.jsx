import PropTypes from 'prop-types'
import "./Posts.css"
import { useState } from 'react'
import Modal from '../Modal/Modal'

export default function Post({posts}) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleModal =() => {
    setOpenModal(!openModal)
  }

  const currectPost =(post) => {
    setSelectedPost(post)
  }

  return (
    <div className="Posts">
      <div className="container">
        {posts.length > 0 ? (
          posts.map(post => (
            <div className="post" key={post.title} 
              onClick={() => {
                toggleModal()
                currectPost(post)
              }}
            >
              <img src={post.img} alt={post.autor} />
              <div className="info">
                <p className="tags">{post.tags}</p>
                <p className="title">{post.title}</p>
                <p className="autor">{post.autor} <span> {post.date}</span><span>{post.views} Views</span></p>
                <p className="text">{post.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No result!!!</p>
        )}
      </div>
      {openModal ?
        <Modal data={selectedPost} toggleModal={toggleModal}/>
        : null
      }
    </div>
  )
}

Post.propTypes ={
  posts: PropTypes.array
}