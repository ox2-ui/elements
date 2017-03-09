import React, { PropTypes } from 'react';

/**
 * Text Component
 */
const Text = ({ className, style, value, customStyle }) => (
  <div
    className={className}
    style={{ ...style, ...customStyle }}
  >{value}</div>
);


Text.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Text specific style properties.
   */
  customStyle: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the text element.
   */
  style: PropTypes.object,
  /**
   * Text to display.
   */
  value: PropTypes.string.isRequired,
};

export default Text;
