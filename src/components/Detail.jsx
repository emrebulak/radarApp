import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import api from "../utils/api"
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { setPath } from "../store/slices/flightSlice";
import { formatDate } from "../utils/formatDate";


const Detail = ({ detailId, setDetailId }) => {

    const dispatch = useDispatch();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        setDetail(null)
        api.get(`/detail?flight=${detailId}`).then(res => {
            setDetail(res?.data)
            dispatch(setPath(res?.data?.trail))
        })
    }, [detailId])


    return (
        <div className="bg-dark detail-modal">
            <div className="rounded p-1 d-flex justify-content-end align-items-center pointer close-btn-container">
                <IoCloseSharp onClick={() => setDetailId(null)} />
            </div>
            {
                detail == null ?
                    <div className="radar-loader">
                        <Loader />
                    </div> :
                    <div className="d-flex flex-column gap-3">
                        <h3 className="mt-3">{detail?.aircraft?.model?.text}</h3>
                        <h3>{detail?.aircraft?.model?.code}</h3>
                        <div className="d-flex gap-2">
                            <span>Kuyruk Kodu:</span>
                            <span className="fw-bold">{detail?.aircraft?.registration}</span>
                        </div>

                        <img className="rounded" src={detail?.aircraft?.images?.large[0]?.src} />

                        <div className="d-flex gap-2">
                            <span>Şirket:</span>
                            <span className="fw-bold">{detail?.airline?.short}</span>
                        </div>

                        <div className="d-flex gap-2">
                            <span>Kalkış:</span>
                            <a className="text-decoration-none" target="_blank" href={detail?.airport?.origin?.website}>{detail?.airport?.origin?.name}</a>
                        </div>

                        <div className="d-flex gap-2">
                            <span>İniş:</span>
                            <a className="text-decoration-none" target="_blank" href={detail?.airport?.destination?.website}>{detail?.airport?.destination?.name}</a>
                        </div>

                        <div className="d-flex gap-2">
                            <span>Kalkış Zamanı:</span>
                            <span className="fw-bold text-capitalize">{formatDate(detail?.time?.scheduled?.departure)}</span>
                        </div>

                        <div className="d-flex gap-2">
                            <span>İniş Zamanı:</span>
                            <span className="fw-bold text-capitalize">{formatDate(detail?.time?.scheduled?.arrival)}</span>
                        </div>

                        <div className={`d-flex justify-content-center align-items-center mt-2 rounded-pill p-1 ${detail?.status?.icon == 'green' ? 'bg-success' : detail?.status?.icon == 'red' ? 'bg-danger' : 'bg-warning'}`}>
                            <h5>{detail?.status?.text}</h5>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Detail