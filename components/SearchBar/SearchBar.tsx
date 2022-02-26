import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect, useState, useRef } from "react";
import { StyledGeoCoderInput } from "./styles";
import { GeoCoderEvent } from "types/types";

const SearchBar = () => {
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
  }, []);

  useEffect(() => {
    if (geocoderRef == null) return;

    geocoder?.addTo(geocoderRef.current ?? "");

    const ResultListener = (event: GeoCoderEvent) => {
      console.log(event.result.center);
    };

    const ClearListener = (event: GeoCoderEvent) => {
      // clear state
    };

    geocoder?.on("result", ResultListener);
    geocoder?.on("clear", ClearListener);

    return () => {
      geocoder?.off("result", ResultListener);
      geocoder?.off("clear", ClearListener);
    };
  }, [geocoder, geocoderRef]);

  return (
    <div>
      <StyledGeoCoderInput ref={geocoderRef}></StyledGeoCoderInput>
    </div>
  );
};

export default SearchBar;
