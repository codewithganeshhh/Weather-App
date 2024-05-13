import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props => {
    const { lat, lon } = props
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: lat, lng: lon }} >
        <Marker position={{ lat: lat, lng: lon }} />
      </GoogleMap>
    )
}));

export default MapWithAMarker;