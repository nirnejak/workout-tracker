import * as React from "react"

const useClickOutside = (ref: any, callback: () => void): void => {
  const handleClick = (e: PointerEvent | MouseEvent | TouchEvent): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
