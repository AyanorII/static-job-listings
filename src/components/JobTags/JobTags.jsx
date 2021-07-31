import React from 'react'

import './JobTags.css'

export default function JobTags(props) {
    return (
        <div className="tags-container">
            {props.tags.map((tag, index) => {
                return <span key={index} onClick={() => props.onFilter(tag)} className="tag">{tag}</span>
            })}
        </div>
    )
}
