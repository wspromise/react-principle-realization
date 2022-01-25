import { REACT_ELEMENT } from './constants';
import { wrapToProps } from './utils';

function createElement(type, config, children) {
  let key, ref;
  ref = config.ref;
  key = config.key;

  delete config.ref;
  delete config.key;
  delete config.__self;
  delete config.__source;

  let props = { ...config };

  if (arguments.length > 3) {
    props.children = Array.from(arguments)
      .slice(2)
      .map((item) => wrapToProps(item));
  } else {
    props.children = wrapToProps(children);
  }

  return {
    $$typeof: REACT_ELEMENT,
    type,
    key,
    ref,
    props,
  };
}

const React = {
  createElement,
};
export default React;
