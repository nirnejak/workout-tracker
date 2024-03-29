import * as React from "react"

export interface COMMAND_BAR_CONTEXT {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const CommandBarContext =
  React.createContext<COMMAND_BAR_CONTEXT | null>(null)

interface Props {
  children: React.ReactNode
}

const CommandBarProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <CommandBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CommandBarContext.Provider>
  )
}

export default CommandBarProvider
