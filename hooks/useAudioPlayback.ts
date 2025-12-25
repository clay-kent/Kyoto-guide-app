import { Spot } from '@/types/spot';
import * as Location from 'expo-location';
import { useEffect } from 'react';

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function useAudioPlayback(currentLocation: Location.LocationObject | null, spots: Spot[], distanceThreshold: number) {
  useEffect(() => {
    if (currentLocation) {
      spots.forEach(spot => {
        const distance = haversineDistance(
          currentLocation.coords.latitude,
          currentLocation.coords.longitude,
          spot.lat,
          spot.lng
        );
        if (distance <= distanceThreshold) {
          if (spot.audioFile) {
            // 再生処理
            console.log(`Playing audio for spot: ${spot.name}`);
          }
        }
      });
    }
  }, [currentLocation, spots, distanceThreshold]);
}