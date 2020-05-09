import React from 'react';

import './Post.css';
import {withRouter} from 'react-router-dom';

const post = (props) => {
    console.log(props);     /*we don't get routing props in here because router
    does not pass props to down the tree , we can't access routing props from 
    the components that we Embedded as JSX code*/
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
            <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default withRouter(post);


/*We can pass routing props to chlid componenets using a HOC called withRouter 
present in react-router-dom package*/