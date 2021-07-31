import React, { useState } from "react";
import "./App.css";

// * Components
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import SelectedTags from "./components/SelectedTags/SelectedTags";

// * Images

// ** Data
import jobs from "./data.json";

function App() {
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const showItems = (job) => {
        return (
            <Card
                key={job.id}
                logo={job.logo}
                isNew={job.new}
                isFeatured={job.featured}
                company={job.company}
                position={job.position}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                tags={[job.role, job.level, ...job.languages, ...job.tools]}
                onFilter={addFilterItem}
            />
        );
    };

    const addFilterItem = (item) => {
        setIsFiltered(true);
        if (!filteredItems.includes(item)) {
            setFilteredItems((prevState) => [...prevState, item]);
        } else {
            setFilteredItems((prevState) =>
                prevState.filter((job) => job !== item)
            );
            if (filteredItems.length === 0) {
                setIsFiltered(false);
            }
        }
    };

    const clearAllFilteredItems = () => {
        setIsFiltered(false);
        setFilteredItems([]);
    };

    const clearFilteredItem = (item) => {
        if (filteredItems.length === 1) {
            setIsFiltered(false);
        }
        setFilteredItems((prevState) =>
            prevState.filter((job) => job !== item)
        );
    };

    const showFilteredItems = () => {
        const filteredJobs = jobs.filter(
            (job) =>
                filteredItems.includes(job.role) ||
                filteredItems.includes(job.level) ||
                job.languages.some((language) =>
                    filteredItems.includes(language)
                ) ||
                job.tools.some((tool) => filteredItems.includes(tool))
        );

        return filteredJobs.map((job) => {
            return showItems(job);
        });
    };

    return (
        <div className="App">
            <Header />
            {isFiltered && (
                <SelectedTags
                    tags={filteredItems}
                    onClick={clearFilteredItem}
                    onClear={clearAllFilteredItems}
                />
            )}
            {!isFiltered &&
                jobs.map((job) => {
                    return showItems(job);
                })}
            {isFiltered && showFilteredItems()}
        </div>
    );
}

export default App;
