import React, { PropTypes } from 'react';

const styles = {
  base: {
    display: 'table',
  },
};

/**
 * Table Component
 */
const Table = ({ className, style, children, customStyle }) => (
  <div
    className={className}
    style={{ ...styles.base, ...style, ...customStyle }}
  >
    {children}
  </div>
);


Table.propTypes = {
  /**
   * Table content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Table specific style properties.
   */
  customStyle: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the text element.
   */
  style: PropTypes.object,
};

export default Table;
