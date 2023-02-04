import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/base/icon';
import { Item, User, Navigation, EmptyAvatar } from './styles';

const UserInfoAction = (props) => {
  const { avatar, name, career, onEdit, onWishlist, onDelete, className } = props;
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Item className={className} ref={wrapperRef}>
      <User>
        <div class="imgBx">{avatar ? <img src={avatar} alt="avatar" /> : <EmptyAvatar />}</div>
        <div class="details">
          <p>{name}</p>
          <p>{career}</p>
        </div>
      </User>
      <Navigation className={active ? 'active' : ''} onClick={() => setActive(true)}>
        <span onClick={onEdit}>
          <Icon type="bootstrap" icon="BsPencilSquare" />
        </span>
        <span onClick={onWishlist}>
          <Icon type="bootstrap" icon="BsHeart" />
        </span>
        <span onClick={onDelete}>
          <Icon type="bootstrap" icon="BsTrash" />
        </span>
      </Navigation>
    </Item>
  );
};

UserInfoAction.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  /** callback when button Edit or Detail is clicked */
  onEdit: PropTypes.func,
  /** callback when button Wishlist is clicked */
  onWishlist: PropTypes.func,
  /** callback when button Delete is clicked */
  onDelete: PropTypes.func,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default UserInfoAction;
