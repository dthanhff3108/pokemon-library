import { useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';

import DetailContent from '../../components/detailContent/DetailContent';
import './PokemonDetail.scss'

function PokemonDetail() {
    
     return ( 
               <div className='pokemon-detail'>
                    <DetailContent />
               </div>
          );
}

export default PokemonDetail;