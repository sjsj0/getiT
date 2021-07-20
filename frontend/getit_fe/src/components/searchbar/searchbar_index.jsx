import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const SearchBarContainer = styled.div`
    display: flex:
    flex-direction: column;
    width: 34em;
    height: 2.5em;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.14);
    overflow: hidden;
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 2em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 15px;
    color: #12112e;
    font-weight: 500;
    border-radius: 6px;
    background-color: transparent;

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 0;
        }
    }

    &::placeholder {
        color: #bebebe;
        transition: all 250ms ease-in-out;
    }
`;

const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 23px;
    margin-right: 10px;
    vertical-align: middle;
`;

const CloseIcon = styled.span`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

export function SearchBar(props) {
    return (
        <SearchBarContainer>
            <SearchInputContainer>
                <SearchIcon><IoSearch /></SearchIcon>
                <SearchInput placeholder="Search for products.."/>
                <CloseIcon><IoClose /></CloseIcon>
            </SearchInputContainer>
        </SearchBarContainer>
    )
}