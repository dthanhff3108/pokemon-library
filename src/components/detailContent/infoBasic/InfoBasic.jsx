import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind';

import styles from './InfoBasic.module.scss'

import checkTypePokemon from '../../../utils/checkTypePokemon';

let cx = classNames.bind(styles);

function InfoBasic() {
    const location = useLocation()
    const {info} = location.state
    const { abilities, weight, height, types, sprites, base_experience, forms, id } = info.info
    const typeList = checkTypePokemon(types)
    return ( 
        <div className={cx('detail-content')}>
            <div className={cx('detail-content-name')}>
                <p>{id}</p>
                <p>{info.name}</p>
            </div>
            <div className={cx('detail-content-img')}>
                <img className={cx('detail-content-img-thumb')} src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                <img className={cx('detail-content-img-center')} src="https://vn.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png" alt="" />
                <div className={cx('detail-content-img-avt')}
                        style={{backgroundImage: `url(${sprites.other.dream_world.front_default})`}}
                >
               </div>
               <div className={cx('detail-content-img-effect')}>
                    <div className={cx('img-effect')}>
                        <p>Weight: {weight}</p>
                    </div>
                    <div className={cx('img-effect')}>
                        <p>Height: {height}</p>
                    </div>
                    <div className={cx('img-effect')}>
                        <p>Exp: {base_experience}</p>
                    </div>
                    <div className={cx('img-effect')}>
                        <div className={cx('detail-content-types')}>
                            <ul>
                                {
                                    typeList.map((type,index)=>(
                                        <li key={index} className={cx('detail-content-types-item')}>
                                            <div>
                                                {type.icon}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
            
        </div>
    );
}

export default InfoBasic;