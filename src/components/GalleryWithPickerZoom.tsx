import React, { useState, useRef, useEffect } from "react";
import ImageZoom from "react-image-zooom";
import "./GalleryWithPickerZoom.css";

interface GalleryWithPickerZoomProps {
  images: string[];
  mainImage: string; // Accept the main image as a prop
}

const GalleryWithPickerZoom: React.FC<GalleryWithPickerZoomProps> = ({ images, mainImage }) => {
  const [galleryImage, setGalleryImage] = useState(mainImage);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Handle click outside of the gallery to reset to mainImage
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(event.target as Node)) {
        setGalleryImage(mainImage);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mainImage]);

  const handleClick = (url: string) => {
    setGalleryImage(url);
  };

  return (
    <div className="gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <img
          key={index}
          className={`img${index + 1}`}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => handleClick(image)}
        />
      ))}
      <ImageZoom className="FullImageZoom" src={galleryImage} alt="Zoomed product image" zoom="250" />
    </div>
  );
};

export default GalleryWithPickerZoom;
