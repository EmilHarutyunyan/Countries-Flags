import React from "react"
// Icon
import {IoSearch} from "react-icons/io5"

// Styles
import {InputContainer, Input} from "./Search.styles"

export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
      <IoSearch/>
      <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}