import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axiosInstance from '../../Utils/Api';
import './BusinessJetChapterGalary.css';

const BusinessJetChapterGalary = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get('/images/images'); // Use axiosInstance
        setImages(response.data); // Assuming response.data is an array of images
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h4 className="gallery-title">Gallery</h4>
        <h2 className="gallery-heading">Embraer P-300E Photo Gallery</h2>
      </div>

      <div className="gallery-slider-container">
        {images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="gallery-swiper"
          >
            {images.map((image) => (
              <SwiperSlide key={image._id} className="gallery-slide">
                <div className="gallery-img-sec">
                  <img src={image.url} alt="Gallery" className="gallery-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="no-images">No images available</p>
        )}
      </div>
    </section>
  );
};

export default BusinessJetChapterGalary;
