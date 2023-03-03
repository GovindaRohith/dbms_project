import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

function Quest_Ans() {
  const [postid,setpostid]=useState(134)
  const [cookies, setCookie] = useCookies(['name']);

  const [dat,setdat]=useState([
    {
      post_id:0,
      owner_display_name:"Owner main from cookies",
      last_editor_display_name:"Editor",
      last_edit_date:"Yesterday",
      post_type_id:1,
      is_accepted_answer:false,
      up_vote:10,
      down_vote:10,
      score:10,
      parent_id:10,
      views:10,
      acc_ans_count:10,
      comment_count:10,
      post_title:"Post Title here",
      content_license:"Licesnse 1",
      body_text:"Body Text here",
      creation_date:"Now",
      closed_date:"Tommorow",
      upvote_state:"card-text btn btn-primary",
      downvote_state:"card-text btn btn-primary",
      tags:["Python","C++","JAVA"],
      comments:[
        {
          comment_text:"Sample comment text",
          display_name:"Commented name",
        }
      ],
    }
  ])
  useEffect(()=>{
    axios.get("/quest_ans/"+postid+"/"+cookies.username)
         .then((response) => {
            var arr=[]
            console.log(response.data[1])
            arr.push(...response.data[0])
            for(var i=0;i<response.data[1].length;i++)
            {
                arr.push(response.data[1][i])
            }
            // arr.push(...response.data[1])
            setdat(arr)
            // setdat([...response.data[0],...response.data[1]]);
    }
  )
},[])
  const [addans,setaddans]=useState(
    {
      post_id:0,
      owner_display_name:"Owner main from cooker",
      last_editor_display_name:"Editor",
      last_edit_date:"Yesterday",
      post_type_id:2,
      is_accepted_answer:false,
      up_vote:10,
      down_vote:10,
      score:10,
      parent_id:10,
      views:10,
      acc_ans_count:10,
      comment_count:10,
      post_title:"",
      content_license:"Licesnse 1",
      body_text:"",
      creation_date:"Now",
      closed_date:"Tommorow",
      upvote_state:"card-text btn btn-primary",
      downvote_state:"card-text btn btn-primary",
      tags:["Python","C++","JAVA"],
      comments:[
        {
          comment_text:"Sample comment text",
          display_name:"Commented name",
        }
      ],
    }
  )
  // const [butt_dis,setbutt_dis]=useState("disabled card-text btn btn-primary")
  const [eachcomm,seteachcomm]=useState({
    post_id:123,
    comment_text:"",
    display_name:"Cookies user here"
  });
  const voter_updater=(samp)=>{
    // console.log(vote)
    axios.put("/quest_ans/"+samp.post_id+"/"+cookies.username,samp)
        .then((response)=>{
            console.log(response)
        })
    //axios code here for upvote and downvotes
  }
  const addans_axios=(par)=>{
    axios.post("/quest_ans/addans",par)
        .then(response=>{
            console.log(response)
        })
        window.location.reload(false);
        //update into existing dat also to display answer
  }
  const [editans,seteditans]=useState(
  {
    post_id:0,
    owner_display_name:"Owner main from cookies",
    last_editor_display_name:"Editor",
    last_edit_date:"Yesterday",
    post_type_id:1,
    is_accepted_answer:false,
    up_vote:10,
    down_vote:10,
    score:10,
    parent_id:10,
    views:10,
    acc_ans_count:10,
    comment_count:10,
    post_title:"",
    content_license:"Licesnse 1",
    body_text:"",
    creation_date:"Now",
    closed_date:"Tommorow",
    upvote_state:"card-text btn btn-primary",
    downvote_state:"card-text btn btn-primary",
    tags:["Python","C++","JAVA"],
    comments:[
      {
        comment_text:"Sample comment text",
        display_name:"Commented name",
      }
    ],
  }
  )

  const quest_is_edit=(name)=>{
    if(name==cookies.username)
    {
      return(
        <>
        <Link to="#">Edit this question</Link>
        </>
      )
    }
    else
    {
      return<>
      </>
    }
  }
  const comm_axios=()=>{
    axios.post("/quest_ans/",eachcomm)
    .then(response=>{
        console.log(response)
    })
    console.log("Send comments to axios");
  }
  const acceptor=(stat)=>{
    if(stat)
    {
      return(
        <>
        Yes it is accepted
        </>
      )
    }
    else
    {
      return(
        <>
        Nope,not accepted at all!!!!
        </>
      )
    }
  }
  const profile_director=(name)=>
  {
    if(name==cookies.username)
    {
      return (
        <>
        <Link to="#">{name}</Link> 
        {/* here is edit profile page */}
        </>
      )
    }
    else
    {
      return (
        <>
        <Link to="#">{name}</Link> 
        {/* here is go to profile page */}
        </>
      )
    }
  }
  const ans_edit_axi=(index)=>{
    axios.put("/quest_ans",{owner_display_name:cookies.username,post_title:editans.post_title,body_text:editans.body_text,post_id:editans.post_id,parent_id:dat[0].post_id})
        .then(response=>{
          console.log(response);
        })
    window.location.reload(false);
  }
  const ans_edit=(index)=>
  {
  if(dat[index].owner_display_name==cookies.username)
    {
      return(
        <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop20">
  Edit this answer
</button>

<div className="modal fade" id="staticBackdrop20" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal Edit your answer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="input-group">
  <span className="input-group-text">Headline</span>
  <textarea className="form-control" value={editans.post_title}  aria-label="With textarea" placeholder={dat[index].post_title} onChange={(e)=>{
  seteditans({...editans,post_title:e.target.value,post_id:dat[index].post_id})    
  }}/>
    
</div>
      <div className="input-group">
  <span className="input-group-text">Your answer</span>
  <textarea className="form-control" value={editans.body_text}  aria-label="With textarea" placeholder={dat[index].body_text} onChange={(e)=>{
  seteditans({...editans,body_text:e.target.value,post_id:dat[index].post_id})    
  }}/>
    
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={()=>{
          seteditans({...dat[index],body_text:editans.body_text,post_title:editans.post_title});
          var tempo=dat;
          tempo[index]={...editans}
          // tempo=[...tempo,tempo[index]]
          setdat([...tempo])
          ans_edit_axi(index)
        }}>Edit Answer!!!</button>
      </div>
    </div>
  </div>
</div>
        </>
      )
    }
    else
    {
      return (
        <>
        </>
      )
    }
  }
  const acc_ans_axi=(index)=>{
    axios.post("/quest_ans/acc_ans",{post_id:dat[index].post_id,owner_display_name:dat[0].owner_display_name,parent_id:dat[0].post_id})
    .then(response=>{
        console.log(response)
    })
    window.location.reload(false);  
  }
  const accept_this=(index)=>{
    if(dat[0].owner_display_name==cookies.username)
    {
      if(dat[index].is_accepted_answer==true)
      {

      }
      else 
      {
        return(<>
        <button type="button" className="btn btn-outline-success" onClick={()=>{
          var kole=dat;
          kole[index].is_accepted_answer=true;
          setdat([...kole])
          // console.log(dat)
          acc_ans_axi(index)
        }}>Accept this answer</button>        
        </>)
      }
    }
    return (<></>)
  }
  const timegetter=(p_date)=>{
  const now = new Date(p_date);
  const nowTimezoneOffset = now.getTimezoneOffset();
  const givenOffset = -5.5 * 60*60; // Convert 5:30 hours to minutes
  const originalNowTime = new Date(now.getTime() + (nowTimezoneOffset * 60 * 1000) - (givenOffset * 1000));
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: true,
    // timeZone: 'UTC'
  };
  const formattedDate = originalNowTime.toLocaleString('en-US', options);
    return(
      <>
      {formattedDate}
      </>
    )
  }
  //card-text btn btn-primary
  //disabled card-text btn btn-primary
  const quest_component=(each,index)=>{
    return (
      <>
      Question:
        <div className="card mb-3">
    <div className="card-body">
    <h5 className="card-title">{each.post_title}</h5>
    <p className="card-text">{each.body_text}</p>
    {quest_is_edit(each.owner_display_name)}
    <button type="button"  className={each.upvote_state} onClick={()=>{
      if(each.downvote_state=="card-text btn btn-primary")
      {
        // console.log({...vote,owner_display_name:each.owner_display_name,post_id:each.post_id,up_vote:each.up_vote+1,down_vote:each.down_vote,isup_vote:true,oldup_vote:each.up_vote,olddown_vote:each.down_vote})
        const temp=[...dat]
        temp[index].up_vote++;
        temp[index].upvote_state="disabled card-text btn btn-primary";
        temp[index].downvote_state="card-text btn btn-primary";
        setdat(temp)
        voter_updater({owner_display_name:each.owner_display_name,
            post_id:each.post_id,
            up_vote:each.up_vote,
            down_vote:each.down_vote,
            isup_vote:true,
            oldup_vote:each.up_vote-1,
            olddown_vote:each.down_vote});
      }
      else
      {
        const temp=[...dat]
        temp[index].up_vote++;
        temp[index].down_vote=temp[index].down_vote-1 ;
        temp[index].upvote_state="disabled card-text btn btn-primary";
        temp[index].downvote_state="card-text btn btn-primary";
        setdat(temp)
        voter_updater({owner_display_name:each.owner_display_name,
            post_id:each.post_id,
            up_vote:each.up_vote,
            down_vote:each.down_vote,
            isup_vote:true,
            oldup_vote:each.up_vote-1,
            olddown_vote:each.down_vote+1});
      }
}}>
   Upvote<span className="badge text-bg-secondary">{each.up_vote}</span>
</button>
{/* still need to update in each in main key */}
<button type="button"  className={each.downvote_state} onClick={()=>{
  if(each.upvote_state=="card-text btn btn-primary")
  {
    const temp=[...dat]
    temp[index].down_vote++;
    temp[index].upvote_state="card-text btn btn-primary";
    temp[index].downvote_state="disabled card-text btn btn-primary";
    setdat(temp)
    voter_updater({owner_display_name:each.owner_display_name,
        post_id:each.post_id,
        up_vote:each.up_vote,
        down_vote:each.down_vote,
        isup_vote:false,
        oldup_vote:each.up_vote,
        olddown_vote:each.down_vote-1});
  }
  else
  {
    const temp=[...dat]
    temp[index].up_vote=temp[index].up_vote-1;
    temp[index].down_vote++;
    temp[index].upvote_state="card-text btn btn-primary";
    temp[index].downvote_state="disabled card-text btn btn-primary";
    setdat(temp)
    voter_updater({owner_display_name:each.owner_display_name,
        post_id:each.post_id,
        up_vote:each.up_vote,
        down_vote:each.down_vote,
        isup_vote:false,
        oldup_vote:each.up_vote+1,
        olddown_vote:each.down_vote-1});
    }
}}>
   Downvote<span className="badge text-bg-secondary">{each.down_vote}</span>
</button>

<p className="card-text"><small className="text-muted">Posted by : {profile_director(each.owner_display_name)} here when click on name if same as user goto edit profile else variant of profile ::::: {timegetter(each.creation_date)}</small></p>
    <p className="card-text"><small className="text-muted">Last edited by : {profile_director(each.last_editor_display_name)} on ::: {timegetter(each.last_edit_date)}</small></p>
    <p className="card-text"><small className="text-muted">views: {each.views}</small></p>
    <p className="card-text"><small className="text-muted">score: {each.score}</small></p>
    <p className="card-text"><small className="text-muted">Accepted answers:{each.acc_ans_count}</small></p>
    <p className="card-text"><small className="text-muted">Content license:{each.content_license}</small></p>
    <p className="card-text"><small className="text-muted">Tags: 
    {each.tags.map((taggy)=>{
      return(
        <>
        <small className="card-text text-muted"> {taggy},</small>
        </>
      )
    }
    )}
    </small></p>
    <p className="card-text"><small className="text-muted">comments section tbd here</small></p>
    <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample"+each.post_id} aria-expanded="false" aria-controls="multiCollapseExample2">Comments</button>
</p>
{/* each comment section */}
<div className="collapse" id={"collapseExample"+each.post_id}>
  {
    each.comments.map((commy)=>{
      return(<>
      <div className="card card-body">
      Comment : {commy.comment_text}
      <br/>
      Comment done by : {commy.display_name}
      </div>
      <br/>
      </>)
    })
    
  }
  <div className="card card-body">
  <div className="input-group mb-3">
  <input type="text" className="form-control" value={eachcomm.comment_text} placeholder="Add a comment" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e=>{seteachcomm({...eachcomm,comment_text:e.target.value,post_id:each.post_id,display_name:cookies.username})}}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>{
    var temp=[...dat];
    var temp2=temp[index].comments;
    temp2=[...temp2,{comment_text:eachcomm.comment_text,display_name:cookies.username}]
    temp[index]={...temp[index],comments:[...temp2]}
    setdat([...temp])
    comm_axios();
    seteachcomm({
      post_id:123,
      comment_text:"",
      display_name:"Comment done person here"
    })//this is initilisation of comments
  }}>Add Comment!!!</button>
