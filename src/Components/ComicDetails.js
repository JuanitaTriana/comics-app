import React, { Component } from 'react'
import './ComicDetails.css';

class ComicDetails extends Component{
      render() {
        return (
          <div className="details">
              <img className="details-image"  src={this.props.comic.image.original_url } alt=""></img>
              <div> Characters:
                {this.props.comic.character_credits.map(character => {
                    return <div key={character.id} className="comic-character">{character.name}</div>
                  })
                }
              </div>
              <div> Team:
                {this.props.comic.team_credits.map(team => {
                    return <div key={team.id} className="comic-character">{team.name}</div>
                  })
                }
              </div>
              <div>Locations:
                {this.props.comic.location_credits.map(team => {
                    return <div key={team.id} className="comic-character">{team.name}</div>
                  })
                }
              </div>
              {/* <div className="comic-location">{this.state.comic.location_credits}</div> */}
          </div>
        )
      }
}

export default ComicDetails;
