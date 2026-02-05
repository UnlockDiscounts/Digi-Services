import { useState, useEffect } from 'react';
import { getPosts } from '../services/blogApi';
import { getServices } from '../services/servicesApi';
import { getCards } from '../services/cardsApi';
import { getTestimonials } from '../services/testimonialsApi';
import { getFAQs } from '../services/faqsApi';
import { getWorks } from '../services/worksApi';
import { getContacts } from '../services/contactApi';

const DebugAllData = () => {
  const [allData, setAllData] = useState({
    posts: [],
    services: [],
    cards: [],
    testimonials: [],
    faqs: [],
    works: [],
    contacts: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    posts: true,
    services: true,
    cards: true,
    testimonials: true,
    faqs: true,
    works: true,
    contacts: true,
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError('');

        const [posts, services, cards, testimonials, faqs, works, contacts] =
          await Promise.all([
            getPosts().catch((e) => {
              console.error('Posts error:', e);
              return [];
            }),
            getServices().catch((e) => {
              console.error('Services error:', e);
              return [];
            }),
            getCards().catch((e) => {
              console.error('Cards error:', e);
              return [];
            }),
            getTestimonials().catch((e) => {
              console.error('Testimonials error:', e);
              return [];
            }),
            getFAQs().catch((e) => {
              console.error('FAQs error:', e);
              return [];
            }),
            getWorks().catch((e) => {
              console.error('Works error:', e);
              return [];
            }),
            getContacts().catch((e) => {
              console.error('Contacts error:', e);
              return [];
            }),
          ]);

        setAllData({
          posts: posts || [],
          services: services || [],
          cards: cards || [],
          testimonials: testimonials || [],
          faqs: faqs || [],
          works: works || [],
          contacts: contacts || [],
        });
      } catch (err) {
        console.error('Failed to fetch all data:', err);
        setError('Failed to fetch data from API');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const DataSection = ({ title, data, section }) => {
    const count = Array.isArray(data) ? data.length : 0;
    const isExpanded = expandedSections[section];

    return (
      <div className="mb-6 border-2 border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection(section)}
          className="w-full bg-gradient-to-r from-[#6364FF] to-[#B292FC] text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="bg-white/30 px-3 py-1 rounded-full text-sm font-semibold">
              {count} items
            </span>
          </div>
          <span className="text-2xl">{isExpanded ? '−' : '+'}</span>
        </button>

        {isExpanded && (
          <div className="p-6 bg-white">
            {count === 0 ? (
              <p className="text-gray-500 text-center py-8">No data available</p>
            ) : (
              <div className="space-y-4">
                {data.map((item, index) => (
                  <div
                    key={item._id || item.id || index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#6364FF] transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(item).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm font-semibold text-[#6364FF]">
                            {key}:
                          </p>
                          <p className="text-gray-800 text-sm break-words">
                            {typeof value === 'object' ? (
                              <code className="bg-gray-100 p-1 rounded text-xs">
                                {JSON.stringify(value, null, 2)}
                              </code>
                            ) : typeof value === 'string' && value.length > 100 ? (
                              value.substring(0, 100) + '...'
                            ) : (
                              String(value)
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Debug Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            View all database collections data
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6364FF]"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading data from all collections...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-300 text-red-800 p-6 rounded-lg mb-8">
            <p className="font-bold">Error: {error}</p>
            <p className="text-sm mt-2">Check browser console for more details</p>
          </div>
        )}

        {/* Data Sections */}
        {!loading && (
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Posts', value: allData.posts.length },
                { label: 'Services', value: allData.services.length },
                { label: 'Cards', value: allData.cards.length },
                { label: 'Testimonials', value: allData.testimonials.length },
                { label: 'FAQs', value: allData.faqs.length },
                { label: 'Works', value: allData.works.length },
                { label: 'Contacts', value: allData.contacts.length },
                {
                  label: 'Total',
                  value:
                    allData.posts.length +
                    allData.services.length +
                    allData.cards.length +
                    allData.testimonials.length +
                    allData.faqs.length +
                    allData.works.length +
                    allData.contacts.length,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-4 text-center border-2 border-gray-200"
                >
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-[#6364FF]">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Expandable Data Sections */}
            <DataSection title="📝 Blog Posts" data={allData.posts} section="posts" />
            <DataSection
              title="🔧 Services"
              data={allData.services}
              section="services"
            />
            <DataSection title="🎯 Cards" data={allData.cards} section="cards" />
            <DataSection
              title="⭐ Testimonials"
              data={allData.testimonials}
              section="testimonials"
            />
            <DataSection title="❓ FAQs" data={allData.faqs} section="faqs" />
            <DataSection title="💼 Works" data={allData.works} section="works" />
            <DataSection
              title="📧 Contacts"
              data={allData.contacts}
              section="contacts"
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DebugAllData;
