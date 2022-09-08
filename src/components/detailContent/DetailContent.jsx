import { useState, useEffect, useRef } from 'react';

import './DetailContent.scss'
import InfoBasic from './infoBasic/InfoBasic';
import Abilities from './abilities/Abilities';
function DetailContent() {
    const detailRef = useRef(null)
    const [page,setPage] = useState(0)
    const pageLength = 2
    const handleScroll = (e)=>{
        console.log("run");
        if(e.deltaY>0){
            console.log("down");
            console.log(page);
            if(page < pageLength){
                setPage(page=>page+1)
                window.scrollTo({
                    top : window.innerHeight*(page+1),
                    behavior: "smooth"
                })
            }
        }
        else if(e.deltaY<0){
            console.log("up");
            if(page> 0){
                setPage(page=>page-1)
                window.scrollTo({
                    top :window.innerHeight*(page+1),
                    behavior: "smooth"
                })
            }
        }
    }
    console.log(page);
    useEffect(()=>{
        detailRef.current.addEventListener("mousewheel",handleScroll)
        // return () => detailRef.current.removeEventListener("mousewhell",handleScroll)
    },[page])
    return ( 
        <div ref={detailRef}>
            <InfoBasic/>
            <Abilities/>
            <Abilities/>
        </div>
    );
}

export default DetailContent;