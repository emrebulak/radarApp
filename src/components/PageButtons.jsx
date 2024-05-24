const PageButtons = ({ page, setPage }) => {
    return (
        <div className="my-4 d-flex justify-content-center align-items-center">
            <div className="btn-group">
                <button onClick={() => setPage(true)} className={`btn btn-lg btn-light custom-btn ${page ? 'active' : ''}`}>Harita Görünümü</button>
                <button onClick={() => setPage(false)} className={`btn btn-lg btn-light custom-btn ${!page ? 'active' : ''}`}>Liste Görünümü</button>
            </div>
        </div >
    )
}

export default PageButtons