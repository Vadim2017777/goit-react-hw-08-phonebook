import React from 'react';

import s from './Natification.module.css';

const Notification = () => (
  <div className={s.notification}>
    <span className={s.notificationText}>Contact already exist!</span>
  </div>
);

export default Notification;
