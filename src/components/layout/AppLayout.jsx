import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
