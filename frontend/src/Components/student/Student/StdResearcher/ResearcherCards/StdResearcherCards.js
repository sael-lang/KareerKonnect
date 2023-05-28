import React from 'react'
import './StdResearcherCards.css'
import StdResearcherLocation from '../ResearcherDetails/StdResearcherLocation';
import StdResearcherPhoneNumber from '../ResearcherDetails/StdResearcherPhoneNumber';

const StdResearcherCards = ({ reseacherData }) => {
    return (
        <div className="std_ResearcherCard">
            <div className="std_ResearcherCardTittle">
                {reseacherData.name.first} {reseacherData.name.last}
            </div>
            <div className="std_ResearcherCardBody">
                <StdResearcherLocation researcherLocation={reseacherData.location}/>
                <StdResearcherPhoneNumber researcherType="Home" researcherNumber={reseacherData.phone} />
                <StdResearcherPhoneNumber researcherType="Mobile" researcherNumber={reseacherData.cell} />
                <div className="std_ResearcherCardImage">
                    <img src={reseacherData.picture.medium} alt={reseacherData.picture.medium} />
                </div>
            </div>
        </div>
    );
}

export default StdResearcherCards