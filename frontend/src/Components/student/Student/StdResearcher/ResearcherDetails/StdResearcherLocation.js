import React from 'react'
import './StdResearcherLocation.css'

const StdResearcherLocation = ({researcherLocation}) => {
  return (
    <div className="stdResearcherLocation">
        <p>{researcherLocation.street.number}, {researcherLocation.street.name}</p>
        <p>{researcherLocation.city}</p>
        <p>{researcherLocation.state}</p>
        <p>{researcherLocation.postcode}</p>
        <p>{researcherLocation.country}</p>
    </div>
  )
}

export default StdResearcherLocation