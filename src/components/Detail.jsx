import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import api from "../utils/api"
import Loader from "./Loader";

const Detail = ({ detailId, setDetailId }) => {

    const [detail, setDetail] = useState(null);

    useEffect(() => {

        api.get(`/detail?flight=${detailId}`).then(res => {
            console.log("Detail : ", res.data);
            setDetail(res.data)
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
                    <div>
                        Veriler
                    </div>
            }

        </div>
    )
}

export default Detail