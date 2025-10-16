export default function Home() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">CloneChatGPT</h1>
      <p className="mb-6">This is a minimal Next.js + Tailwind CSS starter. Customize it as you like.</p>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-semibold">Example card</h2>
          <p className="text-sm text-gray-600">Use this area to build your UI.</p>
        </div>
        <a className="inline-block px-4 py-2 rounded bg-blue-600 text-white" href="#">Get started</a>
      </div>
    </section>
  )
}
