import React from "react";
import "./Card.css";
import Logo from "../Logo/Logo";
import JobInfo from "../JobInfo/JobInfo";
import JobTags from "../JobTags/JobTags";

export default function Card(props) {
    return (
        <div className="card">
            <Logo logo={props.logo}/>
            <JobInfo
                isNew={props.isNew}
                isFeatured={props.isFeatured}
                company={props.company}
                position={props.position}
                postedAt={props.postedAt}
                contract={props.contract}
                location={props.location}
            />
            <JobTags tags={props.tags} onFilter={props.onFilter}/>
        </div>
    );
}
