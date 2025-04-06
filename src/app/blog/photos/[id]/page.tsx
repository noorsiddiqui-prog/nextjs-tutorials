import photos from '@/public/photos/photos'
import Photo from '@/components/Photo'

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === id)

  if (!photo) {
    return <div>Photo not found</div>
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Photo photo={photo} />
      </div>
    </div>
  )
}