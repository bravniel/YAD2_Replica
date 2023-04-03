import React, { useState } from 'react';
import {
  assetAttributes,
  assetProps,
} from '../../../../../../utils/realEstate';
import DescriptionContainer from './descriptionContainer/DescriptionContainer';
import { FiLink2 } from 'react-icons/fi'; // Link
import {
  AiOutlineWhatsApp,
  AiOutlinePrinter,
  AiOutlineMail,
} from 'react-icons/ai'; // Whats app , Print , Mail
import { CgTab } from 'react-icons/cg'; // Tab
import AdFooter from './adFooter/AdFooter';
import SellerDetails from '../sellerDetails/SellerDetails';

const AssetInfo = ({ asset }) => {
  const mistGray = '#b6b6b6';
  return (
    <div className='asset-info'>
      <div className='right-advertisements-container'></div>
      <div className='asset-info-container'>
        <span className='asset-info-title'>תיאור הנכנס</span>
        {asset.assetDescription && (
          <DescriptionContainer descriptionText={asset.assetDescription} />
        )}
        <div className='asset-props-container'>
          {assetProps.map((item, index) => {
            return asset[item.type] ? (
              <div key={index} className='asset-prop'>
                <span className='asset-prop-label'>{item.label}</span>
                <span className='asset-prop-item'>{asset[item.type]}</span>
              </div>
            ) : null;
          })}
        </div>
        <span className='asset-info-title'>מה יש בנכס?</span>
        <div className='asset-atributes-container'>
          {assetAttributes.map((item, index) => {
            return (
              <div
                className='asset-atribute'
                key={index}
                style={asset[item.name] ? {} : { color: mistGray }}>
                {item.icon &&
                  React.createElement(item.icon, {
                    className: 'attribute-icon',
                  })}
                {item.text}
              </div>
            );
          })}
        </div>
        {asset.furnitureDescription && (
          <span className='asset-info-title'>פירוט ריהוט</span>
        )}
        {asset.furnitureDescription && (
          <DescriptionContainer descriptionText={asset.furnitureDescription} />
        )}
      </div>
      <SellerDetails asset={asset} />
    </div>
  );
};

export default AssetInfo;
