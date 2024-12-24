import { Calendar, ChevronDown, Edit, Home, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Link } from "react-router-dom"

const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
    {
        title: "Forms",
        url: "#",
        icon: Edit,
        subMenu: [
            {
                title: "Add Property",
                url: "add-property",
            },
            {
                title: "Add Admin",
                url: "#",
            },
        ]
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

const DashboardSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader className="text-4xl font-semibold border-b pb-[18px] font-italianno">
                <span>Property</span>
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            {item.subMenu ? (
                                <Collapsible className="group/collapsible">
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton asChild className="py-5">
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            </Link>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="ml-3">
                                        <SidebarGroupContent>
                                            {item.subMenu.map((subItem) => (
                                                <SidebarMenuItem key={subItem.title}>
                                                    <SidebarMenuButton asChild className="py-5">
                                                        <Link to={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarGroupContent>
                                    </CollapsibleContent>
                                </Collapsible>
                            ) : (
                                <SidebarMenuButton asChild className="py-5">
                                    <Link to={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default DashboardSidebar