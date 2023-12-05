import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"8340b6acccb9083ffed358cfa77e320c",
        language:"ko-KR",
    }
});

export default instance;
