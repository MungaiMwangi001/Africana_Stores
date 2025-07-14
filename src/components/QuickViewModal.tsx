import React from 'react';
import Image from 'next/image';

interface QuickViewModalProps {
  imageSrc: string;
  name: string;
  images: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
  onClose: () => void;
  category: string;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ imageSrc, name, images, mainImage, setMainImage, onClose, category }) => {
  // Helper to build the correct image path
  const getImagePath = (img: string) => img.startsWith('/') ? img : `/products/${category}/${img}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-primary-white dark:bg-background-dark rounded-xl shadow-soft p-6 max-w-md w-full relative" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Quick view of ${name}`}> 
        <button className="absolute top-2 right-2 text-primary-brown hover:text-primary-red" onClick={onClose} aria-label="Close quick view">
          &times;
        </button>
        <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-4 mx-auto flex items-center justify-center">
          <Image src={getImagePath(mainImage)} alt={name} fill className="object-cover rounded-lg" sizes="400px" loading="eager" />
        </div>
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setMainImage(img)}
                className={`w-14 h-14 relative rounded-lg border-2 ${mainImage.endsWith(img) ? 'border-primary-green' : 'border-transparent'} overflow-hidden focus:outline-none`}
                aria-label={`Show image ${img}`}
              >
                <Image
                  src={getImagePath(img)}
                  alt={img}
                  fill
                  className="object-cover rounded-lg"
                  sizes="56px"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
        <h3 className="font-heading text-xl mb-2 text-primary-brown text-center">{name}</h3>
        {/* Add more gallery/description here later */}
      </div>
    </div>
  );
};

export default QuickViewModal; 