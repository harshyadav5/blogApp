import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewComponent = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
class Blog extends Component {

    state = {
        auth:false
    }
    render () {
    
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' exact>Posts</NavLink></li>
                            <li><NavLink to ={{
                                pathname : '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New-Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1> } />
                <Route path='/new-post'  render={() => <h1>Home 2</h1> } /> */} 
                <Switch>
                {this.state.auth ? <Route path='/new-post' exact component={AsyncNewComponent } /> : null}
                <Route path='/posts'  component={Posts } />
                <Route render={() => <h1>Resource Not Found</h1>} />     //It is a way to handel 404 Error
                {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;

/*Using exact in <Route /> will render cpmonents for exactly same path provided in 
<Route path='>*/