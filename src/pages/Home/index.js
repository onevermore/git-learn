import React from 'react';
import HeaderBlock from '../../components/HeaderBlock';
import homer from '../../homer.png';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import {WhiteTextBlock} from '../../components/WhiteTextBlock';


export const HomePage = () => {

    return (
        <div className="app">


          <HeaderBlock
          >
          <img src={homer} alt="" />
          <WhiteTextBlock>
                           <h1>Обучайтесь с нами!</h1>
                          
                            </WhiteTextBlock>
           
          </HeaderBlock>
          
          <HeaderBlock>

              <CodeMirror
              value='SELECT * FROM Employees;'
              options={{
              mode: 'sql',
              theme: 'midnight',
              lineNumbers: true,


              }}
              onChange={(editor, data, value) => {
              }
              }
              />

              </HeaderBlock>
          <HeaderBlock>
            OOOOOOOOOOOO
            OOOOO
            OOO
          </HeaderBlock>
    
        </div>
      );
}

               

