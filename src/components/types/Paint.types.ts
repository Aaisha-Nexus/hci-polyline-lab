export type Polyline = {
  id: string;
  points: number[];
  color: string;
};
export type Scribble = {
  id: string;
  color: string;
  x?: number;
  y?: number;
  points: number[];
};
export type HistoryState = {
  scribbles: Scribble[];
  polylines: Polyline[];
};
