import ReactDom from 'react-dom/client'

import { App } from './App'

const divRoot = document.getElementById('root')

const reactRoot = ReactDom.createRoot(divRoot)

reactRoot.render(<App />)