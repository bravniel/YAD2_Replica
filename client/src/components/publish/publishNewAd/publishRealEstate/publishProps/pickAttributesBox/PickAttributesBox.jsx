import React from 'react';
import { assetAttributes } from '../../../../../../utils/realEstate';
import ToggleAttributeButton from './toggleAttributeButton/ToggleAttributeButton';

export default function PickAttributesBox({ shouldInputShow }) {
  return (
    <div className='pick-attribute-box'>
      <span>מאפייני הנכס</span>
      <div className='pick-attribute-box-container'>
        {assetAttributes.map((item, index) => {
          return item.shouldInputShow ? (
            shouldInputShow() && (
              <ToggleAttributeButton
                key={index}
                name={item.name}
                text={item.text}
                icon={item.icon}
              />
            )
          ) : (
            <ToggleAttributeButton
              key={index}
              name={item.name}
              text={item.text}
              icon={item.icon}
            />
          );
        })}
        {/* {shouldInputShow() && (
          <ToggleAttributeButton name={'hasAC'} text={'מיזוג'} icon={IoSnow} />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasMamad'}
            text={'ממ"ד'}
            icon={BiCube}
          />
        )}
        <ToggleAttributeButton
          name={'hasWarehouse'}
          text={'מחסן'}
          icon={BiBox}
        />
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasFurniture'}
            text={'ריהוט'}
            icon={BiCabinet}
          />
        )}
        <ToggleAttributeButton
          name={'hasDisabilityAccess'}
          text={'גישה לנכים'}
          icon={GrWheelchair}
        />
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasElevator'}
            text={'מעלית'}
            icon={TbElevator}
          />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasTadiran'}
            text={'מזגן תדיראן'}
            icon={IoSnow}
          />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'isRenovated'}
            text={'משופצת'}
            icon={AiOutlineFormatPainter}
          />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasKosherKitchen'}
            text={'מטבח כשר'}
            icon={GiKitchenTap}
          />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasSunHeatedWaterTank'}
            text={'דוד שמש'}
            icon={GiSolarPower}
          />
        )}
        {shouldInputShow() && (
          <ToggleAttributeButton
            name={'hasBars'}
            text={'סורגים'}
            icon={MdGridOn}
          />
        )} */}
      </div>
    </div>
  );
}
