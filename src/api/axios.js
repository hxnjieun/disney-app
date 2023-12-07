<<<<<<< HEAD
import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        // api_key:"01d221ae714f2074940304fcc52ec991",
        api_key:"8340b6acccb9083ffed358cfa77e320c",
        language:"ko-KR",
    }
});

export default instance;
=======
import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        // api_key:"01d221ae714f2074940304fcc52ec991",
        api_key:"8340b6acccb9083ffed358cfa77e320c",
        language:"ko-KR",
    }
});

export default instance;
>>>>>>> bcc50d68bec11d58bca2c6bda9bf503613748ff2
