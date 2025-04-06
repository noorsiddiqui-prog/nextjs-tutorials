import photos from '@/public/photos/photos'
import Modal from '@/components/Modal'
import Photo from '@/components/Photo'
import { notFound } from 'next/navigation';

export default function PhotoModalDefault({ params: { id: photoId } }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === photoId)
  console.log('PhotoModal rendered for photo ID:', photoId);
  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  )
}