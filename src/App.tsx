import { useRef, useState } from "react";
import { MapPin } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  type MapRef,
} from "@/components/ui/map";
import { cn } from "@/lib/utils";
import { places, type Place } from "@/data/places";

const initialCenter: [number, number] = [121.66, 25.04];
const mapStyles = {
  light: "https://tiles.openfreemap.org/styles/bright",
  dark: "https://tiles.openfreemap.org/styles/bright",
};

export default function App() {
  const mapRef = useRef<MapRef>(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  const selectPlace = (place: Place) => {
    setSelectedPlaceId(place.id);
    mapRef.current?.flyTo({
      center: [place.lng, place.lat],
      zoom: 13.4,
      duration: 900,
      essential: true,
    });
  };

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-[#9fd6e9]">
      <section className="frame-stage" aria-label="台北放空地圖">
        <div className="map-window">
          <Map
            ref={mapRef}
            theme="light"
            center={initialCenter}
            zoom={9.1}
            minZoom={7.2}
            maxZoom={17}
            styles={mapStyles}
            className="rounded-[inherit]"
          >
            {places.map((place) => {
              const isSelected = selectedPlaceId === place.id;

              return (
                <MapMarker
                  key={place.id}
                  longitude={place.lng}
                  latitude={place.lat}
                  onClick={() => selectPlace(place)}
                >
                  <MarkerContent>
                    <button
                      type="button"
                      aria-label={`查看 ${place.name}`}
                      onClick={() => selectPlace(place)}
                      className={cn(
                        "grid size-8 cursor-pointer place-items-center rounded-full border-[3px] border-white bg-[#2f7a62] text-white shadow-[0_5px_14px_rgba(36,54,44,0.28)] transition duration-200 hover:bg-[#e7855d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7855d] focus-visible:ring-offset-2",
                        isSelected &&
                          "size-10 bg-[#e7855d] shadow-[0_7px_20px_rgba(132,70,42,0.35)]",
                      )}
                    >
                      <MapPin
                        className={cn(
                          "size-4 fill-current",
                          isSelected && "size-5",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </MarkerContent>
                  <MarkerTooltip>{place.name}</MarkerTooltip>
                  <MarkerPopup
                    closeButton
                    className="w-64 border-[#d5c59b] bg-transparent p-0"
                  >
                    <PlacePopup place={place} />
                  </MarkerPopup>
                </MapMarker>
              );
            })}
          </Map>
        </div>

        <picture className="pointer-events-none absolute inset-0 z-30 block">
          <source media="(min-width: 768px)" srcSet="/frame-desktop.png" />
          <img
            src="/frame-mobile.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </section>
    </main>
  );
}

function PlacePopup({ place }: { place: Place }) {
  return (
    <div className="overflow-hidden rounded-md border border-[#d5c59b] bg-[#fffaf0] text-[#24362c] shadow-[0_12px_28px_rgba(36,54,44,0.2)]">
      <div className="bg-[#2f7a62] px-3 py-2 text-white">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/75">
          {place.region}
        </p>
        <h1 className="pr-5 text-sm font-black leading-snug">{place.name}</h1>
      </div>
      <div className="space-y-2 p-3">
        <p className="text-xs font-semibold leading-relaxed text-[#536552]">
          {place.note}
        </p>
        <p className="text-[11px] font-bold text-[#6d7b65]">
          {place.lat.toFixed(4)}, {place.lng.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
