import React from 'react'

function Course({ course }) {

    const { id, title, description, price, link, image } = course; // Object Destructing

    return (
        <div className='course'>
            <div>
                <img src={image} width={250} height={150} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>Kurs Ücreti: {price} ₺</h3>
                <div className='course-link'>
                    <button className='link-button'><a href={link}>Satın almak için tıklayınız</a></button>
                </div>
            </div>
        </div>
    )
}

export default Course