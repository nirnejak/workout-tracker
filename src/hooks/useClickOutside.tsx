import * as React from "react"

const useClickOutside = (ref: HTMLElement, callback: () => void): void => {
  const handleClick = (e: PointerEvent | MouseEvent | TouchEvent): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  React.useEffect(() => {
    document.addEventListener("pointerdown", handleClick)
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)
    return () => {
      document.removeEventListener("pointerdown", handleClick)
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
    }
  })
}

export default useClickOutside
