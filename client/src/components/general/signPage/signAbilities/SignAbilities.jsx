import React from 'react';
import alert from '../../../../assets/icons/icon_alert.svg';
import chat from '../../../../assets/icons/icon_chat.svg';
import publish from '../../../../assets/icons/icon_publish.svg';
import profile from '../../../../assets/icons/icon_profile.svg';
import AbilityIcon from './abilityIcon/AbilityIcon';

export default function SignAbilities () {
  return (
    <div className='sign-abilities'>
      <div className='title'>לקנות מהר,למכור מהר.</div>
      <div className='title'>ויש לנו אחלה כלים לזה.</div>
      <div className='sign-abilities-icon-container'>
        <AbilityIcon to={'chat'} text={'התראות'} src={alert} />
        <AbilityIcon to={'chat'} text={"צ'אט"} src={chat} />
        <AbilityIcon to={'chat'} text={'פרסום מודעה'} src={publish} />
        <AbilityIcon to={'chat'} text={'אזור אישי'} src={profile} />
      </div>
    </div>
  );
};