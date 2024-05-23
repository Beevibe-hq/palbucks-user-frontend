import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import '../styles.css'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

/* import ReactSlider from 'react-slider' */

import { getOrientation } from 'get-orientation/browser';
//import ImgDialog from '../ImgDialog';
import { getCroppedImg, getRotatedImage } from '../canvasUtils';
import { uploadicon } from '../../../images';
import { useMediaQuery } from 'react-responsive';

const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
};

export function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

const Demo = ({ formdata, setformdata }) => {

  const [fileName, setFileName] = useState(null)
  
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);

      // Convert the image URL to a file   
      console.log(fileName)   
      const convertedImage = await urltoFile(croppedImage, fileName);
      //const convertedImage2 = await urltoFile(croppedImage, 'image.jpg');
      setformdata((previousdata) => ({
        ...previousdata,
        banner: convertedImage,
      }));
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onFileChange = async (e) => {

    // Clear the previous image data
    setImageSrc(null);
    setCroppedImage(null);
    setformdata((previousdata) => ({
      ...previousdata,
      banner: null,
    }));

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name)
      let imageDataUrl = await readFile(file);
  
      try {
        // Apply rotation if needed
        const orientation = await getOrientation(file);
        const rotation = ORIENTATION_TO_ANGLE[orientation];
        if (rotation) {
          imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
        }
      } catch (e) {
        console.warn('Failed to detect the orientation');
      }
  
      setImageSrc(imageDataUrl);      
    }
  };

  const isMobile = useMediaQuery({
      query:'(max-width:768px)'
  })
  

  return (
    <div className= {` ${croppedImage ? '': 'bg-[#F9F9F9] w-full'} `} >
      {imageSrc ? (
        <React.Fragment>
          {croppedImage ? (
            <div className="w-full md:w-[550px] mx-auto mt-5 ">
              <label htmlFor="campaignimage">
                <img src={croppedImage} alt="Cropped" className="mx-auto w-full border-[2px] border-[#37BCF7] cursor-pointer" />
              </label>
            </div>
          ) :(
            <div className={ `cropContainer` }>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect= {isMobile ? 6 / 6 : 6 /4} 
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          
          )
          }
          {/* <div className={ `cropContainer` }>
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={6 / 3}              
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div> */}
          <div className={`controls`}>
            <div className={` ${croppedImage ? 'hidden' : 'mb-2 flex flex-col sm:flex-row gap-2 justify-between' } `}>
              <div className={`sliderContainer`}>
                  <label className={`sliderLabel`}>
                    Zoom
                  </label>
                  <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(value) => setZoom(value)}
                    className="slider"
                    disabled = {!true}
                  />                
              </div>
              <div className={`sliderContainer`}>
                  <label className={`sliderLabel`}>
                    Rotation
                  </label>
                  <Slider
                    value={rotation}
                    min={0}
                    max={360}
                    step={1}
                    onChange={(value) => setRotation(value)}
                    className = {'slider'}

                  />                  

                
              </div>
            </div>
            <div /* className="flex flex-col sm:flex-row items-center gap-[70px]" */ className={`flex items-center justify-center`} >
              {croppedImage ? null: 
                  <button
                    className="bg-[#37BCF7] w-3/4 px-4 py-2 text-white font-semibold shrink-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2)] rounded hover:bg-[#0baef4]"
                    onClick={showCroppedImage}
                  >
                    Apply
                  </button>
              }

              <div className="hidden">
                <label htmlFor="campaignimage" className={`cursor-pointer bg-[#37BCF7] px-4 py-[10px] text-white font-semibold shrink-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2)] rounded hover:bg-[#0baef4]`}>
                  <span className="">Change Image</span>
                </label>
                <input type="file" onChange={onFileChange} accept="image/*" className="hidden" id="campaignimage" />
              </div>

              {/* <button
                onClick={() => {
                  setImageSrc(null);
                  setCroppedImage(null);
                  setformdata((previousdata) => ({
                    ...previousdata,
                    banner: null,
                  }));
                }}
                className="bg-[#37BCF7] px-4 py-2 text-white font-semibold shrink-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2)] rounded hover:bg-[#0baef4]"
              >
                Remove Image
              </button> */}
            </div>
          </div>
          {/* {croppedImage ? (
            <div className="w-[550px] mx-auto my-5 ">
              <img src={croppedImage} alt="Cropped" className="mx-auto w-full " />
            </div>
          ) : null
          } */}
        </React.Fragment>
      ) : (
        <div className={`w-full fold:h-[150px] phones:h-[200px] md:h-[240px] flex justify-center items-center mb-5`}>
          <label htmlFor="campaignimage" className={`cursor-pointer`}>
            <img src={uploadicon} alt="upload icon" className="w-9 h-11" />
          </label>
          <input type="file" onChange={onFileChange} accept="image/*" className="hidden" id="campaignimage" />
        </div>
      )}
    </div>
  );
};





export function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default Demo;
