import React from 'react'
import './StdResearcherPhoneNumber'

const StdResearcherPhoneNumber = ({researcherNumber, researcherType}) => {
  return (
    <div className="stdResearhcerPhoneNumber">
        <p>{researcherType}: {researcherNumber}</p>
    </div>
  )
}

export default StdResearcherPhoneNumber