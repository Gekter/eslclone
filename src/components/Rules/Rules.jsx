import styles from "./Rules.module.css";

const Rules = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contaierColumn}>
        <div className={styles.contaierColumnBoxInner}>
          <div className={styles.rulesBody}>
            <h2>Ranking Rules</h2>
            <h2>I. Basics</h2>
            <h3>The main Ranking</h3>
            <p>
              The Main Ranking (also known as Power Ranking) shows the current
              power of each lineup that is playing together at the moment. It
              can be used for invitations and seedings.
            </p>
            <h3>How do the ranking points work?</h3>
            <p>Points will be awarded to the players.</p>
            <h3>What is "decay"?</h3>
            <p>
              Points will decay over time until they disappear after six months.
            </p>
            <h3>How many points do tournaments give?</h3>
            <p>
              Tournaments are rated by quality (TI and AAA to D), quantity (XXL
              to S) of participants and the relative size of the offline part of
              the competition, the points depend on the ratings.
            </p>
            <h2>II. Details:</h2>
            <h3>How do the ranking points work?</h3>
            <p>
              Points will be awarded to the attending players (normally 20%
              each), after the competition they come from has ended.
            </p>
            <p>
              Points are not transferable and will always stay with the player
              that earned them. No player can earn points in the same
              competition for more than one team.
            </p>
            <p>
              If the team attended an offline part of a competition, only the
              offline lineup will be considered. If the relevant lineup was
              unclear or if the team won no matches during the offline part of
              the competition, the following rules apply:
            </p>
            <ul>
              <li>
                The five players that were clearly the standard lineup at the
                end of the competition (for this team, of course lineup changes
                after their last match in the tournament have no impact) get the
                points.
              </li>
              <li>
                If no clear standard lineup is recognizable, the five players
                with the biggest participation get the points
              </li>
              <li>
                If participation is equal among players, later matches in the
                relevant part of the competition are considered more important
              </li>
            </ul>
            <p>
              The Power Ranking position of a team at any time is determined by
              the sum of the decayed points of their best five active players
            </p>
            <p>
              The points will be implemented in the ranking as soon as possible
              after the end of any tournament considered for the ranking.
            </p>
            <h3>What is "decay"?</h3>
            <p>
              Points for players will decay over time. Once per week (12:00am
              UTC on the Morning of every Monday) points „age“ and the ranking
              is updated with the decay. The date of an event is the day its
              last tournament day started on in local time. This is the
              remaining value after each end of month:
            </p>
            <ul>
              <li>0 weeks: 100%</li>
              <li>1 week: 100%</li>
              <li>..</li>
              <li>6 weeks: 100%</li>
              <li>7 weeks: 95%</li>
              <li>8 weeks: 90%</li>
              <li>..</li>
              <li>24 weeks: 10%</li>
              <li>25 weeks: 5%</li>
              <li>&gt;25 weeks: 0%</li>
            </ul>
            <h3>How many points do tournaments give?</h3>
            <p>
              Tournaments are rated by quantity (XXL, XL, L, M, S) and quality
              (TI, AAA, AA, A, B, C, D) of participants. A team is considered a
              participant, if it played in the main tournament or an online
              season (if that online season ran over an extended period of time
              and number of matches) or in an offline qualifier (if that offline
              qualifier had a significant number of non-local participants and
              was not a "BYOC" tournament).
            </p>
            <p>
              If a team does not complete a tournament, it will not be
              considered part of the tournament. If it gets replaced, the
              replacement will be considered instead.
            </p>
            <h4>1. General Requirements</h4>
            <p>
              Tournaments will be considered for the ranking, if they meet
              certain conditions:
            </p>
            <ul>
              <li>
                follow a ruleset that is in line with the basic agreed rules of
                competitive Dota 2 (i.e. 5on5 etc.) and fairplay.
              </li>
              <li>have a Size of at least "S"</li>
              <li>
                are not competitions whose main purpose is qualification to
                another competition nor tournaments that are being created with
                the main purpose to generate World Ranking points.
              </li>
            </ul>
            <h4>2. Size</h4>
            <p>
              The size of a tournament is measured in the following categories.
              You can find the point distribution of each size at the end of
              this document.
            </p>
            <ul>
              <li>XXL:</li>
              <li>
                <ul>
                  <li>A total of 22+ participants</li>
                  <li>
                    At least 16 of the top24 of the ESL Power Ranking (ranking
                    at the time the tournament starts).
                  </li>
                </ul>
              </li>
              <li>XL:</li>
              <li>
                <ul>
                  <li>A total of 14+ participants</li>
                  <li>
                    At least 10 of the top24 of the ESL Power Ranking (ranking
                    at the time the tournament starts).
                  </li>
                </ul>
              </li>
              <li>L:</li>
              <li>
                <ul>
                  <li>A total of 10+ participants</li>
                  <li>
                    At least 7 of the top24 of the ESL Power Ranking (ranking at
                    the time the tournament starts).
                  </li>
                </ul>
              </li>
              <li>M:</li>
              <li>
                <ul>
                  <li>A total of 6+ participants</li>
                  <li>
                    At least 4 of the top24 of the ESL Power Ranking (ranking at
                    the time the tournament starts).
                  </li>
                </ul>
              </li>
              <li>S:</li>
              <li>
                <ul>
                  <li>A total of 4+ participants</li>
                  <li>
                    At least 3 of the top24 of the ESL Power Ranking (ranking at
                    the time the tournament starts).
                  </li>
                </ul>
              </li>
            </ul>
            <h4>3. Quality Rating</h4>
            <p>
              The Quality Rating depends on the participating top12 teams of the
              ESL Power Ranking (ranking at the time the tournament starts):
            </p>
            <ul>
              <li>#1 +14 rating</li>
              <li>#2 +13 rating</li>
              <li>#3 +12 rating</li>
              <li>#4 +11 rating</li>
              <li>#5 +10 rating</li>
              <li>#6 +9 rating</li>
              <li>#7 +8 rating</li>
              <li>#8 +7 rating</li>
              <li>#9 +6 rating</li>
              <li>#10 +5 rating</li>
              <li>#11 +4 rating</li>
              <li>#12 +3 rating</li>
            </ul>
            <p>
              This means that the maximum number for the Quality Rating of a
              tournament is 102 (if all of the top12 ranked teams are
              participating). Possible qualities are:
            </p>
            <ul>
              <li>TI (The International): Point Multiplier is 150%</li>
              <li>AAA (79+ rating): Point Multiplier is 100%</li>
              <li>AA (62-78 rating): Point Multiplier is 80%</li>
              <li>A (46-61 rating): Point Multiplier is 60%</li>
              <li>B (32-45 rating): Point Multiplier is 40%</li>
              <li>C (15-31 rating): Point Multiplier is 25%</li>
              <li>D (0-14 rating): Point Multiplier is 15%.</li>
            </ul>
            <h4>4. Online/Offline Part</h4>
            <p>
              This additional multiplier depends on the percentage of offline
              teams in relation to the minimum number of total teams required
              for a Size (e.g. 22 for XXL, 14 for XL etc.):
            </p>
            <ul>
              <li>70-100%: Point Multiplier is 100%</li>
              <li>50-69.99%: Point Multiplier is 90%</li>
              <li>30-49.99%: Point Multiplier is 80%</li>
              <li>
                less than 30% but at least 2 teams: Point Multiplier is 70%
              </li>
              <li>Online-only: Point Multiplier is 50%</li>
            </ul>
            <h3>Tiebreakers</h3>
            <p>
              If teams in the Power Ranking are exactly tied by points at some
              point, the one that has played together in that composition for
              the longer time is ahead.
            </p>
            <p>
              If organisations in the Club Ranking are exactly tied by points at
              some point, the one that reached the better result in the most
              recently ended competition that is part of the ESL Club Ranking is
              ahead.
            </p>
            <h2>Points Distribution</h2>
            <ul>
              <li>
                If ranks are shared, the points for those ranks will be added
                and shared equally, too.
              </li>
              <li>
                Points will always be distributed to a <b>maximum</b> of teams
                as listed in the tables. If there are teams on shared ranks
                exceeding the maximum, none of those teams will get points
              </li>
              <li>
                Participants that are on the (shared) last place of a tournament
                (including online season and offline qualifiers) will not
                receive any points.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
