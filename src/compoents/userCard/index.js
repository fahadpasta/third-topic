import React from "react";

const userCard = (props) => {
    const user = props.user;
    return (
        <div className="user Card">
            <img src={user.proflie} />
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default userCard; 





// // src/App.js
// import React from 'react';
// import './App.css';
// import ImageCard from './ImageCard';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <ImageCard />
//             </header>
//         </div>
//     );
// }

// export default App;
