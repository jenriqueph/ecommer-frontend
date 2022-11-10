import React from 'react'
import Card from "./Card"
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import facebook from '../assets/facebook.jpg'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'

const cards = [
  {
    id: 1,
    title: 'Facebook',
    image: facebook,
    text: "Visita y siguenos en nuestra página de Facebook.",
    url: 'https://www.facebook.com/'
  },
  {
    id: 2,
    title: 'Instagram',
    image: instagram,
    text: "Encuentra las historias de nuestros usuarios.",
    url: 'https://www.instagram.com/'
  },
  {
    id: 3,
    title: 'Whatsapp',
    image: whatsapp,
    text: "Habla con nuestros asesores.",
    url: 'https://chat.whatsapp.com/FQo7AM3WTaq5kSzAwAwbeh'
  }
]

function Cards() {
  return (
    <div className='App-Card'>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
            cards.map(card => (
              <div className="col-md-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} text={card.text} urlSource={card.url} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cards