import React, { PropTypes } from 'react';
import { LinkElement, FilterLink } from '../styled-components';

const Link = ({ children, switchFilter, filter, ownFilter }) => {
  const active = filter === ownFilter;
  if (active) {
    return <LinkElement selected>{children}</LinkElement>;
  }
  const handleClick = evt => {
    evt.preventDefault();
    switchFilter(ownFilter);
  };
  return (
    <FilterLink>
      <LinkElement
        href="#"
        onClick={handleClick}
        selected={active && 'selected'}
      >
        {children}
      </LinkElement>
    </FilterLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  switchFilter: PropTypes.func.isRequired
};

export default Link;
