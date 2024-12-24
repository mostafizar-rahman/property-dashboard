import { useContext } from 'react';
import StatsCard from '@/components/statsCard';
import PropertyTable from '@/components/propertyTable';
import { statsData } from '@/db/statsData';
import { DataContext } from '@/contactApi/dataProvider';


function Home() {
  const { properties } = useContext(DataContext)


  const today = new Date();
  const stats = {
    totalProperties: properties.length,
    availableProperties: properties.filter((p) => p.status === 'Available').length,
    rentedProperties: properties.filter((p) => p.status === 'Rented').length,
    totalRevenue: properties
      .filter((p) => p.status === 'Rented')
      .reduce((sum, p) => sum + p.price, 0),
    checkInsToday: properties.filter(
      (p) => p.checkInDate === today.toISOString().split('T')[0]
    ).length,
    checkOutsToday: properties.filter(
      (p) => p.checkOutDate === today.toISOString().split('T')[0]
    ).length,
  };

  const data = statsData(stats)

  return (

    <div className="px-6 py-8">

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 mb-8">
        {data.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <PropertyTable />
    </div>
  );
}

export default Home;