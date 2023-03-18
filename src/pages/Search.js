import { useHistory} from "react-router-dom";
import React, { useState, } from "react";
import "./Search.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({hideButtons=false}) {
  
  const [{} ,dispatch]=useStateValue();
  const[input,setInput]=useState("");
  const history = useHistory();

  const search= (e) =>{
    e.preventDefault();
  

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term:input
    })


    history.push('/search');
  };
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchTwoToneIcon className='searchIcon'></SearchTwoToneIcon>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicOutlinedIcon/>
     </div>
         {
          !hideButtons ?(
          <div className='search__buttons'>
            <Button type='submit' onClick={search} variant='outlined' >Google Search</Button>
            <Button variant='outlined'>I am Feeling Lucky</Button>
          </div>):(
          <div className='search_buttons' style={{display:'none'}}>
     <Button className = "search_buttonsHidden" type='submit' onClick={search} variant='outlined'>Google Search</Button>
              <Button variant='outlined'className='search__buttonsHidden'>I am Feeling Lucky</Button>
          </div>
        )}
      
    </form>
  )
}

export default Search

