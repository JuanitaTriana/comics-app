import React, { Component } from 'react'
import axios from 'axios'
import './ComicList.css';
import ComicDetails from './ComicDetails.js'

class ComicList extends Component {
    state = {
        comics: [],
        activeComic: null,
        activeUrl: "",
        comic: {}
    }
    componentDidMount() {
        axios.get(`https://comicvine.gamespot.com/api/issues/?api_key=40f84f1bbf803bd79830d2ccca2946674c5eb847&format=json`)
          .then(res => {
            const comics = res.data.results
            this.setState({ comics });
          })
      }

      async openDetails(id, url) {
        console.log(url);
        await axios.get(url + '?api_key=40f84f1bbf803bd79830d2ccca2946674c5eb847&format=json')
        .then(res => {
          const comic = res.data.results
          this.setState({ comic });
        })
        this.setState({ activeComic: id, activeUrl: url})
        
      }
    
      render() {
        return (
          <div className="list-container">
            {this.state.activeComic !== null ? <div className="details"><ComicDetails comic={this.state.comic} /></div>: <div></div>}
            <div className={this.state.activeComic !== null ? "list w70" : "list"}>
              {this.state.comics.map(comic => {
                return(
                  <div className="list-element" key={comic.id} onClick={() => this.openDetails(comic.id, comic.api_detail_url)}>
                    <img className="comicIcon"  src={comic.image.original_url } alt=""></img>
                    <div className="comic-name">{comic.name + comic.issue_number}</div>
                    <div className="comic-date">{'added on: '+ comic.date_added.substring(0, comic.date_added.length - 8 )}</div>
                  </div>
                  )
              }
              )}
            </div>
          </div>
        )
      }      
}

export default ComicList;
