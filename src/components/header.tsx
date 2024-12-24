import { Bell, Moon, Search, Sun } from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"
import { useTheme } from "next-themes"

const Header = () => {
    const { theme, setTheme } = useTheme()
    return (
        <header className="py-5 px-6 flex items-center justify-between bg-background sticky top-0">
            <div className="cursor-pointer">
                <SidebarTrigger />
                {/* <Menu /> */}
            </div>
            <div className="flex items-center gap-4">
                <span className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
                </span>
                <span className="cursor-pointer"><Search size={19} /></span>
                <span className="cursor-pointer"><Bell size={19} /></span>
                <div className="cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="w-7" />
                </div>
            </div>
        </header>
    )
}

export default Header