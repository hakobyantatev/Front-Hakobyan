import PropTypes from 'prop-types'
import "./Modal.css"

export default function Modal({data, toggleModal}) {
  const handleClickInside = (event) => {
    event.stopPropagation();
  }

  return (
    <div className="Modal" onClick={toggleModal}>
      <div className="Modal-body" onClick={handleClickInside}>
        <img src={data.img_2x} alt={data.author} />
          <div className="info">
            <p className="tags">{data.tags}</p>
            <p className="title">{data.title}</p>
            <p className="autor">{data.autor} <span> {data.date}</span><span>{data.views} Views</span></p>
            <p className="text">{data.text}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
      </div>
    </div>
  )
}

Modal.propTypes ={
  data: PropTypes.object,
  toggleModal: PropTypes.func
}