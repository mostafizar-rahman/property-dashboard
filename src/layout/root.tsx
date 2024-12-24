import DashboardSidebar from '@/components/dashboardSidebar'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <div className='w-full overflow-x-hidden'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </SidebarProvider>
    )
}

export default RootLayout