
import NavMenu from "@/components/navMenu"

export default function GeneralLayout({ children }) {
  return (
      <div className="absolute w-full flex flex-col items-center">
        <NavMenu />
        <div className="h-44 lg:h-64"></div>
        {children}
      </div>

  )
}