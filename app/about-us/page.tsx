import Navbar from '../components/Navbar';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contenu principal - page blanche */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-medium text-black mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">Learn more about the LinkedLoom team</p>
          </div>
          <div className="bg-white min-h-96 rounded-lg">
            {/* Contenu de la page à venir */}
          </div>
        </div>
      </main>
    </div>
  );
}
