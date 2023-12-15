import axios from '../api/axios';
import React,{useEffect,useState,useCallback} from 'react'
import './Row.css'
import MovieModal from './MovieModal';
import {Navigation,Pagination,Scrollbar,Ally} from 'swiper/modules';
import {Swiper, SwiperSlide} from'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Row = ({title, id, fetchUrl}) => {
  const[movies, setMovies] = useState([]); // []배열 뿌려줌 아무거나
  const[modalOpen, setModalOpen] = useState(false); //첨에 펄스로 실행
  const[movieSelected, setMovieSelected] = useState({}); //{}선택된 값 뿌려줌

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    // console.log('reponse',response);
    setMovies(response.data.results);
  }, [fetchUrl]);
  
  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }
  
  return (
    <div>
      <h2>{title}</h2>

          {movies.map(movie => (
          <img
            key={movie.id}
            className='row__poster'
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
            />
            ))}
  
      { modalOpen && 
        <MovieModal
        {...movieSelected}
        setModalOpen={setModalOpen}
        />
      }
    </div>
  )
}
//props받을때 ({중괄호}), 
//useCallback은 마운팅 언마운팅 무시하고 결과값 재로딩

export default Row