import MobileNav from "@/component/shared/MobileNav"
import Sidebar from "@/component/shared/Sidebar"

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='root'>
          <Sidebar />
        <div className="root-container">
          <MobileNav />
            <div className="wrapper">
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout