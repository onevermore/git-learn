import React from 'react'
import s from './LessonList.module.scss';
import {Wrapper} from '../Wrapper';

export const LessonList = () => {
    return (      
            
 <Wrapper>
 <div className={s.card}>
          <div className={s.card__image}>
          <img className={s.card__boxImage} src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/122A0q93SRGTshARyRsN" alt="" />
          </div>


          <div className={s.card__title} role="heading" 
          title="Getting Started with Java">
            Getting Started with Informatics
          </div>


          <div className={s.card__enrolled}>
            <div className={s.progressbar}>
              <div className={s.progressbar__fill} 
                  role="progressbar" 
                  ariaLabelledby="percent-complete-1120384"
                  ariaValuenow="0%"
               ></div>
            </div>
          </div>

          <div className={s.card__extrainfo}>
                <div className={s.course__right}>
                   <div className={s.course__progress}>
                   <span className={s.course__percentage}
                   id="percent-complete-1120384" dataCourseId="1120384">0%</span>
                       </div> 
                </div>
          </div>
                
            
             </div>
 </Wrapper>
   
        
    )
}
