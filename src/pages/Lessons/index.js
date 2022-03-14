import React from 'react';
import s from './Login.module.scss';
//import { fire } from '../../services/firebase';
//import FirebaseContext from '../../context/firebaseContext';
import homer from '../../homer.png';
import {LessonList} from '../../components/LessonList';
import HeaderBlock from '../../components/HeaderBlock';

export const LessonsPage = () => {

        return (

        <div className={s.root}>
           <div className={s.homer}> <img src={homer} alt="" /></div>      
                         <LessonList />                 
          </div>

             );
    
}
