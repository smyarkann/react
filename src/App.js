import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Portal from './Portal';
import BasvuruGoruntule from './BasvuruGoruntule';
import BasvuruFormu from './BasvuruFormu';
import IletisimBilgileri from './IletisimBilgileri';
import DokumanYukleme from './DokumanYukleme';
import BilgiGuncelle from './BilgiGuncelle';
import BasvuruSorgulama from './BasvuruSorgulama';
import Sifredegistirme from './Sifredegistirme';
function App() {
  
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kayit" element={<Register />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
      <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
      <Route path="/portal/IletisimBilgileri" element={<IletisimBilgileri/>}/>
      <Route path="/portal/DokumanYukleme" element={<DokumanYukleme/>}/>
      <Route path="/portal/BilgiGuncelle" element={<BilgiGuncelle/>}/>
      <Route path="/portal/BasvuruSorgulama" element={<BasvuruSorgulama/>}/>
      <Route path="/portal/Sifredegistirme" element={<Sifredegistirme/>}/>
    </Routes>
  </Router>

  );
}

export default App;
