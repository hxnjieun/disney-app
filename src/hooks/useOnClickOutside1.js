import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if(!ref.current || ref.current.contains(event.target)) {
            return;
      }
      handler();
    }
        document.addEventListener('mousedown', listener);; //마우스
        document.addEventListener('touchstart', listener);; //손
      return () => {
        document.removeEventListener('mousedown', listener);; //마우스
        document.removeEventListener('touchstart', listener);; //손
      }
    }, [ref, handler])
    
}
;