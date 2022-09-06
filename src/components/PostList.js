import React, { Component } from 'react'
import axios from 'axios'
import "./PostList.css"
import { Col, Row} from 'react-bootstrap'


 class PostList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        posts:[]
     }
   }

   componentDidMount(){
     axios.get('https://wavescan-internship.saurabhmudgal.repl.co/success')
     .then(response => {
       console.log(response)
       this.setState({posts: response.data})
     })
     .catch(error => {
       console.log(error)
     })
    
   }

  render() {
    const { posts } = this.state
    return (
    <div className="overall2">
      <h2>Scanners found: {posts.length}</h2>
      <div className="line"></div>
      <div className="title">
      <h2>Scanner Name</h2> 
      <h2>IP Address</h2>
      <h2>Scanner Speed</h2>
      <h2>Available</h2>
      </div>
      
        {
          posts.length ? 
          posts.map(post => <div className='top' key={post.ipAddress} >
          <h6>{post.scannerName}</h6> <h6>{post.ipAddress}</h6> <h6>{post.scannerSpeed}</h6> <h6>{post.isAvailable}</h6> </div>) : null
        }
     
        
    </div>
    )
  }
}

export default PostList