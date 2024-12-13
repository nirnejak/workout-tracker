import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ReactDOM from "react-dom/client"
import { Toaster } from "sonner"

import CommandBarProvider from "./context/CommandContext"
import ThemeProvider from "./context/ThemeContext"
import Home from "./pages/Home"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

const root = document.getElementById("root")

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CommandBarProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
        <Toaster closeButton />
      </CommandBarProvider>
    </React.StrictMode>
  )
}
