import { useState, useEffect } from 'react';
import { Plus, Search, ListFilter, Settings } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { MoreFilters } from './MoreFilters';
import axios from 'axios';

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);

  // Initialized as empty array to store API data
  const [services, setServices] = useState([]);

  // Integrated GET Services API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://digiservices-backend-6hc3.onrender.com/api/v1/services');
        console.log(response.data);
        // Map the API structure to our local state needs
        const formattedServices = response.data.map(service => ({
          id: service._id,
          title: service.title,
          image: service.files && service.files.length > 0 ? service.files[0] : null,
          status: 'active', // Defaulting to active as the API doesn't provide a status key
          category: service.category,
          description: service.description
        }));
        setServices(formattedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await axios.delete(`https://digiservices-backend-6hc3.onrender.com/api/v1/services/${id}`);
        setServices(services.filter(s => s.id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete the service.");
      }
    }
  };

  const handleEdit = (service) => {
    // Logic to open modal with service data
    setIsModalOpen(true);
  };

  // Filter logic for search
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[16px] mb-2 font-['Poppins',sans-serif]">
            <span className="text-[#666]">Dashboard</span>
            <span className="text-[#666]">›</span>
            <span className="text-black font-medium">Services</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Poppins',sans-serif] font-semibold text-[40px] text-black leading-tight">Services</h1>
              <p className="text-[#666] text-[16px] font-['Poppins',sans-serif]">Manage, create and edit your service content from a central dashboard</p>
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

        {/* Filters */}
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

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6364ff]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* UPDATED: Changed 'services.map' to 'filteredServices.map' to make the search work */}
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-gray-100 p-4 flex flex-col">
                <div className="h-[180px] bg-gray-200 rounded-[12px] mb-4 overflow-hidden">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Settings size={48} />
                    </div>
                  )}
                </div>

                <h3 className="text-[20px] font-semibold mb-2 truncate font-['Poppins',sans-serif]">{service.title}</h3>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium font-['Poppins',sans-serif] ${
                    service.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 transition-colors font-['Poppins',sans-serif]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-red-600 transition-colors font-['Poppins',sans-serif]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}