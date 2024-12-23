import { BrowserRouter, Routes, Route } from 'react-router';
import Catalog from './pages/Catalog';
import { MinicartProvider } from './hooks/useMinicart';

function App() {
  return (
    <MinicartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </MinicartProvider>
  );
}

export default App;