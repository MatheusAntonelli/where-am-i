import { divIcon } from 'leaflet';
import React, { useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet';
import './LeafletMap.css'


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
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
