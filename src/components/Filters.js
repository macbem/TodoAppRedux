import React from 'react';
import Link from '../components/Link';
import { FiltersContainer } from '../styled-components';

const Filters = ({ switchFilter, filter }) => (
  <FiltersContainer>
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_ALL"
      filter={filter}
    >
      All
    </Link>
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_ACTIVE"
      filter={filter}
    >
      Active
    </Link>
    <Link
      switchFilter={switchFilter}
      ownFilter="SHOW_COMPLETED"
      filter={filter}
    >
      Completed
    </Link>
  </FiltersContainer>
);

export default Filters;
