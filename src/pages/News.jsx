import React from 'react';

export default function News() {
  const news = [
    {
      title: 'New Technology Implementation Success',
      date: '2025-11-01',
      category: 'Technology',
      excerpt: 'Successfully implemented cutting-edge automation technology in major manufacturing facility.',
      image: '/images/news1.jpg'
    },
    {
      title: 'Sustainability Achievement Award',
      date: '2025-10-15',
      category: 'Awards',
      excerpt: 'Recognized for outstanding contribution to sustainable industrial practices.',
      image: '/images/news2.jpg'
    },
    {
      title: 'Global Expansion Announcement',
      date: '2025-10-01',
      category: 'Company News',
      excerpt: 'Expanding operations to new international markets to serve global clients.',
      image: '/images/news3.jpg'
    },
    {
      title: 'Innovation in Mining Technology',
      date: '2025-09-15',
      category: 'Innovation',
      excerpt: 'Launched new smart mining solutions for improved efficiency and safety.',
      image: '/images/news4.jpg'
    }
  ];

  const categories = ['All', 'Technology', 'Awards', 'Company News', 'Innovation'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container-custom">
          <h1 className="heading-primary text-white mb-6">
            News & Media
          </h1>
          <p className="text-xl max-w-2xl">
            Stay updated with our latest news, achievements, and industry insights.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-300">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <time>{new Date(item.date).toLocaleDateString()}</time>
                    <span className="text-blue-600">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-secondary text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for the latest news and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}