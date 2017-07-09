import React from 'react';
import {
  compose,
  withProps,
} from 'recompose';
import Halogen from 'halogen';

import './style.css';

const sizeMapper = {
  small: '15px',
  medium: '30px',
  big: '60px',
  huge: '80px',
}

export const Loader = (props) => {
  const {
    size = 'medium',
    color = 'black',
  } = props;

  return <Halogen.ClipLoader
    className="loader"
    color={color}
    size={sizeMapper[size]}
  />;
};

export const SmallLoader = compose(
  withProps({size: 'small'})
)(Loader);

export const BigLoader = compose(
  withProps({size: 'big'})
)(Loader);

export const HugeLoader = compose(
  withProps({size: 'huge'})
)(Loader);

export default Loader;
