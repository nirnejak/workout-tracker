import * as React from "react"

type SUPPORTED_THEME = "light" | "dark" | "rosepine"

interface THEME_CONTEXT {
  theme: SUPPORTED_THEME
  changeTheme: (newTheme: SUPPORTED_THEME) => void
}

export const ThemeContext = React.createContext<THEME_CONTEXT | undefined>(
  undefined
)

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<SUPPORTED_THEME>("light")

  const changeTheme = (newTheme: SUPPORTED_THEME): void => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
