import React from "react";
import styled from "styled-components";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service212.jpg";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service41.jpg";

export default function Service() {
  const data = [
    {
      icon: service1,
      title: "Faculty",
      subTitle:
        "Faculty memnbers will also be able to mske their profile and find students as Research Assistants for participation  in their research and development projects.Faculty members can also acts as an Employeer and create internship oppertunities for the students.",
    },
    {
      icon: service2,
      title: "Job seeker",
      subTitle:
        "Job Seeker will be able to post their Resumes and find the right job for themselves.Our portal will provide the seekers with the best possible match from the flock of job listing and filter the ones that fit their requirmnets. ",
    },
    {
      icon: service3,
      title: "Companies",
      subTitle:
        "Companies will be able to post job Ads and find the list of the best candidate that fit their need through keyword matching and advance filtering.The companies will also be able to quickly review the candidate's scorecard generated automatically. ",
    },
    {
      icon: service4,
      title: "Students",
      subTitle:
        "Students will also be able to make their profile and find faculty members to work on specific projects and research areas that will be otherwise difficult for them to find.Students may also search for internships and other project participations based on their profiles. ",
    },
  ];
  return (
      
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>

  );
}

const Section = styled.section`
 font-family:quicksand,sans-serif;
    font-weight:600px;
    text-rendering:optimizelegibility;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    font-family:quicksand,sans-serif;
    font-weight:bold;
    text-rendering:optimizelegibility;
    gap: 1rem;
    padding: 3rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    h3 { font-family:quicksand,sans-serif;
    font-weight:bold;
    text-rendering:optimizelegibility;}
    p{
      font-family:quicksand,sans-serif;
    font-weight:bold;
    text-rendering:optimizelegibility;
    }
    h1{
    align-item:center;
    text-align: center;
    margin-bottom: 2rem;}
    .icon {
      img {
        height: 6rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