</div>
      </div>
</div>
{/* each comment section */}

</div>
</div>
  
      </>
    )
  }
  const ans_component=(each,index)=>{    
    return (
      <>
      Answer:{index+1}
        <div className="card mb-3">
    <div className="card-body">

    <h5 className="card-title">{each.post_title}</h5>
    <p className="card-text">{each.body_text}</p>
    {ans_edit(index)}
    {accept_this(index)} 
    <button type="button"  className={each.upvote_state} onClick={()=>{
      if(each.downvote_state=="card-text btn btn-primary")
      {
        // console.log({...vote,owner_display_name:each.owner_display_name,post_id:each.post_id,up_vote:each.up_vote+1,down_vote:each.down_vote,isup_vote:true,oldup_vote:each.up_vote,olddown_vote:each.down_vote})
        const temp=[...dat]
        temp[index].up_vote++;
        temp[index].upvote_state="disabled card-text btn btn-primary";
        temp[index].downvote_state="card-text btn btn-primary";
        setdat(temp)
        voter_updater({owner_display_name:each.owner_display_name,
            post_id:each.post_id,
            up_vote:each.up_vote,
            down_vote:each.down_vote,
            isup_vote:true,
            oldup_vote:each.up_vote-1,
            olddown_vote:each.down_vote});
      }
      else
      {
        const temp=[...dat]
        temp[index].up_vote++;
        temp[index].down_vote=temp[index].down_vote-1 ;
        temp[index].upvote_state="disabled card-text btn btn-primary";
        temp[index].downvote_state="card-text btn btn-primary";
        setdat(temp)
        voter_updater({owner_display_name:each.owner_display_name,
            post_id:each.post_id,
            up_vote:each.up_vote,
            down_vote:each.down_vote,
            isup_vote:true,
            oldup_vote:each.up_vote-1,
            olddown_vote:each.down_vote+1});
      }
}}>
   Upvote<span className="badge text-bg-secondary">{each.up_vote}</span>
</button>
{/* still need to update in each in main key */}
<button type="button"  className={each.downvote_state} onClick={()=>{
  if(each.upvote_state=="card-text btn btn-primary")
  {
    const temp=[...dat]
    temp[index].down_vote++;
    temp[index].upvote_state="card-text btn btn-primary";
    temp[index].downvote_state="disabled card-text btn btn-primary";
    setdat(temp)
    voter_updater({owner_display_name:each.owner_display_name,
        post_id:each.post_id,
        up_vote:each.up_vote,
        down_vote:each.down_vote,
        isup_vote:false,
        oldup_vote:each.up_vote,
        olddown_vote:each.down_vote-1});
  }
  else
  {
    const temp=[...dat]
    temp[index].up_vote=temp[index].up_vote-1;
    temp[index].down_vote++;
    temp[index].upvote_state="card-text btn btn-primary";
    temp[index].downvote_state="disabled card-text btn btn-primary";
    setdat(temp)
    voter_updater({owner_display_name:each.owner_display_name,
        post_id:each.post_id,
        up_vote:each.up_vote,
        down_vote:each.down_vote,
        isup_vote:false,
        oldup_vote:each.up_vote+1,
        olddown_vote:each.down_vote-1});
    }
}}>
   Downvote<span className="badge text-bg-secondary">{each.down_vote}</span>
</button>
    <p className="card-text"><small className="text-muted">Posted by : {profile_director(each.owner_display_name)} here when click on name if same as user goto edit profile else variant of profile ::::: {timegetter(each.creation_date)} </small></p>
    <p className="card-text"><small className="text-muted">Last edited by : <Link to="#" >{each.last_editor_display_name}</Link> on ::: {timegetter(each.last_edit_date)}</small></p>
    <p className="card-text"><small className="text-muted">is accepted: {acceptor(each.is_accepted_answer)}</small></p>
    <p className="card-text"><small className="text-muted">views: {each.views}</small></p>
    <p className="card-text"><small className="text-muted">score: {each.score}</small></p>
    <p className="card-text"><small className="text-muted">Accepted answers:{each.acc_ans_count}</small></p>
    <p className="card-text"><small className="text-muted">Content license:{each.content_license}</small></p>
    
    <p className="card-text"><small className="text-muted">comments section tbd here</small></p>
    <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample"+each.post_id} aria-expanded="false" aria-controls="multiCollapseExample2">Comments</button>

</p>
{/* each comment section */}
<div className="collapse" id={"collapseExample"+each.post_id}>
  {
      each.comments.map((commy)=>{
        if(commy!=null) 
        {
            return(<>
                <div className="card card-body">
                Comment : {commy.comment_text}
                <br/>
                Comment done by : {commy.display_name}
                </div>
                <br/>
                </>)
        }        
        
    })
  }
  <div className="card card-body">
  <div className="input-group mb-3">
  <input type="text" className="form-control" value={eachcomm.comment_text} placeholder="Add a comment" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e=>{seteachcomm({...eachcomm,comment_text:e.target.value,post_id:each.post_id,display_name:cookies.username})}}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>{
    var temp=[...dat];
    var temp2=temp[index].comments;
    temp2=[...temp2,{comment_text:eachcomm.comment_text,display_name:cookies.username}]
    temp[index]={...temp[index],comments:[...temp2]}
    setdat([...temp])
    comm_axios();
    seteachcomm({
      post_id:123,
      comment_text:"",
      display_name:"Comment done person here"
    })//this is initilisation of comments
  }}>Add Comment!!!</button>
