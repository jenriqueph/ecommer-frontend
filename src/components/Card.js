import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

function Card({title, imageSource, text, urlSource}) {
  return (
    <div className="card bg-info animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt="" className="card-img-top"/>
        </div>
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secudary">
              {
                text ? text : "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            </p>
            <a href={urlSource} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">
              Go to this webside
            </a>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  urlSource: PropTypes.string,
  text: PropTypes.string,
  imageSource: PropTypes.string.isRequired
}

export default Card