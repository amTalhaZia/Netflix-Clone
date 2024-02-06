import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import axios from 'axios';
import pixel from '../components/pixel.jpg';

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcomingEndpoint = "upcoming";
const nowPlayingEndpoint = "now_playing";
const popularEndpoint = "popular";
const topRatedEndpoint = "top_rated";

//////////////Card//////////////

export const Card = ({ img }) => {
  return (
    <img className='card' src={img} alt='cover' />
  );
}


//////////////////Row////////////////////////////

export const Row = ({ title, arr = [{}] }) => {
  return (
    <div className='row'>
      <h2 className='heading'>{title}</h2>
      <div className='row-div'>
        {arr.map((items, index) => (
          <Card key={index} img={`${imgUrl}/${items.poster_path}`} />
        ))}
      </div>
    </div>
  );
}


////////////////////////Home////////////////

const Homes = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genre, setGetAllGen] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${upcomingEndpoint}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    }

    const fetchNowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowPlayingEndpoint}?api_key=${apiKey}`);
      setNowPlaying(results);
    }

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popularEndpoint}?api_key=${apiKey}`);
      setPopular(results);
    }

    const fetchTopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${topRatedEndpoint}?api_key=${apiKey}`);
      setTopRated(results);
    }

    const getAllGen = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGetAllGen(genres);
        }


    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    getAllGen();
  }, []);

  return (
    <section className='home'>
      <div className="banner">
        <img   className='img' src={pixel} alt="pixel" />
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlaying} />
      <Row title={"Popular"} arr={popular} />
      <Row title={"Top Rated"} arr={topRated} />
    </section>
  );
}

export default Homes;
