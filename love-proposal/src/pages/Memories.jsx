import { motion } from 'framer-motion'
import { useState } from 'react'
import { assests } from '../assets/assets'

const photos = [
  { id: 1, src: assests.dummyPic, caption: 'Our first hangout' },
  { id: 2, src: 'https://example.com/photo2.jpg', caption: 'That funny selfie we took' },
  { id: 3, src: 'https://example.com/photo3.jpg', caption: 'Movie night' },
  { id: 4, src: 'https://example.com/photo4.jpg', caption: 'Your birthday' },
  { id: 5, src: 'https://example.com/photo5.jpg', caption: 'Day at the park' },
  { id: 6, src: 'https://example.com/photo6.jpg', caption: 'Coffee date' },
]

export default function Memories() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#BE185D] text-center mb-12 font-[serif]"
      >
        Our Special Moments
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-white text-xl">{photo.caption}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedPhoto && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.caption} 
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl">
              {selectedPhoto.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}