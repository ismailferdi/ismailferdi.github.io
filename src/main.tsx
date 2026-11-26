import './index.css'
import '@fontsource/inter/600.css'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App.tsx'

export const createRoot = ViteReactSSG(<App />)
