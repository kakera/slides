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
// Created by kk on 2017/7/23.
//

function* id_generator_new (max) {
  let last = 0
  while (++last < max) {
    yield last
  }
  return last
}

const id_generator = id_generator_new(10)
for (let id of id_generator) {
  console.log(id)
}