/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Box from '@/base/box';
import React from 'react';
import isNil from 'lodash/isNil';
import get from 'lodash/get';

/** sample usage:
 * const ButtonBox = getBox('button') => will render as <button> element
 * default is <div>, can use default exported Box
 */
export const getBox = (tag) => {
  return React.forwardRef((props, ref) => {
    return <Box {...props} ref={ref} as={tag} />;
  });
};

export const getFinalData = (data) => {
  if (!data) return {};

  const finalData = {};
  Object.entries(data).forEach(([key, value]) => {
    let defaultValue = '';
    if (key === 'tags') {
      defaultValue = [];
    }
    finalData[key] = value || defaultValue;
  });
  return finalData;
};

const urlBase = false;
const _URL = urlBase ? urlBase.URL : URL;

export const createUrlFromParams = (url, params) => {
  try {
    if (!url) return url;
    const a = new _URL(url);
    if (params) {
      for (const key in params) {
        if (params[key] !== null && params[key] !== false) {
          a.searchParams.set(key, params[key]);
        } else {
          a.searchParams.delete(key);
        }

        if (key === 'page' && params[key] === 1) {
          a.searchParams.delete(key);
        }
      }
    }
    return a.href;
  } catch (e) {
    console.log(e, url);
    return url;
  }
};

export const numberWithCommasAndDot = (data, number) => {
  const value = parseFloat(data).toFixed(number).toString().replace('.', ',');
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
