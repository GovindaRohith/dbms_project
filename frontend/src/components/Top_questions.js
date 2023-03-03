import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from './axios';
 
let page = 1;
const fetchData = (setItems, items) => {
 axios
   .get('/top_questions')
   .then((res) => {
     setItems([...items, ...res.data]);
     page = page + 1;
   });
};
 
// https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10
// https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10
// https://pokeapi.co/api/v2/pokemon?_page=${page}&_limit=10
const refresh = (setItems) => {};
 
export default function App() {
 const [items, setItems] = React.useState([]);
 
 React.useEffect(()=>{
   fetchData(setItems,items)
 },[])
 return (
   <InfiniteScroll
     dataLength={items.length} //This is important field to render the next data
     next={() => {
       fetchData(setItems, items);
     }}
     hasMore={true}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
     // below props only if you need pull down functionality
     refreshFunction={refresh}
     pullDownToRefresh
     pullDownToRefreshThreshold={50}
     pullDownToRefreshContent={
       <h3 style={{ textAlign: "center" }}>Pull down to refresh</h3>
     }
     releaseToRefreshContent={
       <h3 style={{ textAlign: "center" }}>Release to refresh</h3>
     }
   >
     <div style={{ minHeight: "100vh" }}>
       {items.map((user) => (
        <>
        {/* <img src={user.url} height="100px" width="200px" /> */}
        <div >
           <h1>{user.TagName} {user.last_editor_display_name} {user.last_edit_date} {user.is_accepted_answer} {user.up_vote} {user.down_vote} {user.score} {user.body_text} </h1>
        </div>
        </>
         
       ))}
     </div>
   </InfiniteScroll>
 );
}
