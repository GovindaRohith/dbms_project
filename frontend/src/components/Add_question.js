import React, { useState,useEffect } from 'react';
import axios from "./axios";

function Add_question() {

  const [myPost, setmyPost] = useState({
    title : " ",
    body_text : " ",
    Tags: [],
    lisc:" ",
    post_id:""
  });
  const [name,setname]=useState("")

//////////////////////////////////////////////////
  const enter_app=(e)=>{
    if(e.key==="Enter" && name!=="")
    {
      setmyPost({...myPost,Tags:[...myPost.Tags,name]})
      setname("") 
    }
    console.log(myPost);
}
const del_this_tag=(e)=>{
    var x=e.currentTarget.getAttribute("data-value");
    // settags()
    setmyPost({...myPost,Tags:[...[...myPost.Tags.filter((value) => value != x)]]})
  }
/////////////////////////////////////////////////

useEffect(() => {
  axios.post("/add_quest", myPost)
  .then(response => {
    return(axios.get("/add_quest"))
  })
  .then(res2=>setmyPost({...myPost,post_id:res2.data.post_id}))
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
      axios.put("/add_quest",myPost)
      .then(response=>console.log(response))
      // window.location.reload(false);
  }

  return (
    <div>
   Tags
   <input 
   type="text"
   id="myInput"
   placeholder="Enter some tags"
   value={name}
    onKeyPress={e=>{enter_app(e)}}
   onChange={e => {setname(e.target.value)}}/>

   <br/>
   <br/>

<div class="btn-group" role="group" aria-label="Basic outlined example">
{
   <>
      {myPost.Tags.map((post) => {
        return <div className="card">
       <div class="input-group">
        <button type="button" class="btn btn-primary" disabled>{post}</button>
        <button class="btn btn-outline-danger" data-value={post} type="button" id="button-addon2" onClick={del_this_tag}>D</button>
        </div>
        </div>
      })}   
   </>
}
</div>
<br/>

      <input  type="text" id="myInput" placeholder="Enter the Content_lisence" onChange={e => setmyPost({...myPost,lisc:e.target.value})}/>
      <br/>
      <br/>
      <input type="text" id="myInput" placeholder="Enter title" onChange={(e) => setmyPost({...myPost,title:e.target.value})}/>
      <br/>
      <br/>
      <input type="text" id="myInput" placeholder="Enter question" onChange={(e) => setmyPost({...myPost,body_text:e.target.value})}/>
      <br/>
      <br/>
      <button onClick={(e) => handleSubmit(e)}>final Submit</button>

      {/* {Val.map((post) => {
        if(post===null)
        {
           
        }
        else
        {
          return <div className="card">
            <button onClick = {({post}) => handleClick2 ({post})}> {post} </button>
          <h3>name: {post} </h3>
          <br></br>
        </div>
        }
        
      })} */}

    </div>
  );
}

export default Add_question;