import React from "react"

import ReactDOM from "react-dom/client"
import { Toaster } from "sonner"

import App from "./App"
import CommandBarProvider from "./store/CommandContext"
import ThemeProvider from "./store/ThemeContext"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CommandBarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster closeButton />
    </CommandBarProvider>
  </React.StrictMode>
)
