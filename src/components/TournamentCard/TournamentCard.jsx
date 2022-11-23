import './TournamentCard.css';

const TournamentCard = (props) => {
  return (
    <div className='tournament-card'>
      <div className='tournament-card__inner-card-block inner-card-block'>
        <div className='inner-card-block__card-header card-header'>
          <div className='card-header__tournament-date tournament-date'>
            <span>
              {/* date */}
            </span>
          </div>
          <h3>
            {/* quality */}
          </h3>
          <div>
            <h2>
              {/* TournamentName */}
              </h2>
            <div>
              {/* fantas icon */}
            </div>
            <div>
              {/* tournament size */}
            </div>
          </div>
        </div>
        {/* x times */}
        <div className='inner-card-block__team-list team-list'>
          <div className='team-list__team-card-row team-card-row'>
            <div className='team-card-row__team-card-row-place team-card-row-place'>
              <span>
                {/* place */}
              </span>
            </div>
            <div className='team-card-row__team-card-row-team team-card-row-team'>
              <span>
                {/* teamName */}
              </span>
            </div>
            <div className='team-card-row__team-card-row-points team-card-row-points'>
              +
              <span>
                {/* points */}
                <span>
                  {/* subs */}
                </span>
              </span>
            </div>

          </div>
        </div>


        <div className='tournament-card__view-full-button view-full-button'>
          {/* <Link /> */}
        </div>

      </div>
    </div>
  );
}

export default TournamentCard;