import { useState, useEffect, useRef } from "react";
import axios from "./axios";

const AutoComplete = ({ options = [""] }) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // With this check, the code will not call the toLowerCase() method on a null or undefined option, and the error will be fixed.
  const suggestions = options.filter(
    (option) => option && option.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) 
      {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  /* for appending the tags */
  const [myPost, setmyPost] = useState({ // sending the Tags array
    title: "",
    body_text: "",
    Tags: [],
    lisc: "",
  });
  const [name, setName] = useState("");
  const [val,setVal]=useState('') // for dropdown
  const [sins,setsins]=useState("")
  const enter_app = (e) => {
    console.log("pop")
    if (e.key === "Enter" && name !== "") {
      setmyPost({ ...myPost, Tags: [...myPost.Tags, name] });
      setName("");
      var tempo=[]
      tempo=[...myPost.Tags, name]
      localStorage.setItem("tags",JSON.stringify(tempo))
      // localStorage.setItem("tags",)
      setsins("")
    }
  };

 /* for deleting the tag */

  const del_this_tag = (e) => {
    var x = e.currentTarget.getAttribute("data-value");
    setmyPost({
      ...myPost, Tags: [...myPost.Tags.filter((value) => value !== x)],
    });
  };

/*********************************************/

const [myData1, setmyData1] = useState([]);

const handleSubmit2 = e => {
  e.preventDefault()

  axios.post("/tagsearch", myPost)
    .then(response => {
      console.log(response.data)
      setmyData1(response.data);
    })
}

  return (
<div className="autocomplete" ref={autocompleteRef}>
        <div className='col-md-6 mb-3'>
            <div className="d-flex align-items-center w-75 form-search">
                <div className="input-group ps-5">
                  <input type="text" id="myInput" value={sins}className="form-control" placeholder="Search Tag names" aria-label="Search" list="data"
  onFocus={() => setShowSuggestions(true)}
  onKeyPress={(e) => {
    enter_app(e);
  }}
  onChange={(e) => {
    setName(e.target.value);
    handleChange(e);
    setVal(e.target.value);
    setsins(e.target.value)
  }}/>
                </div>
                <a href="#!" className="text-dark" onClick={handleSubmit2} ><i className="fas fa-search ps-3"></i></a>
            </div>
        </div>

    {/* search for question for the multiple tags */}

      {
        myData1.map((index) => (
          <div className='card'>
          <div className="primary"> {index.post_title} </div>
          <div className='col-sm-4'> </div>
          </div>
        ))
      }

         <datalist id="data">
                {suggestions.map((suggestion)=>
                <option>
                    {suggestion} 
                </option>)}
            </datalist>
        {/* completed */}

   {/* this is for apended tags */}
      {myPost.Tags.length > 0 && (
        <ul className="tags">
          {myPost.Tags.map((tag) => (
            <div className="d-inline-block">
            <div className="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-dark"><i className="fas fa-tag"></i> {tag}</button>
              <button className="btn btn-dark" data-value={tag} type="button" id="button-addon2" onClick={del_this_tag}><i className="fas fa-times"></i></button>
            </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;