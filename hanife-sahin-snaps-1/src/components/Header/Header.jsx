import "./Header.scss";
import FilterIcon from "../../assets/images/Filter.svg";

function Header({ filtersOpen, setFiltersOpen }) {
    return (
        <header className="header">
            <span className="header__logo">Snaps</span>
            <button
                className={`toggle-filters-button ${filtersOpen ? "toggle-filters-button--open" : ""}`}
                onClick={() => setFiltersOpen((prev) => !prev)}
            >
                Filters
                <img
                    src={FilterIcon}
                    alt="Filter Icon"
                    className={`toggle-filters-button__icon ${filtersOpen ? "icon--active" : ""}`}
                />
            </button>
        </header>
    );
}

export default Header;
