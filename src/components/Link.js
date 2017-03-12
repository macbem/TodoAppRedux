import React, { PropTypes } from 'react';

const Link = ({ children, switchFilter, filter, ownFilter }) => {
  const active = filter === ownFilter;
  if (active) {
    return <span>{children}</span>;
  }
  const handleClick = evt => {
    evt.preventDefault();
    switchFilter(ownFilter);
  };
  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  switchFilter: PropTypes.func.isRequired
};

export default Link;
