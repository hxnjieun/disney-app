import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  let{movieId}=useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/movie/${movieId}`);
        setMovie(response.data);
      }catch (error) {
        console.log('error fetching data',error);
      }
    }
    fetchData();
  }, [movieId])
  if(!movie) return null;

  return (
    <section>
      <img 
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt='이미지'/>
    </section>
  )
}

export default DetailPage
//useParams는 id값 들고와서 뿌려줌

//시험은 리턴 섹션값에 무비타이틀,상세정보,스타일 그런거 갖고오기 ==>무비모달 css에잇음