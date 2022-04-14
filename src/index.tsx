import React from 'react'
import ReactDOM from 'react-dom/client'

import { LoaderContextProvider } from 'context/LoaderContext'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from 'appRouter/AppRouter'

import reportWebVitals from './reportWebVitals'

import 'assets/styles/index.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LoaderContextProvider>
          <SnackbarProvider maxSnack={3}>
            <AppRouter />
          </SnackbarProvider>
        </LoaderContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// NEW METHOD:

// ...
