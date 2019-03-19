import React from 'react';

import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Index extends React.Component{
constructor(){
  super();
  console.log("constructor");
  
}
componentDidMount(){
  console.log("ComponentDid mount");
  
}
componentDidUpdate(){
  console.log("component did update");
  
}
componentWillUnMount(){
  console.log("componemt will mount");
  
}

    render(){

    console.log("render");
    
        return <BaseLayout>
      <h1>I am index page</h1>
      
        </BaseLayout>
    }
}

export default Index