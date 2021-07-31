import React from "react";
import "./JobInfo.css";

export default function JobInfo(props) {
    return (
        <div className="job-info">
            <div className="job-info__top-container">
                <span className="job-info__company">{props.company}</span>
                {props.isNew && <span className="chip chip--new">NEW!</span>}
                {props.isFeatured && (
                    <span className="chip chip--featured">FEATURED</span>
                )}
            </div>
            <h2 className="job-info__position">{props.position}</h2>
            <ul>
                <li className="job-info__posted-at">{props.postedAt}</li>
                <li className="job-info__contract">{props.contract}</li>
                <li className="job-info__location">{props.location}</li>
            </ul>
            <hr />
        </div>
    );
}
