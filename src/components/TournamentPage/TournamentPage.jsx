import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TournamentPage.module.css";

const TournamentPage = (props) => {
  const { id } = useParams()
  const [data, setData] = useState()
  


  useEffect(() => {
    fetch(`https://cdn1.api.esl.tv/dota2/worldranking/event/view?id=${id}`)
    .then(res => res.json())
    .then(data => setData(data.items[0]))
  }, [id])

  


  if (!data) {
    return <div></div>
  }
  return (
    
    <div className={styles.page}>
      <div className={styles.containerRow}>
        <div className={styles.containerColumn}>
          <div className={styles.container}>
            <h2>{data.name}</h2>
            <div className={styles.info}>
              <div className={styles.w50}>
                <div>
                  {data.begin + ' - ' + data.end + ' | '}<a rel="noreferrer" href={data.homepage} target="_blank">liquipedia</a>
                </div>
                <div>
                  {'Организатор: '}<a rel="noreferrer" href={'https://' + data.organizer.url} target='_blank'>{data.organizer.name}</a>
                </div>
              </div>
              <div className={[styles.w50, styles.ta_r].join(' ')}>
                <div>{'Множитель качества турнира (' + data.qualityname + '): ' + data.qualitymultiplier + 'x'}</div>
                <div>{'Онлайн/Офлайн множитель: ' + data.offlinemultiplier + 'x'}</div>
                <div>{'Текущий временной множитель турнира: ' + data.age_multiplier_power + 'x'}</div>
              </div>
            </div>
            <div>
              {data.teamsresults.map((teamRes) => (
                <div key={teamRes.id} className={styles.resRow}>
                  <div className={styles.place}>
                    <span>{teamRes.rank + "."}</span>
                  </div>
                  <div className={styles.team}>
                    <div className={styles.teamLogo}>
                      <img src={teamRes.team.logo} alt="" />
                    </div>
                    <div className={styles.teamName}>
                      <span>{teamRes.team.name}</span>
                    </div>
                    <div className={styles.players}>
                      {teamRes.playersinfo.map((playerinfo) => (
                        <span key={playerinfo.id} className={styles.player}>
                          {playerinfo.player.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.points}>
                    <span className={styles.number}>
                      {teamRes.points}
                      <span className={styles.subPoints}>{" pts"}</span>
                    </span>
                  </div>
                  <div className={styles.points}>
                    <span className={styles.number}>
                      {"(+" + (teamRes.points * data.age_multiplier_power).toFixed(1)}
                      <span className={styles.subPoints}>{" pts"}</span>
                      {")"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
