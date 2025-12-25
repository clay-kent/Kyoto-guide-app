import { Spot } from '@/types/spot';
import { cssInterop } from 'nativewind';
import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useAudioPlayback } from '../hooks/useAudioPlayback';
import { useLocation } from '../hooks/useLocation';

interface MapViewComponentProps {
  spots: Spot[];
  distanceThreshold?: number;
  googleMap?: boolean;
}

export default function MapViewComponent({ spots, distanceThreshold = 50, googleMap = false }: MapViewComponentProps) {
  const { currentLocation, region, setRegion } = useLocation();
  useAudioPlayback(currentLocation, spots, distanceThreshold);

  const urlTemplate = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';

  cssInterop(MapView, {className: 'style'}); // need for Custom Native Components

  return (
      <View className='flex-1'>
        <MapView
          className="w-full h-full"
          provider={googleMap ? "google" : undefined}
          region={region}
        >
          {/*!googleMap && (
            <UrlTile
              urlTemplate={urlTemplate}
              maximumZ={19}
            />
          )*/}
          {spots.map(spot => (
            <Marker
              key={spot.id}
              coordinate={{ latitude: spot.lat, longitude: spot.lng }}
              title={spot.name}
              description={spot.description}
            />
          ))}
          {currentLocation && (
            <Marker
              key="currentLocation"
              coordinate={{ latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude }}
              title="現在地"
          />
          )}
        </MapView>
      </View>
  );
}