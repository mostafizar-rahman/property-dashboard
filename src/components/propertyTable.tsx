import { useContext, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { initialProperties } from '@/db/initialProperties';
import { DataContext } from '@/contactApi/dataProvider';


const PropertyTable = () => {
    const { properties } = useContext(DataContext)
    const [filterType, setFilterType] = useState<string>('All');
    const [filterStatus, setFilterStatus] = useState<string>('All');

    const filteredProperties = properties.filter((property) => {
        const typeMatch = filterType === 'All' || property.type === filterType;
        const statusMatch = filterStatus === 'All' || property.status === filterStatus;
        return typeMatch && statusMatch;
    });

    console.log(initialProperties)

    return (
        <div className='bg-background p-4'>
            <div className='flex items-center justify-between flex-wrap gap-5 mb-5'>
                <h3 className='text-xl font-medium'>Property Table</h3>
                <div className="flex flex-wrap gap-4 ">
                    <Select onValueChange={setFilterType}>
                        <SelectTrigger className="w-[150px] h-10 rounded-none text-base bg-background">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Apartment">Apartment</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Commercial">Commercial</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-[150px] h-10 rounded-none text-base bg-background">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="Available">Available</SelectItem>
                            <SelectItem value="Rented">Rented</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <Table className="border md:min-w-[1200px] min-w-[1000px]">
                    <TableHeader>
                        <TableRow className="bg-secondary">
                            <TableHead className="font-semibold text-foreground py-4 max-w-[400px]">Image</TableHead>
                            <TableHead className="font-semibold text-foreground py-4">Price</TableHead>
                            <TableHead className="font-semibold text-foreground py-4">Status</TableHead>
                            <TableHead className="font-semibold text-foreground py-4">Type</TableHead>
                            <TableHead className="font-semibold text-foreground py-4">CheckIn Date</TableHead>
                            <TableHead className="font-semibold text-foreground py-4">CheckOut Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            filteredProperties.map(({ image, name, price, status, address, type, checkInDate, checkOutDate }) => {
                                return (
                                    <TableRow>
                                        <TableCell className="py-2 flex items-center gap-3 max-w-[400px]">
                                            <img src={image} alt='img' className='w-20 h-25 object-cover' />
                                            <div>
                                                <p className='text-lg font-medium line-clamp-1'>{name}</p>
                                                <p className=''>{address}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-2">${price}</TableCell>
                                        <TableCell className="py-2">{status}</TableCell>
                                        <TableCell className="py-2">{type}</TableCell>
                                        <TableCell className="py-2">{checkInDate}</TableCell>
                                        <TableCell className="py-2">{checkOutDate}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default PropertyTable