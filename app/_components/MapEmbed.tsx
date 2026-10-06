"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

const SEATTLE: [number, number] = [47.6062, -122.3321];

export const MapEmbed = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !elRef.current || mapRef.current) return;

      const map = L.map(elRef.current, {
        center: SEATTLE,
        zoom: 10,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapRef.current = map;

      // OpenStreetMap tiles need no API key; they're darkened in CSS (.map-canvas .leaflet-tile-pane).
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const icon = L.divIcon({
        className: "pu-marker",
        html: '<span class="pu-marker-pulse"></span><span class="pu-marker-dot"></span>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      L.marker(SEATTLE, { icon })
        .addTo(map)
        .bindPopup("<b>Prime Up</b><br/>Seattle, WA — Greater Puget Sound");
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={elRef} className="map-canvas" />;
};
