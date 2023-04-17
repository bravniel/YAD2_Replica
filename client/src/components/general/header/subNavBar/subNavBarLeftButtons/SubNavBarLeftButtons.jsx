import React from 'react';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import { TbGavel } from 'react-icons/tb';
import doron_orange from '../../../../../assets/icons/doron_orange.png';
import yadata_logo_black from '../../../../../assets/icons/yadata_logo_black.svg';
import yad1_logo from '../../../../../assets/icons/yad1_logo.svg';

export default function SubNavBarLeftButtons() {
  return (
    <div className='side-wrapper'>
      <IconedNavLink to={'realestate/2'} text={'כונס נכסים'} icon={TbGavel} />
      <IconedNavLink
        to={'realestate/3'}
        text={'דורון - העוזר האישי'}
        src={doron_orange}
      />
      <IconedNavLink
        to={'realestate/4'}
        text={'יד1 דירות חדשות'}
        src={yad1_logo}
      />
      <IconedNavLink
        to={'realestate/5'}
        text={'הערכת שווי נכס'}
        src={yadata_logo_black}
      />
    </div>
  );
}
