import React from "react";

export const SearchBox = ({ placeholder, handleChange}) => {
    return (
    <input classNmae="search" type='search' placeholder={placeholder} onChange={handleChange}/>
    )
}