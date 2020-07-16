import React from "react";
import styled from '../Style.module.css'

const SearchBar = (props) => {
    return (
        <input type="text"
               className={styled.SearchBar}
               placeholder={"Search by username or category"}
               onChange={props.searchAction}/>
    )
}

export default SearchBar