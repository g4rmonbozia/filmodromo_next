import RootLayout from "@/components/layout"
import NavMenu from "@/components/navMenu"

export default function PageLayout({ children }) {
  return (
    <RootLayout>      
      <NavMenu />
      <div className="h-10 lg:h-28 w-full"></div>
      {children}
    </RootLayout>
  )
}