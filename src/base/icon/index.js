import React from 'react';

const Icon = ({ type, icon, ...props }) => {
  let TheIcon;
  switch (type) {
    case 'antDesign':
      TheIcon = require('react-icons/ai')[icon];
      return <TheIcon {...props} />;
    case 'bootstrap':
      TheIcon = require('react-icons/bs')[icon];
      return <TheIcon {...props} />;
    case 'fontAwesome':
      TheIcon = require('react-icons/fa')[icon];
      return <TheIcon {...props} />;
      break;
    case 'box':
      TheIcon = require('react-icons/bi')[icon];
      return <TheIcon {...props} />;
      break;
    case 'ionic4':
      TheIcon = require('react-icons/io')[icon];
      return <TheIcon {...props} />;
      break;
    case 'ionic5':
      TheIcon = require('react-icons/io5')[icon];
      return <TheIcon {...props} />;
      break;
    case 'material':
      TheIcon = require('react-icons/md')[icon];
      return <TheIcon {...props} />;
      break;
    case 'circum':
      TheIcon = require('react-icons/ci')[icon];
      return <TheIcon {...props} />;
    case 'devi':
      TheIcon = require('react-icons/di')[icon];
      return <TheIcon {...props} />;
    case 'flatColor':
      TheIcon = require('react-icons/fc')[icon];
      return <TheIcon {...props} />;
      break;
    case 'feather':
      TheIcon = require('react-icons/fi')[icon];
      return <TheIcon {...props} />;
      break;
    case 'game':
      TheIcon = require('react-icons/gi')[icon];
      return <TheIcon {...props} />;
      break;
    case 'github':
      TheIcon = require('react-icons/go')[icon];
      return <TheIcon {...props} />;
      break;
    case 'grommet':
      TheIcon = require('react-icons/gr')[icon];
      return <TheIcon {...props} />;
      break;

    default:
      break;
  }
};

export default Icon;
