import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { getOrientation } from 'get-orientation/browser'
import ImgDialog from '../ImgDialog'
import { getCroppedImg, getRotatedImage } from '../canvasUtils'
import { styles } from '../styles'

import { uploadicon } from '../../../images'

const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
}

export function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}


const Demo = ({ classes, formdata, setformdata }) => {
  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
      
      //convert the imageurl to a file
      const convertedImage = await urltoFile(croppedImage, 'image.jpg')
      setformdata((previousdata) => ({
        ...previousdata,
        pic:convertedImage
      }))
      //console.log(convertedImage)
      
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation])

  /* 
  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])
 */
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      try {
        // apply rotation if needed
        const orientation = await getOrientation(file)
        const rotation = ORIENTATION_TO_ANGLE[orientation]
        if (rotation) {
          imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        }
      } catch (e) {
        console.warn('failed to detect the orientation')
      }

      setImageSrc(imageDataUrl)      
    }
  }
  

  return (
    <div>
      {imageSrc ? (
        <React.Fragment>
          <div className={classes.cropContainer}>
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
          </div>
          <div className={classes.controls}>
            <div className="flex flex-col sm:flex-row  justify-between ">
              <div className={classes.sliderContainer}>
                <Typography
                  variant="overline"
                  classes={{ root: classes.sliderLabel }}
                >
                  Zoom
                </Typography>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  classes={{ root: classes.slider }}
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
              <div className={classes.sliderContainer}>
                <Typography
                  variant="overline"
                  classes={{ root: classes.sliderLabel }}
                >
                  Rotation
                </Typography>
                <Slider
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  aria-labelledby="Rotation"
                  classes={{ root: classes.slider }}
                  onChange={(e, rotation) => setRotation(rotation)}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[70px]">
              <button className= "bg-[#37BCF7] px-4 py-2 text-white font-semibold shrink-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2)] rounded hover:bg-blue-900 "
              onClick={showCroppedImage}
              >
                Show Result
              </button>
              
              <div className="">
                <label htmlFor="campaignimage" className={`cursor-pointer bg-[#37BCF7] px-4 py-[10px] text-white font-semibold shrink-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2)] rounded
                hover:bg-blue-900
                `} >
                  <span className= "" >
                    Change Image
                  </span>    
                </label>
                <input type="file" onChange={onFileChange} accept="image/*" className='hidden' id='campaignimage' />            
              </div>

              <Button
              onClick={
                ()=>{
                  setImageSrc(null)
                  setCroppedImage(null)
                }
              }
              variant='contained'
              color='primary'
              classes={{ root: classes.cropButton }}
              >
                Remove Image
              </Button>
            </div>
          </div>
          {
            croppedImage ? (
              <div className="w-[600px] mx-auto my-5 ">
                <img src={croppedImage} alt="Cropped" className='mx-auto' />
              </div>
            ):(
              null
            )
          }
        </React.Fragment>
      ) : (
        
        <div className={`   w-[837px] h-[240px] flex justify-center items-center mb-5 `} >
            <label htmlFor="campaignimage" className={`cursor-pointer`} >
                <img src={uploadicon} alt="upload icon" className="w-9 h-11" />
            </label>
            <input type="file" onChange={onFileChange} accept="image/*" className='hidden' id='campaignimage' />            
        </div>
      )}
    </div>
  )
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

const StyledDemo = withStyles(styles)(Demo)

export default StyledDemo