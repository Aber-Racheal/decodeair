type MapLinkProps = {
  placeName: string
}

export default function MapLink({ placeName }: MapLinkProps) {
  const encodedName = encodeURIComponent(placeName)
  const url = `https://www.google.com/maps/search/?api=1&query=${encodedName}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      📍 View on Google Maps
    </a>
  )
}
