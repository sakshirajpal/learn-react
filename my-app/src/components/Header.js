import React from  'react';
import PropTypes from 'prop-types';
import Button from "./Button";

const Header = (props) => {
    const onClick = (e) => {
      alert(e);
    };
    return (
        <header className='header'>
            <h1>Task Tracker of {props.title}</h1>
            <Button text='Add' color='red' onClick={onClick}></Button>
        </header>
    );
};

Header.defaultProps = {
    title: 'Default User',
};

Header.protoTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;