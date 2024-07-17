
import React from 'react';
import PropTypes from 'prop-types';

const HoursComp = ({ heading, text }) => {
  return (
    <div className="px-4 py-2 mx-auto w-[80%] text-left ">
      <h2 className="text-[1.7rem] text-left font-[500]  mb-2">{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

HoursComp.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HoursComp;
