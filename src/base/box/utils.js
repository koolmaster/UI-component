import isPropValid from '@emotion/is-prop-valid';
import { STYLE_PROPS } from './constants';

const getObjectWithoutEmptyValues = (object = {}) => {
  const finalObject = { ...object };
  Object.entries(object).forEach(([key, value]) => {
    if (!value) delete finalObject[key];
  });
  return finalObject;
};

const getFinalStyleProps = (styleProps) => {
  const {
    // padding
    pt,
    pb,
    pl,
    pr,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    px,
    py,
    p,
    padding,
    // margin
    mt,
    mb,
    ml,
    mr,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    mx,
    my,
    m,
    margin,
    ...rest
  } = styleProps;

  const hasCustomPadding =
    pt || pb || pl || pr || paddingTop || paddingBottom || paddingLeft || paddingLeft || paddingRight || px || py;

  const finalPadding = hasCustomPadding
    ? getObjectWithoutEmptyValues({
        paddingTop: pt || paddingTop || py,
        paddingBottom: pb || paddingBottom || py,
        paddingLeft: pl || paddingLeft || px,
        paddingRight: pr || paddingRight || px,
      })
    : {};

  const hasCustomMargin = mt || mb || ml || mr || marginTop || marginBottom || marginLeft || marginRight || mx || my;

  const finalMargin = hasCustomMargin
    ? getObjectWithoutEmptyValues({
        marginTop: mt || marginTop || my,
        marginBottom: mb || marginBottom || my,
        marginLeft: ml || marginLeft || mx,
        marginRight: mr || marginRight || mx,
      })
    : {};

  return {
    ...rest,
    margin: m || margin,
    padding: p || padding,
    ...finalPadding,
    ...finalMargin,
  };
};

// get list of valid props to prevent custom props bleeding into DOM component
export const getBoxProps = (props) => {
  const validProps = {};
  const styleProps = {};
  Object.entries(props).forEach(([key, value]) => {
    if (key in STYLE_PROPS) {
      styleProps[key] = value;
    } else if (isPropValid(key)) {
      validProps[key] = value;
    }
  });

  return {
    validProps,
    styleProps: getFinalStyleProps(styleProps),
  };
};
