import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<p>Sorry, it looks like an unexpected error has occurred.</p>}>
    <StrictMode>
      <Provider store={store}><App /></Provider>
    </StrictMode>
  </ErrorBoundary>,
)
