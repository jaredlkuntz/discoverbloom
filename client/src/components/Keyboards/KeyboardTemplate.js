import React, { Component } from 'react';


// TODO: change this to a form w/ textarea & button input elements.
export default class Keyboard extends Component {

  render() {

    return (
        <div>
          <ul>
            { syllabary.map(character) => 
                <li key={character.charCodeAt()}>
                  {character}
                </li>
            }
          </ul>
        </div>
    )
  }
};
