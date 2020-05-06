import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../Axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId:null,
        error: false
    }

    componentDidMount(){
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
           // console.log(error);
           this.setState({error: true});
        });
        /*if we write this.setState() in here it won't work because
        javascript code works asynchronously and it does not wait 
        for axios to get finished so post will not render in post
        cpmonent*/
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        //console.log(this.state.selectedPostId)
    }

    render () {
        let posts = <p style={{textAlign: "center"}}>SomeThing Went Wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return <Post key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() =>  this.postSelectedHandler(post.id)}/>
                }
            );
        }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id ={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;