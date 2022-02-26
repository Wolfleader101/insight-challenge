export interface GeoCoderData {
  id: string;
  type: string;
  text: string;
  language: string;
  place_name: string;
  center: number[];
}

export interface GeoCoderEvent {
  result: GeoCoderData;
}
