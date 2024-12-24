import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DataContext } from "@/contactApi/dataProvider";
import { useContext, useState } from "react";

const AddProperty = () => {
    const { properties, setProperties } = useContext(DataContext);
    const [formData, setFormData] = useState({
        name: '',
        type: 'Apartment',
        status: 'Available',
        address: '',
        price: '',
        image: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const property: any = {
            ...formData,
            id: properties.length + 1,
        };
        const updatedProperties = [...properties, property];

        setProperties(updatedProperties);

        // Save updated properties to localStorage
        localStorage.setItem('properties', JSON.stringify(updatedProperties));

        // Reset form data after submission
        setFormData({
            name: '',
            type: 'Apartment',
            status: 'Available',
            address: '',
            price: '',
            image: '',
        });
    };

    return (
        <div className="p-6">
            <div className="bg-background p-6 w-full">
                <h2 className="text-xl font-bold mb-4">Add New Property</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label>
                            Property Name
                        </Label>
                        <Input
                            type="text"
                            required
                            className="mt-1"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <Label>
                            Property Type
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, type: value })}>
                            <SelectTrigger className="h-[50px] rounded-none mt-1 text-base">
                                <SelectValue placeholder="Apartment" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Apartment">Apartment</SelectItem>
                                <SelectItem value="House">House</SelectItem>
                                <SelectItem value="Commercial">Commercial</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>
                            Status
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, status: value })}>
                            <SelectTrigger className="h-[50px] rounded-none mt-1 text-base">
                                <SelectValue placeholder="Available" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Available">Available</SelectItem>
                                <SelectItem value="Rented">Rented</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>
                            Address
                        </Label>
                        <Input
                            type="text"
                            required
                            className="mt-1"
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <Label>
                            Monthly Price ($)
                        </Label>
                        <Input
                            type="number"
                            required
                            min="0"
                            className="mt-1"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <Label>
                            Image URL
                        </Label>
                        <Input
                            type="url"
                            required
                            className="mt-1"
                            value={formData.image}
                            onChange={(e) =>
                                setFormData({ ...formData, image: e.target.value })
                            }
                        />
                    </div>
                    
                    <div className="flex justify-end pt-3">
                        <Button
                            size={"lg"}
                            type="submit"
                        >
                            Add Property
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;