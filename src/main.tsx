import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/layout/Layout';
import { TablePage } from './pages/Table';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<App />} />
                <Route path='table' element={<TablePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
