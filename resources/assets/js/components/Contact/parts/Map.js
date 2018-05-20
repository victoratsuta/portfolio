import React, {Component} from 'react';
import { Map, TileLayer, Marker} from 'react-leaflet'
import Constants from '../../../constants/constants'

const coordinates = {
    lat: 55.751830,
    lng: 37.589837,
    zoom: 11,
}

class MapLeaflet extends Component {

    render() {

        const position = [coordinates.lat, coordinates.lng]
        const Icon = L.icon({
            iconUrl: '../imgs/location-pin.png',
            shadowUrl: '',

            iconSize: [38, 38], // size of the icon
            iconAnchor: [19, 38], // point of the icon which will correspond to marker's location

        });


        return (

            <Map center={position} zoomControl={false} className="map-container" id='mapid' zoom={coordinates.zoom}>
                <TileLayer
                    url = {Constants.mapUrl + Constants.accessToken}
                />
                <Marker position={position} icon={Icon}>
                </Marker>
            </Map>
        )
    }

}

export default MapLeaflet;
