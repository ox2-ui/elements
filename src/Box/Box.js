import React, { PropTypes } from 'react';

/**
 * Box Component
 */
const Box = ({ className, style, children, customStyle }) => (
  <div
    className={className}
    style={{ ...style, ...customStyle }}
  >
    {children}
  </div>
);


Box.propTypes = {
  /**
   * Box content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Box specific style properties.
   */
  customStyle: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the text element.
   */
  style: PropTypes.object,
};

export default Box;
