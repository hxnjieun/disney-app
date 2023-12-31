import React, { useEffect, useState } from 'react'
import requests from '../api/requests'
import axios from '../api/axios'
import './Banner.css'
import styled from 'styled-components'

const Banner = () => {
  const[movie,setMovie]=useState([]);
  const [isClicked,setIsClicked]=useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    //현재 상영중인 영화정보를 가져오기(여러 영화정보)
    const response = await axios.get(requests.fetchNowPlaying);
    //여러 영화 중에서 영화 하나의 id를 가져오기
    const movieId=response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id;
    //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const {data: movieDetail}=await axios.get(`movie/${movieId}`,{
      params: {
        append_to_response: 'videos'
      }
    });
    setMovie(movieDetail);
  }
  //설명글 ...처리
  const truncate= (str, n) => {
    return str?.length > n? str.substring(0, n) + '...' : str;
  }
  //비디오화면이 있을때 비디오 모달이 뜨고 없으면 버튼이 나오지 않게 처리
  if(isClicked){
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe  
           src = {`https://www.youtube.com/embed/${movie.videos.results[0].key}?
           controls=0&autoplay=1&loop=1&playlist=${movie.videos.results[0].key}`}
           title = "Movie"
           frameborder = "0"
           allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen>
                    
          </Iframe>
        </HomeContainer>
      </Container>
      <button onClick={()=>setIsClicked(false)}/*isClicked flase값으로 돌리기*/>X</button>
      </>
    )

  }else{
  return (
    <header className='banner' 
    style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      backgroundPosition: 'top center',
      backgroundSize: 'cover'
    }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie.title || movie.name || movie.original_name}</h1>
        <div className='banner__buttons'>
          {movie?.videos?.results[0]?.key &&
            <button className='banner__button play' onClick={()=>setIsClicked(true)}>
              play
          </button>
          }
        </div>
        <p className='banner__description'>{truncate(movie.overview,100)}</p>
      </div>

      <div className='banner--fadeBottom'/>
    </header>
    )
  }
}

export default Banner
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: auto;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 80vh;
  z-index: -1;
  opacity: 1.65;
  border:none;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } 
  @media (max-width: 768px) {
    height: 30vh;
  }
`;