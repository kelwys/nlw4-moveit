import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengsContext';
import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  
  return (
    <div className={styles.completedChalengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}