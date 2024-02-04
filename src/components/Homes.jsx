import React from 'react';
import "../Styles/Home.css";

export const Card = ({ img }) => {
  return (
    <img  className='card' src={img} alt='cover' />
  );
}

export const Row = ({ title }) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
      <Card img="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" />
    </div>
  );
}

const Homes = () => {
  return (
    <section className='home'>
      <div className="banner"> </div>
      <Row title={"popular on netflix"} />
    </section>
  );
}

export default Homes;
