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
// Created by kk on 2017/7/6.
//

exports.define_env = res => {
  const env = {}
  Object.keys(res).forEach(key => env[key] = JSON.stringify(res[key]))
  return {
    env,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }
}