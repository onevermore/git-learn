import React from 'react';
import s from './Login.module.scss';
//import { fire } from '../../services/firebase';
//import FirebaseContext from '../../context/firebaseContext';
import homer from '../../homer.png';
import {WhiteTextBlock} from '../../components/WhiteTextBlock';

export const AboutPage = () => {

        return (

                        <div className={s.root}>
                            <div> <img src={homer} alt="" /></div>

                            <WhiteTextBlock>                        
                           <h1>СТРАНИЦА О НАС</h1>
                           <br/>
                          <span>Читайте полезные статьи и проходите опросы</span>
                            </WhiteTextBlock>
                        </div>

             );
    
}
