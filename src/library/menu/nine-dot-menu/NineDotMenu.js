import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/base/icon';
import { IoCloseOutline } from 'react-icons/io5';

import { StyledNineDotMenu, WrapperIcon, BtnClose } from './styles';
import { isEmpty } from 'lodash';

const NineDotMenu = ({ data, className }) => {
  const [active, setActive] = useState(false);
  if (isEmpty(data) || data.length === 0 || data.length >= 9) return null;
  return (
    <StyledNineDotMenu className={className}>
      <div className={`navigation ${active ? 'active' : ''}`} onClick={() => setActive(true)}>
        {data.map((item, index) => {
          const x = index === 2 || index === 3 ? 0 : index === 0 || index === 4 || index === 5 ? -1 : 1;
          const y = index === 0 || index === 1 ? 0 : index === 3 || index === 4 || index === 7 ? 1 : -1;

          return (
            <WrapperIcon x={x} y={y} i={index} key={index} active={active}>
              <Icon type={item.type} icon={item.name} />
            </WrapperIcon>
          );
        })}
      </div>
      <BtnClose className={`${active ? 'active' : ''}`} onClick={() => setActive(false)}>
        <IoCloseOutline />
      </BtnClose>
    </StyledNineDotMenu>
  );
};

NineDotMenu.propTypes = {
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
    })
  ).isRequired,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default NineDotMenu;
