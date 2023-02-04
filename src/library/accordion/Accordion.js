import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Tabs from './Tabs';
import { StyledAccordion } from './styles';

const Accordion = (props) => {
  const { title = '', data, className } = props;
  if (isEmpty(data)) return null;
  return (
    <StyledAccordion className={className}>
      {title && <div className="title">{title}</div>}
      {/* <Tabs data={data}/> */}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  /** Title */
  title: PropTypes.string,

  /** Data  */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'html']).isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default Accordion;
