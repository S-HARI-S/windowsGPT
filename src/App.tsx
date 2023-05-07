import { useState } from 'react'
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";

// import RtlLayout from "layouts/rtl";
import AdminLayout from "@/layouts/admin";
import AuthLayout from "@/layouts/auth";
import Update from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import '@/assets/css/App.css'
import SidePanel from './components/Sidepanel'
import Setup from './components/Setup'


console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  // return (
  //   <>
  //   <div className="flex flex-row">
  //   <SidePanel />
  //   <Setup />
  //   </div>

  //   </>
  // )

  return (
    
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
 
  );
}

export default App
