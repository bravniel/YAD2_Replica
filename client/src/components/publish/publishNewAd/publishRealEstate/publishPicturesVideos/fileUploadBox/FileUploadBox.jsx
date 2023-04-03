import React, { useContext, useEffect, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { changeInput } from '../../../../../../actions/newAdActions';
import { NewAdContext } from '../../PublishRealEstate';
export default function FileUploadBox({
  children,
  icon,
  text,
  isDisabled = true,
}) {
      const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const [fileSrc, setFileSrc] = useState('');

  function handleChange(e) {
      const file = e.target.files[0].name;
      console.log(file);
      setFileSrc(file);
          newAdDispatch(changeInput('imageSrcName', file, 'description'));

    }
    function deleteImage() {
      setFileSrc('');
      newAdDispatch(
        changeInput(
          'imageSrcName',
          'feed_re_placeholder_small.png',
          'description'
        )
      );
    }
    useEffect(() => {
     newAdDispatch(
       changeInput(
         'imageSrcName',
         'feed_re_placeholder_small.png',
         'description'
       )
     );
    }, []);

  return (
    <div className='file-upload'>
      {children}
      {fileSrc ? (
        <div className='image-container'>
          <img
            src={require(`../../../../../../assets/newAd/${fileSrc}`)}
            alt='uploaded'
          />
          <div className='icon-container trash' onClick={deleteImage}>
            <BsTrash />
          </div>
          <div className='icon-container rotate'>
            <GiAnticlockwiseRotation />
          </div>
        </div>
      ) : (
        <label className='add-file'>
          {icon && React.createElement(icon)}
          <input
            type='file'
            accept='C:\TALPIOT\yad2\client\src\assets\newAd\*'
            onChange={handleChange}
            disabled={isDisabled}
          />
          <span>{text}</span>
        </label>
      )}
    </div>
  );
}