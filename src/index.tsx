import { createRoot } from 'react-dom/client'
import './assets/css/app.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<>
			<App />
		</>
	</BrowserRouter>
)
