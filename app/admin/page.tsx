export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 sm:space-y-8">
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold">Admin Dashboard</h1>
        <div className="border rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center w-full">
              <select className="border rounded px-3 py-2 text-base sm:text-sm w-full sm:w-auto">
                <option>Base Mainnet</option>
                <option>Olym3 Mainnet Beta (Soon)</option>
                <option>Holesky</option>
                <option>Base Sepolia Testnet</option>
                <option>Olym3 Testnet Session 3</option>
              </select>
              <button type="button" className="px-4 py-2 rounded bg-primary text-white w-full sm:w-auto font-medium hover:bg-primary/90 transition-colors">Connect Wallet</button>
              <button type="button" className="px-4 py-2 rounded bg-green-600 text-white w-full sm:w-auto font-medium hover:bg-green-700 transition-colors">Google Login</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold">NFT Management</h1>
        <div className="border rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
          <div>
            <div className="text-base sm:text-sm text-gray-600">Mint REPAI NFT Admin Pass on your preferred platform.</div>
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white text-base sm:text-sm font-medium hover:bg-blue-700 transition-colors">Mint Admin NFT on Opensea</button>
              <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white text-base sm:text-sm font-medium hover:bg-blue-700 transition-colors">Mint Admin NFT on OKX</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold">Result View Management</h1>
        <div className="border rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
          <div>
            <div className="text-base sm:text-sm text-gray-600">Current result view count: <span className="font-semibold">1</span></div>
            <div className="mt-3 sm:mt-4">
              <div className="text-base sm:text-sm font-medium mb-2">Increase result view on Base:</div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                <select className="border rounded px-3 py-2 text-base sm:text-sm w-full sm:w-auto">
                  <option>1 view - 5 USDC</option>
                  <option>3 views - 12 USDC</option>
                  <option>5 views - 20 USDC</option>
                  <option>10 views - 40 USDC</option>
                  <option>50 views - 200 USDC</option>
                </select>
                <button type="button" className="px-4 py-2 rounded bg-green-600 text-white w-full sm:w-auto font-medium hover:bg-green-700 transition-colors">Increase</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


