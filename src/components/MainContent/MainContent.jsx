import { useState } from "react";
import Filter from "../Filter/Filter";
import MissionHero from "../Hero/MissionHero";
import PhotoList from "../PhotoList/PhotoList";
import "./MainContent.scss";

export default function MainContent({ filtersOpen }) {
    const [activeFilter, setActiveFilter] = useState(null);

    return (
        <div className="main-content">
            {filtersOpen && (
                <div className="filter-container">
                    <Filter
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                </div>
            )}

            <div className="content-container">
                <MissionHero />
                <PhotoList activeFilter={activeFilter} />
            </div>
        </div>
    );
}
