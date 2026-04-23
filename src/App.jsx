import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import './i18n'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ overflow: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}
