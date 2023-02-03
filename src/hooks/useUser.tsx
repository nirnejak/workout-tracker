import * as React from "react"

interface HookReturnType {
  isAuthenticated: boolean
  loginUser: () => void
  logoutUser: () => void
}

const useUser = (): HookReturnType => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const loginUser = (): void => {
    setIsAuthenticated(true)
  }
  const logoutUser = (): void => {
    setIsAuthenticated(false)
  }

  return { isAuthenticated, loginUser, logoutUser }
}

export default useUser
