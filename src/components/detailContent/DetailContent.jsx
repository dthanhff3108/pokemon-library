import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import classNames from 'classnames/bind';

import styles from './DetailContent.module.scss'
import InfoBasic from './infoBasic/InfoBasic';
import Abilities from './abilities/Abilities';

let cx = classNames.bind(styles)
function DetailContent() {
    const [page,setPage] = useState(0)
    const pageLength = 2
    const list = ()=>{
        let arrayNav =[]
        for (let i= 0;i<pageLength;i++){
            if(i===page){
                arrayNav.push(<li key={i} className={cx('active')}></li>)
            }
            else{
                arrayNav.push(<li key={i}></li>)
            }
        }
        return arrayNav
    }
    return ( 
        <div className={cx('wrapper')}>
            <ReactPageScroller
                animationTimer={500}
                pageOnChange={(e)=>{
                    setPage(e)
                }}
            >
                <InfoBasic/>
                <Abilities/>
            </ReactPageScroller>
            <ul className={cx('nav-page')}>
                {list()}
            </ul>
        </div>
    );
}

export default DetailContent;