import React, { PropTypes } from 'react';

const styles = {
  base: {
    display: 'table-cell',
  },
};

/**
 * Cell Component
 */
const Cell = ({ className, style, children, customStyle }) => (
  <div
    className={className}
    style={{ ...styles.base, ...style, ...customStyle }}
  >
    {children}
  </div>
);


Cell.propTypes = {
  /**
   * Cell content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Cell specific style properties.
   */
  customStyle: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the text element.
   */
  style: PropTypes.object,
};

export default Cell;
