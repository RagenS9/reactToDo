import React from 'react';
// import Image from './Image'; // ./ means it's a local file and not from react's module.
import Todos from './Todos';

class App extends React.Component { //adding additional classes into the react library.
    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                <Todos></Todos>
            </div>  
        )
    }
}
        

export default App;

//example from class showing a couple of different ways to use a photo with react.
// import React from 'react';
// // import Image from './Image'; // ./ means it's a local file and not from react's module.
// import Todos from './Todos';

// class App extends React.Component {
//     render() {
        //cannot use "class" because it's a JS pre-set. So use className.
        //on the return line, you must have your first opening js tag. So might see people put parens around the whole thing so that there is something on the return line and can then start the code in a nice way on the next line.
        //looks like html, but isn't quite. spend some time looking through https://facebook.github.io/react/docs/jsx-in-depth.html
        //can do things like pass in actual values without needing to be in double quotes. Put curly brackets around it, and can put actual data in there. numbers, boolean, anything without the $ before it. For example: data-id={12}
        //every tag must have a closing tag or must self close. <input> can be used in html. it cannot in JSX. it would have to have <input />
        
        // create a loop that will run 1-50 and push the object image tag into that images array. 
        //could also say let Images = []
//         var Images = []

//         for (let i = 0; i < 50; i++) {
//             Images.push(<Image number={i} />);
//         }
        
//         return (
//         <div className="container"> 
//             <div className="row">
//                 <div className="col-sm-6 col-sm-offset-3">
//                 {Images}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// how we originally did the photo
//         return (
//         <div className="container"> 
//             <div className="row">
//                 <div className="col-sm-6 col-sm-offset-3">
//                     <Image number={1} />
//                     <Image number={2} />
//                     <Image number={3} />
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// export default App;