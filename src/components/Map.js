import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Credential from "../credential";

const containerStyle = {
    width: '650px',
    height: '650px'
};

const center = {
    lat: -34.56697296066992,
    lng: -58.45798661765905
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${Credential.mapsKey}`
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback() {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)
