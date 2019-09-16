import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props) {

const StyledH2 = styled.h2`
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 10px;
`;

    return (
      <div>
        <StyledH2>Name: {props.episode.name}</StyledH2>
        <h3>Episode: {props.episode.episode}</h3>
        <h3>Air Date: {props.episode.air_date}</h3>
      </div>
    );
  }