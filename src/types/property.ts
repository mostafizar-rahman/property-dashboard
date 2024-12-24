export type PropertyType = 'Apartment' | 'House' | 'Commercial';
export type RentalStatus = 'Available' | 'Rented';

export interface Property {
    id: number;
    name: string;
    type: PropertyType;
    status: RentalStatus;
    address: string;
    price: number;
    image: string;
    checkInDate?: string;
    checkOutDate?: string;
}