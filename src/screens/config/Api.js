import axios from "axios";
import Constant from "./Constant";

export default axios.create({
    baseURL: Constant.URL,
    headers: {
        "Header-Key":"pan-04-2022"
    },
    
    
})