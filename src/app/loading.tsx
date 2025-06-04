export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-blue-600 animate-spin text-4xl">⏳</div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
