export type Spot = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    category: string | null;
    description: string;
    audioFile: string;
    updatedAt: string | null;
}