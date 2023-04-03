import React, { useContext, useEffect, useReducer, useState } from 'react';
import AssetAd from './assetAd/AssetAd';

export default function AssetsList({ realEstates }) {
  return (
    <div className='assets-list'>
      {realEstates.map((asset) => (
        <AssetAd key={asset.propertyId} asset={asset} />
      ))}
    </div>
  );
}
