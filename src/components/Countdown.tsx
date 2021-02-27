import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengsContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);

  const [minutLeft, minutRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutLeft}</span>
          <span>{minutRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          type="button" 
          className={styles.countdownButton}
          onClick={resetCountdown}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
        { isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar ciclo
          </button>
        ) : (
          <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>
        ) }
        </>
      ) }

      


    </div>
  );
}