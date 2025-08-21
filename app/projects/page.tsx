import Link from 'next/link'
import Image from 'next/image'

export default async function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-gray-600">Certified projects with scores and verification links.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input placeholder="Search projects" className="border rounded px-3 py-2 text-sm w-full" />
          <select className="border rounded px-3 py-2 text-sm w-full sm:w-auto">
            <option>All</option>
            <option>Hackathon</option>
            <option>Bootcamp</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[1,2,3].map((id) => (
          <div key={id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-medium">Project #{id}</h3>
              <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">Verified</span>
            </div>
            <div className="mt-3 mb-2 flex justify-center">
              <div className="relative w-16 h-16 shrink-0">
                <Image 
                  src="/project-icon.jpg" 
                  alt="Project Icon" 
                  fill 
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Score from aijudge:  —</p>
            <div className="mt-3 flex flex-col xs:flex-row gap-2 text-sm">
              <div className="flex gap-3">
                <Link className="text-primary underline" href={`/verify/${id}`}>Verify</Link>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex gap-3">
                <a className="text-sm underline" href="https://olym3.xyz" target="_blank">Explorer</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


