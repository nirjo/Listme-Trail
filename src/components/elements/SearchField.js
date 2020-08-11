import React from 'react';
import styled from 'styled-components/native';

import { TextInput } from '.';

const Container = styled.View`
    height: 100px;
    margin-horizontal: 16px;
`;

//Separated to prevent iOS bug which applies background to Text element
//this causes a 'highlight' effect when text is entered
const SearchContainer = styled.View`
position: absolute;
left: 0;
right: 18.66%;
height: 40px;

background-color: rgba(118, 118, 128, 0.12);
border-radius: 20px;
`;

const SearchInput = styled(TextInput)`
    background: transparent;
    height: 40px;
    padding-left: 27px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: -0.408px;
    color: #50555C;
`;

const SearchField = () => {
    return (
        <Container>
          <SearchContainer>
              <SearchInput placeholder="Search guest name" placeholderTextColor="#50555C"/>
          </SearchContainer>
        </Container>
    );
  };
  
  export default SearchField;