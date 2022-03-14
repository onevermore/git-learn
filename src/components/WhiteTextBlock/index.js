import React from 'react'
import s from './WhiteTextBlock.module.scss';

export const WhiteTextBlock = ({children}) => {
    return (      
         <div className={s.form_wrap}>
             {children}
         </div>
        
    )
}
