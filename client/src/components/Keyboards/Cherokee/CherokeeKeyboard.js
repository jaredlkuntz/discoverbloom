import React, { Component } from 'react';
import KeyboardTemplate from '../KeyboardTemplate';
import './CherokeeKeyboard.css';

// TODO: this is only the uppercase letters, need to add lowercase letters
const CherokeeSyllabary = createUnicodeBlock(0x13A0, 85).concat(createUnicodeBlock(0x13F8, 6)); 


class CherokeeKeyboard extends Component {
    render() {
        return (
            <KeyboardTemplate syllabary={CherokeeSyllabary} />
        )
    }
};

function createUnicodeBlock(unicodeStart, unicodeLength) {
    var result = [];

    for (var i=unicodeStart; i<unicodeLength; i++) {
        var char = String.fromCharCode(i);
        result.push(char);
    }

    return result;
}

