import Image from 'next/image'

export default function NftCertificatesPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">NFT Certificates</h1>
          <p className="text-gray-600">Verifiable certificates minted on Olym3 Blockchain.</p>
        </div>
        <input placeholder="Search certificates" className="border rounded px-3 py-2 text-sm w-full sm:w-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[1,2,3].map((id) => (
          <div key={id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="font-medium">Certificate #{id}</div>
            <div className="mt-3 mb-2 flex justify-center">
              <div className="relative w-16 h-16 shrink-0">
                <Image 
                  src="/certificate-icon.jpg" 
                  alt="Certificate Icon" 
                  fill 
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Type: —</p>
            <div className="mt-3 text-sm">
              <a className="text-primary underline" href="https://olym3.xyz" target="_blank">Verify on Blockchain</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


