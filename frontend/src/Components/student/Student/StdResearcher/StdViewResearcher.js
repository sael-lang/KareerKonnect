import React from 'react'
import './StdViewResearcher.css'
import { useState, useEffect } from 'react'
import StdResearcherCards from './ResearcherCards/StdResearcherCards';

const StdViewResearcher = () => {

  const [researchers, setResearchers] = useState([]);
  const [allResearchers, setAllResearchers] = useState([]);

  useEffect(() => {
    (async () => {
      let reseacherData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        reseacherData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        reseacherData = [];
      }

      setAllResearchers(reseacherData);
      setResearchers(reseacherData);
    })();
  }, []);

  const filterStdReseacherCards = event =>{
    const value = event.target.value.toLowerCase();
    const filterResearchers = allResearchers.filter(
      researcher => (`${researcher.name.first} ${researcher.name.last}`
      .toLowerCase()
      .includes(value)
      )
    );

    setResearchers(filterResearchers)
  };

  return (
    <div className="StdResearcher-ViewLayout">
      <div className="StdResearcher-ViewHeading">
        <h1>Recommanded Researchers</h1>
      </div>
      <input className="stdResearcher-SearchBox" placeholder="Search Researcher..." onInput={filterStdReseacherCards}/>
      <div className="StdResearcherCards-Container">
        {researchers.map((researcher, index) => (
          <StdResearcherCards reseacherData={researcher} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StdViewResearcher