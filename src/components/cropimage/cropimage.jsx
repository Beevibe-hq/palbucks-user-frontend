import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function CropImage() {
  const [croppedImage, setCroppedImage] = useState(null);
  const [formdata, setFormdata] = useState({
    pic: null,
    title: '',
    description: '',
  });

  const cropperRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && cropperRef.current) {
        event.preventDefault();
        alert()
        const croppedImageUrl = cropperRef.current.getCroppedCanvas().toDataURL();
        setCroppedImage(croppedImageUrl);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormdata((prevFormData) => ({
        ...prevFormData,
        pic: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = () => {
    const croppedImageUrl = cropperRef.current.getCroppedCanvas().toDataURL();
    setCroppedImage(croppedImageUrl);
  };

  return (
    <div>
      <div>
        <label htmlFor="campaignimage">Select Image:</label>
        <input
          type="file"
          name="campaignimage"
          id="campaignimage"
          accept="image/png, image/jpeg, image/jpg, image/svg+xml"
          onChange={handleImageSelect}
        />
      </div>
      {formdata.pic && (
        <Cropper
          ref={cropperRef}
          src={formdata.pic}
          style={{ height: 400, width: '100%' }}
          aspectRatio={16 / 9}
          guides={true}
          crop={handleCropComplete}
        />
      )}
      {croppedImage && (
        <div>
          <h3>Cropped Image:</h3>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
}

export default CropImage;
