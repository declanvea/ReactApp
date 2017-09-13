import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes.js';

export default class EarthquakeList extends Component {
  render() {
    return(
      <div className="quake-list">
        <div className="row">
          {earthquakes.features.map(quakes =>
            <div className="col-sm-6" key={quakes.id}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{quakes.properties.place}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quakes.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quakes.properties.time).format('llll')}</h6>
                  <p className="card-text">Coordinates: {quakes.geometry.coordinates}</p>
                  <a href={quakes.properties.url} className="card-link">USGS Event Link</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
