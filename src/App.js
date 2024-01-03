import RoutesApp from './routes'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header';

export default function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}
