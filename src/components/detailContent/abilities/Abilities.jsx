import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Abilities.module.scss'


let cx = classNames.bind(styles);
function Abilities() {
  
    const location = useLocation()
   
    const {info} = location.state
    const { abilities, weight, height, types, sprites, base_experience, forms, id } = info.info
    return ( 
        <div  className={cx("wrapper")}>
            ability
            <p className={cx("fire")}>hiuih</p>
        </div>
     );
}

export default Abilities;