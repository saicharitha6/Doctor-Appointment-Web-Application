import React from 'react';
import styles from './chat.module.css';


const Chat = () => {
  return (
    <div className={styles['dummy-chat']}>
      <h1>Patient Chat</h1>
      <div className={styles['profile']}>
        <div className={styles['image-section']}>
          <img src='https://cdn-icons-png.flaticon.com/512/3304/3304567.png' className={styles['image']}></img>
          <p className={styles['DName']}>Dr. Lavangi</p>
        </div>
        <div className={styles['details']}>
          <p>Gynacologist</p>
          <p>15 yrs Old</p>
          <p>Gold Medalist</p>
        </div>
      </div>
      <div className={styles['issue']}>
      <p className={styles['chat-text']}>Meena,Female,Stomach Pain</p>
      {/* <img src='./chat.pngs' className={styles['chaat-img']} alt='Hello'></img> */}
      </div>
      {/* <img src='./chat2.pngs' className={styles['chat-img-2']}></img> */}
      <div className={styles['info']}>
      <p >I'm sorry to hear you're not feeling well.Here are some immediate things you can try:</p>
      <br />
      <p>1. Place a warm compress or heating pad on your stomach</p>
      <p>2. Place a warm compress or heating pad on your stomach</p>
      <p>3. Place a warm compress or heating pad on your stomach</p>
      <p>4. Place a warm compress or heating pad on your stomach</p>
      </div>
        {/* <div className="message">
          <div className="message-sender">User</div>
          <div className="message-text">Hello, how can I help you?</div>
        </div>
        <div className="message">
          <div className="message-sender">Doctor</div>
          <div className="message-text">Hello, this is your doctor.</div>
        </div>
        <div className="message">
          <div className="message-sender">User</div>
          <div className="message-text">I have a question about my prescription.</div>
        </div>
        <div className="message">
          <div className="message-sender">Doctor</div>
          <div className="message-text">Sure, please go ahead and ask your question.</div>
        </div> */}
    </div>
  );
}

export default Chat;
