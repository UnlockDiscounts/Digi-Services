import { useState } from 'react';
import { Plus, Search, ListFilter, Settings, CheckCircle, Circle } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import { MoreFilters } from './MoreFilters';

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Filter and sort services
  const filteredServices = services
    .filter(service => {
      // Search filter
      const matchesSearch = service.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category?.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Status filter
      const matchesStatus = statusFilter === 'All Status' || 
                           (service.status || 'active') === statusFilter.toLowerCase();
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      // Sort by date or alphabet
      if (sortBy === 'newest') return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      if (sortBy === 'oldest') return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      if (sortBy === 'a-z') return (a.title || '').localeCompare(b.title || '');
      if (sortBy === 'z-a') return (b.title || '').localeCompare(a.title || '');
      return 0;
    });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setErrorMessage('');
      setServices(services.filter(s => (s._id || s.id) !== id));
    }
  };

  const handleToggleStatus = (service) => {
    setErrorMessage('');
    const newStatus = (service.status || 'active') === 'active' ? 'inactive' : 'active';
    setServices(services.map(s =>
      (s._id || s.id) === (service._id || service.id)
        ? { ...s, status: newStatus }
        : s
    ));
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
            Total Services: <span className="font-semibold">{filteredServices.length}</span>
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

        {errorMessage && (
          <p className="text-red-600 text-[16px] mb-4">{errorMessage}</p>
        )}

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6364ff]"></div>
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No services found matching your filters.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service._id || service.id} className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-gray-100 p-4 flex flex-col">
              {/* Service Image placeholder */}
              <div className="h-[180px] bg-gray-200 rounded-[12px] mb-4 overflow-hidden">
                {(service.image || (service.files && service.files[0])) ? (
                  <img src={service.image || (service.files && service.files[0])} alt={service.title} className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect fill=%22%23ddd%22 width=%22100%25%22 height=%22100%25%22/%3E%3C/svg%3E'} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Settings size={48} />
                  </div>
                )}
              </div>

              <h3 className="text-[20px] font-semibold mb-2 truncate font-['Poppins',sans-serif]">{service.title}</h3>

              <div className="flex items-center justify-between mt-auto">
                <button
                  onClick={() => handleToggleStatus(service)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: (service.status || 'active') === 'active' ? '#dcfce7' : '#fee2e2',
                    color: (service.status || 'active') === 'active' ? '#166534' : '#991b1b',
                  }}
                >
                  {(service.status || 'active') === 'active' ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Active</span>
                    </>
                  ) : (
                    <>
                      <Circle size={16} />
                      <span>Inactive</span>
                    </>
                  )}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 transition-colors font-['Poppins',sans-serif]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service._id || service.id)}
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

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}