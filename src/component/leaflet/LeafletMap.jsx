import React, { useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet';
import './LeafletMap.css'

/**
 * TODO
 *  Add a few more tile layers
 *  Try to improve acurracy of geolacation
 *  Show the Latitude and Longitude for users
 *  ...
 */

function LocationMarker() {
    const [position, setPosition] = useState(null)
  const map = useMapEvent({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


function LeafletMap() {

    return (
      <div className='position'>
      <MapContainer center={[-24.8641, -54.3302]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          id= ''
        />
            <Marker position={[-24.8641, -54.3302]}>
                <Popup>
                    I was made here. <br /> Enjoy it!.
                </Popup>
            </Marker>
            <LocationMarker/>
        </MapContainer>
      </div>

    )
}

export default LeafletMap
