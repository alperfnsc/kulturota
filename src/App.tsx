import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

const MapPage = lazy(() => import('./pages/MapPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-950">
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium animate-pulse">Harita Yükleniyor...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
