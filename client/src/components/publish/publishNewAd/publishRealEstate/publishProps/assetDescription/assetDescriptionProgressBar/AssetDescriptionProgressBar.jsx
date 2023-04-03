import React, { useEffect, useState } from 'react';

export default function AssetDescriptionProgressBar({ length }) {
  const [progressBarColor, setProgressBarColor] = useState('#F14913');
  const [progressBarWidth, setProgressBarWidth] = useState('20%');
  const [progressBarComment, setProgressBarComment] = useState(
    'ממליצים לך בחום להוסיף תיאור'
  );
  const handleOnChange = () => {
    switch (true) {
      case length === 0:
        setProgressBarComment('ממליצים לך בחום להוסיף תיאור');
        break;
      case length > 0 && length <= 30:
        setProgressBarComment('מרגיש לנו שהטקסט שכתבת קצר מידי');
        setProgressBarColor('#F14913');
        break;
      case length > 30 && length <= 60:
        setProgressBarComment('יופי, המודעה הולכת לכיוון נכון');
        setProgressBarColor('#F19E13');

        break;
      case length > 60 && length <= 100:
        setProgressBarComment('עוד ממש קצת וזה שם');
        setProgressBarColor('#FBAF00');

        break;
      case length > 100 && length <= 130:
        setProgressBarComment('אוטוטו');
        setProgressBarColor('#CCD948');

        break;
      case length > 130:
        setProgressBarComment('בול');
        setProgressBarColor('#43C770');

        break;
      default:
        break;
    }
  };
  useEffect(() => {
    handleOnChange();
    setProgressBarWidth((length / 150) * 100 + '%');
  }, [length]);
  return (
    <div id='asset-description-progress-bar'>
      <div
        id='percentage'
        style={{ width: progressBarWidth, background: progressBarColor }}></div>
      <div id='progress-bar-text'>{progressBarComment}</div>
    </div>
  );
}
