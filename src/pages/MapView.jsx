import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { turkeyLocation } from "../constant";
import { icon } from "leaflet";
import plane from "../assets/img/plane-icon.png";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Loader from "../components/Loader";
import { setPath } from "../store/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { isLoading, flights, error, path } = useSelector(
    (state) => state.flight
  );
  const dispatch = useDispatch();

  const planeIcon = icon({
    iconUrl: plane,
    iconSize: [30, 30],
  });

  const clearPath = () => {
    dispatch(setPath([]));
  };

  return (
    <MapContainer center={turkeyLocation} zoom={6} scrollWheelZoom={true}>
      {!isLoading && (
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      )}
      {isLoading ? (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        flights.map((flight) => (
          <Marker
            key={flight.id}
            icon={planeIcon}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="d-flex flex-column gap-3 p-1">
                <div className="d-flex gap-1">
                  <span>Kod:</span>
                  <span className="fw-bold">{flight.code}</span>
                </div>

                <button
                  onClick={() => setDetailId(flight.id)}
                  className="btn btn-secondary btn-sm"
                >
                  Detay
                </button>

                {path.length > 0 && (
                  <button
                    onClick={clearPath}
                    className="btn btn-secondary btn-sm"
                  >
                    Rotayı Temizle
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))
      )}
      <Polyline positions={path} />
    </MapContainer>
  );
};

export default React.memo(MapView);
