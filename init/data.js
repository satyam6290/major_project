const sampleListings = [
  {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
  },
  {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
  },
  {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
  },
  // Additional Listings
  {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
  },
  {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
  },
  {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
  },
  {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
  },
  {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
  },
  {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
  },
  {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
  },
  {
      title: "Historic Canal House",
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
  },
  {
      title: "Private Island Retreat",
      description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
  },
  {
      title: "Charming Cottage in the Cotswolds",
      description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
  },
  {
      title: "Historic Brownstone in Boston",
      description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym91c3RvbmlhJTIwc2F1ZGlvfGVufDB8fDB8fHwxNjQzNjE5MDMz&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Boston",
      country: "United States",
  },
  {
      title: "Scenic Vineyard Cottage",
      description: "Enjoy wine country living in this cozy cottage nestled among rolling vineyards and picturesque landscapes.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1542330298-327e1f9a6d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbmV5YXJkJTIwY291dHxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Napa Valley",
      country: "United States",
  },
  {
      title: "Mountain View Retreat",
      description: "Wake up to breathtaking mountain views in this serene and secluded retreat.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1503642556022-bd12b47a9275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB2aW5leWFyZHxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Banff",
      country: "Canada",
  },
  {
      title: "Modern Apartment in Sydney",
      description: "Experience urban living in this sleek and modern apartment located in the vibrant city of Sydney.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1560574188-6fcf343c1a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN5ZG5leSUyMGFwcGVydGluYXRpb258ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Sydney",
      country: "Australia",
  },
  {
      title: "Oceanfront Villa in Bali",
      description: "Escape to paradise in this luxurious oceanfront villa located on the tropical island of Bali.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1613566400660-6fd6a6f58f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGklMjB2aWxsYXxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Bali",
      country: "Indonesia",
  },
  {
      title: "Tranquil Lakeside Cabin",
      description: "Relax by the lake in this charming cabin surrounded by peaceful nature.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571177322646-507a72db69d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFrZXNpZGV8ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Placid",
      country: "United States",
  },
  {
      title: "Traditional Ryokan in Kyoto",
      description: "Experience traditional Japanese hospitality in this elegant ryokan located in the historic city of Kyoto.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1551801333-83dd734e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJ5b2thbnxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Kyoto",
      country: "Japan",
  },
  {
      title: "Lakefront Retreat in the Adirondacks",
      description: "Escape to the Adirondack Mountains for a tranquil retreat by the lake.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1515187029135-18ee286d815a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2VzJTIwYW5kJTIwY29udHJhY3RzfGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Adirondacks",
      country: "United States",
  },
  {
      title: "Seaside Villa in Santorini",
      description: "Experience the beauty of Santorini from this stunning seaside villa overlooking the Aegean Sea.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1551025580-0ee79b0bcdc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbnRvcmluZyUyMHZpbGxhfGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Santorini",
      country: "Greece",
  },
];

module.exports = {data:sampleListings};
