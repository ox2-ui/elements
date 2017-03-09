import React, { PropTypes } from 'react';

const styles = {
  base: {
    display: 'block',
  },
};

/**
 * Image Component
 */
const Image = ({ className, style, value, customStyle }) => (
  <img
    className={className}
    src={value}
    style={{ ...styles.base, ...style, ...customStyle }}
  />
);


Image.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Image specific style properties.
   */
  customStyle: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the text element.
   */
  style: PropTypes.object,
  /**
   * Image data or url.
   */
  value: PropTypes.string.isRequired,
};

export default Image;
