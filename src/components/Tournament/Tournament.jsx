import React from 'react';
import TournamentCard from '../TournamentCard/TournamentCard';
import styles from './Tournament.module.css';

const Tournament = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Турниры</h1>
      <div className={styles.container}>
        {props.tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} data={tournament}/>
        ))}
      </div>  
    </div>
  );
};

export default Tournament;