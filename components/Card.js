import React from "react"

export default function Card(props){
    let badgeText
    if (props.rating === 5){
        badgeText = "Highly Recommend"
    }
    
    return(
        <div className="card">
        {
            badgeText && <div className="cardBadge">{badgeText}</div>
        }
            <div className="colLeft">
                <img className="locationImage"
                src={`../public/images/${props.image}`} />
            </div>
            <div className="colRight">
                <span className="location"><img className="locationIcon"
                src={`../public/images/location.png`} />
                {props.location}
                <a className="googleMaps" href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <span className="title">{props.title}</span>
                <span className="date">{props.date}</span>
                <span className="description">{props.description}</span>
            </div>
        </div>
    )
}