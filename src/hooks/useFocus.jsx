import { useRef, useState, useEffect } from 'react';

export function useFocus() {
  const ref = useRef(); //defining the ref
  const [focussed, setFocussed] = useState(false);

  useEffect(() => {
    if (!ref.current) return; //return if ref does not exist

    const currentElement = ref.current; //storing the current ref
    const onFocus = () => setFocussed(true); //fn for focus
    const onBlur = () => setFocussed(false); //fn for remove focus

    currentElement.addEventListener('focus', onFocus); //when element is focussed
    currentElement.addEventListener('blur', onBlur); //when focus is removed

    return () => {
      //removing the event listeners
      currentElement.removeEventListener('focus', onFocus);
      currentElement.removeEventListener('blur', onBlur);
    };
  }); //no dependency array means useEffect will rerun on every render

  return [ref, focussed]; //returning an iterable with the reference and the boolean value of isFocussed
}
