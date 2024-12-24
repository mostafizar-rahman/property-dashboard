import {
    LogIn,
    LogOut,
    Building,
    DollarSign,
    CalendarCheck,
    CalendarX,
} from 'lucide-react';

export function statsData(stats: any) {
    const data = [
        {
            title: "Total Properties",
            value: stats.totalProperties,
            icon: Building,
            color: "bg-blue-500",
        },
        {
            title: "Available",
            value: stats.availableProperties,
            icon: LogIn,
            color: "bg-green-500",
        },
        {
            title: "Rented",
            value: stats.rentedProperties,
            icon: LogOut,
            color: "bg-red-500",
        },
        {
            title: "Monthly Revenue",
            value: stats.totalRevenue,
            icon: DollarSign,
            color: "bg-purple-500",
        },
        {
            title: "Check-ins Today",
            value: stats.checkInsToday,
            icon: CalendarCheck,
            color: "bg-emerald-500",
        },
        {
            title: "Check-outs Today",
            value: stats.checkOutsToday,
            icon: CalendarX,
            color: "bg-orange-500",
        },
    ]

    return data
}
