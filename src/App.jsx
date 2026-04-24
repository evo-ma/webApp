import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AppRouter from './AppRouter'
import './i18n'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  )
}
