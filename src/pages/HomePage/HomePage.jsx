import FilterIcon from "../../assets/images/Filter.svg";
import { useState } from "react"
import { Link } from "react-router-dom"
import './HomePage.scss'
import MainContent from '../../components/MainContent/MainContent'
import Footer from '../../components/Footer/Footer'

function HomePage() {
    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">Snaps</Link>
                <button
                    className={`toggle-filters-button ${filtersOpen ? "toggle-filters-button--open" : ""}`}
                    onClick={() => setFiltersOpen((prev) => !prev)}
                    aria-label="Toggle Filters"
                >
                    Filters
                    <img
                        src={FilterIcon}
                        alt="Filter Icon"
                        className={`toggle-filters-button__icon ${filtersOpen ? "icon--active" : ""}`}
                    />
                </button>
            </header>

            <MainContent filtersOpen={filtersOpen} />
            <Footer />
        </>
    );
}

export default HomePage;
