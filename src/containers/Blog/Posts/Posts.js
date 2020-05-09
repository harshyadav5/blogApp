import React, {Component} from 'react';

import axios from '../../../Axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import  FullPost from '../FullPost/FullPost';


class Posts extends Component {


    state = {
        posts: []
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map( post =>{
                return{
                    ...post,
                    author:'Harsh'
                }
            });
            this.setState({posts: updatedPosts});
           // console.log(response);
        })
        .catch(error => {
            console.log(error);
           //this.setState({error: true});
        });
        /*if we write this.setState() in here it won't work because
        javascript code works asynchronously and it does not wait 
        for axios to get finished so post will not render in post
        cpmonent*/
    }


    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' +id});
        //this.setState({selectedPostId: id});
        //console.log(this.state.selectedPostId)
    }
    /*we can pass routing props to chlid components using spred operator or we can 
    target specific prop*/
    render () {
        let posts = <p style={{textAlign: "center"}}>SomeThing Went Wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return (
                     //<Link to={'/posts/'+post.id} key={post.id} >
                        <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    //{...this.props}
                  //  match={this.props.match}
                    clicked={() =>  this.postSelectedHandler(post.id)}/>
                   // </Link>
                    );
                }
            );
        }
        return (
            <div>
            <section className="Posts">
            {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost } />
            </div>
        );
    }
}
export default Posts;
