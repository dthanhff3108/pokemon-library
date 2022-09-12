import classNames from "classnames/bind";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from './ExpolerContent.module.scss'
let cx = classNames.bind(styles)

function ExpolerContent() {
    const navigate = useNavigate()
    const [item,setItem]= useState([])
    const [loading,setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const getDataPokemon = async ()=>{
        setLoading(true)
        setLoading(false)
    }
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx("back-btn")}
                onClick={()=>navigate(-1)}
            >
                <i className="fa-solid fa-backward"></i>
            </div>
            <div className={cx("handle-search")}>
                <input type="text" 
                    value={searchValue}
                    placeholder="Enter pokemon name"
                    onChange={e=>setSearchValue(e.target.value)}
                />
                { !loading ? 
                    <div onClick={getDataPokemon}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    :<i className={cx("fa-solid fa-spinner","loading")}></i>}
            </div>
            <div className={cx("expoler-list")}>
                
            </div>         
        </div>
     );
}

export default ExpolerContent;