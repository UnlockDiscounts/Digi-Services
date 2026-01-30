import { useState } from 'react';
import { Plus, Search, ListFilter, Settings } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { MoreFilters } from './MoreFilters';
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');


  const [services, setServices] = useState([
    {
      id: '1',
      title: 'Website Development',
      image: service1, // Add your service image path here
      status: 'active'
    },
    {
      id: '2',
      title: 'Social Media Management',
      image: service2,
      status: 'active'
    },
    {
      id: '3',
      title: 'Resume Building',
      image: service3,
      status: 'active'
    }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleEdit = (service) => {
    // Logic to open modal with service data
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <div className="flex-1 p-8">

        {/* Header - Styled like Blogs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[16px] mb-2">
            <span className="text-[#666]">Dashboard</span>
            <span className="text-[#666]">›</span>
            <span className="text-black font-medium">Services</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Poppins',sans-serif] font-semibold text-[40px] text-black">Services</h1>
              <p className="text-[#666] text-[16px]">Manage, create and edit your service content from a central dashboard</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#6364ff] text-white px-6 py-3 rounded-[12px] flex items-center gap-2 hover:bg-[#5254ee] transition-colors"
            >
              <Plus className="size-5" />
              <span className="font-['Poppins',sans-serif] text-[18px]">Add Service</span>
            </button>
          </div>
        </div>

        {/* Filters - Styled like Blogs */}
        <div className="bg-gradient-to-r from-[#e8d5ff] to-[#d5daff] p-4 rounded-[16px] mb-6 flex items-center gap-4">
          <div className="flex-1 relative flex items-center">
            <Search className="absolute left-3 text-gray-400 size-5" />
            <input
              type="text"
              placeholder="Search services by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-[8px] bg-white border-none outline-none font-['Poppins',sans-serif]"
            />
          </div>

          <div className="bg-white px-4 py-3 rounded-[8px] font-['Poppins',sans-serif]">
            Total Services: <span className="font-semibold">{services.length}</span>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white px-4 py-3 rounded-[8px] border-none outline-none font-['Poppins',sans-serif] cursor-pointer"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button
            onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
            className="bg-white px-4 py-3 rounded-[8px] flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <ListFilter className="size-5" />
            <span className="font-['Poppins',sans-serif]">More Filters</span>
          </button>
          <MoreFilters
            isOpen={isMoreFiltersOpen}
            onClose={() => setIsMoreFiltersOpen(false)}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Services Grid - Fixed 3-column layout from Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-gray-100 p-4">
              {/* Service Image placeholder */}
              <div className="h-[180px] bg-gray-200 rounded-[12px] mb-4 overflow-hidden">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Settings size={48} />
                  </div>
                )}
              </div>

              <h3 className="text-[20px] font-semibold mb-2 truncate">{service.title}</h3>

              <div className="flex items-center justify-between mt-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${service.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg text-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}