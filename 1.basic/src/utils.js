import { REACT_TEXT } from './constants';

export function wrapToProps(element) {
  return typeof element === 'number' || typeof element === 'string'
    ? {
        type: REACT_TEXT,
        props: element,
      }
    : element;
}
