import React from 'react'

const Home = () => {
  return (
    <>
  div id="carouselExampleIndicators" className="carousel slide"&gt;
  <div classname="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="{0}"
      classname="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="{1}"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="{2}"
      aria-label="Slide 3"
    ></button>
  </div>
  <div classname="carousel-inner">
    <div classname="carousel-item active">
      <img src="..." classname="d-block w-100" alt="..." />
    </div>
    <div classname="carousel-item">
      <img src="..." classname="d-block w-100" alt="..." />
    </div>
    <div classname="carousel-item">
      <img src="..." classname="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    classname="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span classname="carousel-control-prev-icon" aria-hidden="true">
      <span classname="visually-hidden">Previous</span>
    </span>
  </button>
  <button
    classname="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span classname="carousel-control-next-icon" aria-hidden="true">
      <span classname="visually-hidden">Next</span>
    </span>
  </button>
</>

  )
}

export default Home