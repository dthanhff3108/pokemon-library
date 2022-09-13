import classNames from "classnames/bind";
import { useState, useEffect  } from "react";
import { useNavigate, Outlet} from "react-router-dom";
import axios from "axios";
import ReactPageScroller from 'react-page-scroller';


import styles from './ExpolerContent.module.scss'
import ExpolerColumn from './ExpolerColumn'
import ExpolerDetail from "./ExpolerDetail";
let cx = classNames.bind(styles)

function ExpolerContent() {
    const navigate = useNavigate()
    const [egg,setEgg]= useState([])
    const [natures,setNatures]= useState([])
    const [habitat,setHabitat]= useState([])
    const [loading,setLoading] = useState(false)

    const getDataPokemon = async ()=>{
        setLoading(true)
        const getEgg = await axios.get("https://pokeapi.co/api/v2/egg-group")
        const dataEgg  =getEgg.data.results
        setEgg(dataEgg)
        const getNatures = await axios.get("https://pokeapi.co/api/v2/nature")
        const dataNatures = getNatures.data.results
        setNatures(dataNatures)
        const getHabitat = await axios.get("https://pokeapi.co/api/v2/pokemon-habitat")
        const databitat = getHabitat.data.results
        setHabitat(databitat)
    }
    useEffect(()=>{
        getDataPokemon()
    },[])
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx("back-btn")}
                onClick={()=>navigate(-1)}
            >
                <i className="fa-solid fa-backward"></i>
            </div>
            <ReactPageScroller
                animationTimer={500}
            >
                <div className={cx("expoler-list")}>
                    <ExpolerColumn name="egg" data={egg}/>
                    <ExpolerColumn name="natures" data={natures}/>
                    <ExpolerColumn name="habitat" data={habitat}/>
                </div>         
                <ExpolerDetail/>            
            </ReactPageScroller>
        </div>

     );
}

export default ExpolerContent;