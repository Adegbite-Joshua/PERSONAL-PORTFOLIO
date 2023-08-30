'use client'
import PropTypes from 'prop-types';



const NavButton = ({name}) => {
  return (
    <>
        <button id="NavButton">{name}</button>
    </>
  )
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired, // Require a string prop named "name"
};

export default NavButton