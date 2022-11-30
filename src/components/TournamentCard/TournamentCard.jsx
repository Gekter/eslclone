import styles from './TournamentCard.module.css';
import { Link } from "react-router-dom";

const TournamentCard = (props) => {

  return (
    <div className={styles.tournamentCard}>
      <div className={styles.innerCardBlock}>
        <div className={styles.cardHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.tournamentDate}>
              <span>
                {props.data.date}
              </span>
            </div>
            <Link className={styles.tournamentName}>
              {props.data.TournamentName/* TournamentName */}
            </Link>
          </div>
          
          <div className={styles.tournamentQuality}>
            <div className={styles.tournamentQuality__innerBlock}>
              <h2 className={styles.tournamentQuality__name}>
                {props.data.quality/* quality */}
              </h2>
              <div className={styles.tournamentSize}>

                {props.data.tournamentSize/* tournament size */}
              </div>
            </div>
            
          </div>
        </div>
        
        <div>
          {props.data.teams.map((team) => (
            <div className={styles.teamCardRow} key={team.id}>
              <div className={styles.teamCardRow__place}>
                <span className={styles.place__span}>
                  {team.place}
                </span>
              </div>
              <div className={styles.teamCardRow__team}>
                <span className={styles.team__name}>
                  {team.name}
                </span>
              </div>
              <div className={styles.teamCardRow__points}>
                +
                <span className={styles.points__pts}>
                  {team.pts}
                  <span className={styles.points__sub}>
                    {' pts'/* subs */}
                  </span>
                </span>
              </div>

            </div>
          ))}
          {/* x times */}
          
        </div>


        <div>
          <Link className={styles.teamCardRow__button}>Full Results</Link>
          {/* <Link /> */}
        </div>

      </div>
    </div>
  );
}

export default TournamentCard;