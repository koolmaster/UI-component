import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/base/icon';
import { isEmpty } from 'lodash';

import { StyledActionMenu, MenuToggle, MenuContent, WrapperIcon } from './styles';

const ActionMenu = ({ data, className }) => {
  const [active, setActive] = useState(false);
  if (isEmpty(data)) return null;
  const handleClick = (url, action) => {
    if (!isEmpty(url)) window.location.href = url;
    else {
      if (action) action();
    }
  };

  return (
    <StyledActionMenu className={className}>
      <MenuToggle
        className={`navigation ${active ? 'active' : ''}`}
        active={active}
        width={data.length * 80}
        onClick={() => setActive(!active)}
      />
      <div className="menu">
        <ul>
          {data.map((item, index) => {
            const second = `0.${index + 1}s`;
            return (
              <WrapperIcon x={second} active={active} onClick={() => handleClick(item.url, item.action)}>
                <Icon type={item.type} icon={item.name} />
              </WrapperIcon>
            );
          })}
        </ul>
      </div>
    </StyledActionMenu>
  );
};

ActionMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        'grommet',
        'github',
        'game',
        'feather',
        'flatColor',
        'devi',
        'circum',
        'fontAwesome',
        'bootstrap',
        'box',
        'antDesign',
        'ionic5',
        'material',
      ]).isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      action: PropTypes.func,
    })
  ).isRequired,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default ActionMenu;
