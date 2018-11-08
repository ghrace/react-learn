import React from 'react';
import { Router,Link } from 'react-router-dom';
import Counter from '../components/Counter'
import LikeButton from '../components/LikeButton'
import App from '../App';

// const Countainer=(props) => {
//     return (
//         <div>{props.children}</div>
//     )
// }
const routeConfig=[
    {
        path:'/',
        component:App,
    },
    {
        path:'counter',
        component:Counter
    },
    {
        path:'button',
        component:LikeButton
    }
]

export default () =>( <Router routes={routeConfig}/>)