import * as React from "react"

type SUPPORTED_THEME = "Forest" | "Dune" | "Oasis"

const themes = {
  Forest: {
    primary: "#ccddac",
    dark: "#2c462a",
    light: "#2c462a",
  },
  Dune: {
    primary: "#feb123",
    dark: "#33322c",
    light: "#edebd8",
  },
  Oasis: {
    primary: "#4baeff",
    dark: "#11284a",
    light: "#f6f6eb",
  },
}

export interface THEME_CONTEXT {
  theme: SUPPORTED_THEME
  changeTheme: (newTheme: SUPPORTED_THEME) => void
}

export const ThemeContext = React.createContext<THEME_CONTEXT | null>(null)

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<SUPPORTED_THEME>("Forest")

  const changeTheme = (newTheme: SUPPORTED_THEME): void => {
    setTheme(newTheme)

    const currentTheme = themes[newTheme]
    const ele = document.documentElement.style
    ele.setProperty("--color-primary", currentTheme.primary)
    ele.setProperty("--color-light", currentTheme.light)
    ele.setProperty("--color-dark", currentTheme.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = (): THEME_CONTEXT => {
  const context = React.useContext(ThemeContext)
  if (context === null)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
