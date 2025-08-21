export default function HomePage() {
  return (
    <section className="space-y-6 sm:space-y-8 px-2 sm:px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Verifiable Tech Certifications</h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Explore certified projects, bootcamp achievements, and hackathon results. All data is verifiable on the Olym3 Blockchain.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href="/verify/demo" className="px-3 sm:px-4 py-2 rounded bg-primary text-white text-sm sm:text-base hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Verify Certificate</a>
            <a href="/projects" className="px-3 sm:px-4 py-2 rounded border text-sm sm:text-base hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">Browse Projects</a>
            <a href="/admin" className="px-3 sm:px-4 py-2 rounded border text-sm sm:text-base hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">Admin Page</a>
          </div>
        </div>
        <div className="border rounded-lg p-3 sm:p-4 md:p-6 mt-4 md:mt-0 bg-gray-50 shadow-sm">
          <div>
            <p className="text-sm text-gray-600">Stats</p>
          </div>
          
          <div className="mt-2 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">—</div>
              <div className="text-xs sm:text-sm text-gray-500">Projects</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">—</div>
              <div className="text-xs sm:text-sm text-gray-500">Individuals</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">—</div>
              <div className="text-xs sm:text-sm text-gray-500">NFT Certs</div>
            </div>
          </div>
          
          <div className="hidden md:block mt-4">
            <p className="text-sm text-gray-600">Processing</p>
            <div className="mt-2 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">5</div>
                <div className="text-xs sm:text-sm text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">3</div>
                <div className="text-xs sm:text-sm text-gray-500">Individuals</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">1</div>
                <div className="text-xs sm:text-sm text-gray-500">NFT Certs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-3 sm:p-4 mt-4 md:hidden bg-gray-50 shadow-sm">
          <div>
            <p className="text-sm text-gray-600">Processing</p>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">5</div>
                <div className="text-xs sm:text-sm text-gray-500">Projects</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">3</div>
                <div className="text-xs sm:text-sm text-gray-500">Individuals</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">1</div>
                <div className="text-xs sm:text-sm text-gray-500">NFT Certs</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <div className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white">
            <div className="font-medium text-sm sm:text-base">Certified Projects</div>
            <p className="text-xs sm:text-sm text-gray-600">Aijudge.olym3.xyz</p>
          </div>
          <div className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white">
            <div className="font-medium text-sm sm:text-base">Bootcamp Alumni</div>
            <p className="text-xs sm:text-sm text-gray-600">From jsabc.xyz</p>
          </div>
          <div className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow bg-white">
            <div className="font-medium text-sm sm:text-base">NFT Certificates</div>
            <p className="text-xs sm:text-sm text-gray-600">On Olym3 Blockchain</p>
          </div>
        </div>
      </div>
    </section>
  )
}


