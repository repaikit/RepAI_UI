export default function IndividualsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Individuals</h1>
          <p className="text-gray-600">Directory of participant profiles and achievements.</p>
        </div>
        <input placeholder="Search people" className="border rounded px-3 py-2 text-sm w-full sm:w-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[1,2,3].map((id) => (
          <div key={id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="font-medium">User {id}</div>
            <p className="text-sm text-gray-600 mt-1">Bootcamps: —, Hackathons: —</p>
            <div className="mt-3 text-sm">
              NFTs Owned: —
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


