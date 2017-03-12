import React from 'react';
import Link from '../components/Link';

const Filters = ({ switchFilter, filter }) => (
  <div>
    Show:
    {' '}
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_ALL"
      filter={filter}
    >
      All
    </Link>
    {', '}
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_ACTIVE"
      filter={filter}
    >
      Active
    </Link>
    {', '}
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_COMPLETED"
      filter={filter}
    >
      Completed
    </Link>
  </div>
);

export default Filters;
