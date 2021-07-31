import React from "react";
import "./SelectedTags.css";
import cross from "../../images/icon-remove.svg";

export default function SelectedTags(props) {
    return (
        <div className="selected-tags">
            {props.tags.map((tag) => {
                return (
                    <span key={tag} onClick={() => props.onClick(tag)} className="tag selected-tag">
                        {tag}
                    </span>
                );
            })}
            <span onClick={props.onClear} className="clear">
                Clear
            </span>
        </div>
    );
}
