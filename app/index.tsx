import { Spot } from '@/types/spot';
import React from 'react';
import MapViewComponent from '../components/MapView';
import "../global.css";

export default function App() {
  const spots: Spot[] = [
    {
      id: "kiyomizudera",
      name: "清水寺",
      lat: 34.994856,
      lng: 135.785046,
      category: "寺院",
      description: "なんかすごいお寺",
      audioFile: 'kiyomizudera.mp3',
      updatedAt: null,
  }
  ];

  return (
    <MapViewComponent spots={spots} />
  );
}