</div>
      </div>
</div>
{/* each comment section */}

</div>
</div>
  
      </>
    )
  }
  return (
    <div>

      <br/>
      {dat.map((e,index)=>{
        if(index==0)
        {
          return(
            quest_component(e,index)
            )
        }
        else
        {
          return(ans_component(e,index))
        }
      })}
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample66" aria-expanded="false" aria-controls="multiCollapseExample2">Add an answer</button>
{/* each comment section */}
<div className="collapse" id="collapseExample66">

  <div className="card card-body">
  <div className="input-group mb-3">
  <div className="input-group">
  <span className="input-group-text">Answer title</span>
  <textarea className="form-control" value={addans.post_title} aria-label="With textarea" onChange={(e)=>{
    setaddans({...addans,post_title:e.target.value})
  }}></textarea>
</div>
<div className="input-group">
  <span className="input-group-text">Answer text</span>
  <textarea className="form-control" value={addans.body_text} aria-label="With textarea" onChange={(e)=>{
    setaddans({...addans,body_text:e.target.value})
  }}></textarea>
</div>
<div className="input-group">
  <span className="input-group-text">Content License</span>
  <textarea className="form-control" value={addans.content_license} aria-label="With textarea" onChange={(e)=>{
    setaddans({...addans,content_license:e.target.value})
  }}></textarea>
</div>
<button type="button" className="btn btn-outline-success" onClick={()=>
  {setaddans({...addans,post_id:0,owner_display_name:cookies.username,last_editor_display_name:cookies.username,post_type_id:2,is_accepted_answer:false,parent_id:dat[0].post_id});
  addans_axios({...addans,post_id:0,owner_display_name:cookies.username,last_editor_display_name:cookies.username,post_type_id:2,is_accepted_answer:false,parent_id:dat[0].post_id});
}}>sins add this answer</button>
</div>
      </div>
</div>
    </div>
  )
}

export default Quest_Ans