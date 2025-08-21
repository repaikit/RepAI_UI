import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

async function fetchVerification(id: string) {
  // Placeholder for server action to call Olym3 API
  if (!id) return null
  return { id, status: 'unknown' as const }
}

export default async function VerifyPage({ params }: Props) {
  const data = await fetchVerification(params.id)
  if (!data) notFound()
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Verify Certification</h1>
      <div className="border rounded-lg p-4">
        <div className="text-sm text-gray-600">ID</div>
        <div className="font-medium">{data.id}</div>
        <div className="mt-4 text-sm text-gray-600">Status</div>
        <div className="font-medium capitalize">{data.status}</div>
        <a className="mt-4 inline-block text-primary underline" href={`https://olym3.xyz/explorer/${encodeURIComponent(data.id)}`} target="_blank">Open in Explorer</a>
      </div>
    </section>
  )
}


