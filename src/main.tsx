import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"
import { Toaster } from "sonner"

import Home from "./pages/Home"
import CommandBarProvider from "./store/CommandContext"
import ThemeProvider from "./store/ThemeContext"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CommandBarProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster closeButton />
    </CommandBarProvider>
  </React.StrictMode>
)
