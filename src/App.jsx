import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import PageButtons from "./components/PageButtons";
import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import { useDispatch } from "react-redux";
import { getFlights } from "./store/actions/flightAction";

const App = () => {
  const [activePage, setActivePage] = useState(true);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div className="bg-dark text-white w-100 min-vh-100 p-3">
      <Header />

      <PageButtons page={activePage} setPage={setActivePage} />

      {activePage ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {detailId != null && (
        <Detail detailId={detailId} setDetailId={setDetailId} />
      )}
    </div>
  );
};

export default App;
