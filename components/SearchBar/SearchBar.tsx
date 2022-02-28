import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect, useState, useRef } from "react";
import { StyledGeoCoderInput } from "./styles";
import { GeoCoderEvent } from "types/types";

type Props = {
  setLocation: (value: React.SetStateAction<any>) => void;
};
const SearchBar = ({ setLocation }: Props) => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX ?? "";
  const [geocoder, setGeoCoder] = useState<MapboxGeocoder>();
  const geocoderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newGeocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,region,place,postcode,locality,neighborhood",
      placeholder: "search city",
    });

    setGeoCoder(newGeocoder);

    // DEFAULT LOCATION SET TO PERTH
    setLocation({
      id: "place.3737670470566420",
      type: "Feature",
      text: "Perth",
      language: "en",
      place_name: "Perth, Western Australia, Australia",
      center: [115.8605, -31.9527],
    });
  }, [setLocation]);

  useEffect(() => {
    if (geocoderRef == null) return;

    geocoder?.addTo(geocoderRef.current ?? "");

    const ResultListener = (event: GeoCoderEvent) => {
      setLocation(event.result);
    };

    const ClearListener = (event: GeoCoderEvent) => {
      setLocation(null);
    };

    geocoder?.on("result", ResultListener);
    geocoder?.on("clear", ClearListener);

    return () => {
      geocoder?.off("result", ResultListener);
      geocoder?.off("clear", ClearListener);
    };
  }, [geocoder, geocoderRef, setLocation]);

  return (
    <div>
      <StyledGeoCoderInput ref={geocoderRef}></StyledGeoCoderInput>
    </div>
  );
};

export default SearchBar;
