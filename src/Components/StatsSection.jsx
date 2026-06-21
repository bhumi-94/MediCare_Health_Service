import React from 'react';

const stats = [
   {
      id: 1,
      value: "400+",
      label: "Unique Visitors"
      
   },
   {
      id: 2,
      value: "450+",
      label: "Total Sales"
      
   },
   {
      id: 3,
      value: "500+",
      label: "Customer Satisfaction"
      
   },
   {
      id: 4,
      value: "600+",
      label: "System Uptime (in hours)"
    
   }
];

export default function StatsSection() {

   return (
    <section className="bg-blue-500 text-white py-12 px-2 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <li
          key={stat.id}
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <dd className="text-3xl md:text-4xl font-bold">
            {stat.value}
          </dd>

          <dt className="mt-2 text-sm md:text-base text-center text-white/90">
            {stat.label}
          </dt>
        </li>
      ))}
    </ul>
  </div>
</section>
   
   );
}