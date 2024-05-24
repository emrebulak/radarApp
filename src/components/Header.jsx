import { useSelector } from 'react-redux'
import logo from '../assets/img/favicon.png'

const Header = () => {

    const { flights, isLoading } = useSelector(state => state.flight)

    return (
        <header className='d-flex justify-content-between align-items-center bg-dark text-white'>
            <div className='d-flex align-items-center gap-4'>
                <img className='img-fluid' width={75} src={logo} alt="Logo" />
                <h2>Uçuş Radarı</h2>
            </div>
            <div>
                {
                    isLoading ? <h5>Yükleniyor...</h5> : <h5>{flights.length} Uçuş Bulundu</h5>
                }

            </div>
        </header>
    )
}

export default Header