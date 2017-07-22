//
//           _                        
//           \`*-.                    
//            )  _`-.                 
//           .  : `. .                
//           : _   '  \               
//           ; *` _.   `*-._          
//           `-.-'          `-.       
//             ;       `       `.     
//             :.       .        \    
//             . \  .   :   .-'   .   
//             '  `+.;  ;  '      :   
//             :  '  |    ;       ;-. 
//             ; '   : :`-:     _.`* ;
//    [bug] .*' /  .*' ; .*`- +'  `*' 
//          `*-*   `*-*  `*-*'  
// 
// Created by ${USER} on ${DATE}.
//

import React from 'react'
import {observer} from 'mobx-react'

import styles from './${NAME}.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles)
@observer
export default class ${NAME} extends React.Component {
  render () {
    return <div styleName="wrap">${NAME}</div>
  }
}
