/* eslint-disable react/prop-types */
import React from 'react';
import { colors } from '@/themes/default';
import has from 'lodash/has';
import each from 'lodash/each';
import { getBoxProps } from './utils';

const COLOR_ATTRS = ['color', 'backgroundColor', 'borderColor'];

/** Flexible Box component */
const Box = React.forwardRef(({ as = 'div', className, style, children, ...props }, ref) => {
  const { validProps, styleProps } = getBoxProps(props);

  // html tag in string
  let Tag = `${as}`;
  // can also be custom component (class component or func component with forward ref)
  if (typeof as === 'function') {
    Tag = as;
  }

  // Return color attr from theme
  each(COLOR_ATTRS, (attr) => {
    if (has(props, attr)) {
      const parsed = has(colors, props[attr]) ? colors[props[attr]] : props[attr];
      if (parsed) {
        styleProps[attr] = parsed;
      }
    }
  });

  return (
    <Tag
      className={className}
      style={{
        ...styleProps,
        ...style,
      }}
      ref={ref}
      {...validProps}
    >
      {children}
    </Tag>
  );
});

export default Box;
