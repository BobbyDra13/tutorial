export interface Point {
  x: number;
  y: number;
}
export interface Gondola {
  id: string;
  zoneId: string;
  serialNumber: number;
  name: string;
  type: string;
  coordinates: Point;
  brand: string;
}
export interface Zone {
  id: string;
  name: string;
  type: string;
  color: string;
  points: Point[];
  gondolas: Gondola[];
}
