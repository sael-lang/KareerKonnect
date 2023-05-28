import React, { useState } from "react";
import styled from "styled-components";
import Frontend from "../../assets/Frontend.jpg";
import Backend from "../../assets/Backend.png";
import Nodejs from "../../assets/Nodejs.jpg";
import Mongodb from "../../assets/Mongodb.jpg";
import JavaScript from "../../assets/JavaScript.jpg";
import Reactjs from "../../assets/Reactjs.jpg";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Frontend,
      title: "Frontend Developer",
      subTitle:
        "Global Software Consulting offers modern solutions for the growth of your business with the help of top-quality development services and excellent frameworks to develop user-friendly app interfaces. We are looking for a “Front-End Developer” to join our team and develop our database and platform to provide better services.",
      pay: "45000",
      duration: "Full Time",
    },
    {
      image: Backend,
      title: "Backend Developer",
      subTitle:
        "Ensure the best possible performance, quality, and responsiveness of the application.We are looking for a highly capable Node.js developer to optimize our web-based application performance. You will be collaborating with our front-end application developers, designing back-end.To ensure success as a Node.js developer, you should possess extensive knowledge of Node.Js-based services and experience in a similar role.",
      pay: "54,200",
      duration: "Full Time",
    },
    {
      image: Nodejs,
      title: "Node Js",
      subTitle:
        "We are looking for a highly capable Node.js developer to optimize our web-based application performance. You will be collaborating with our front-end application developers, designing back-end components, and integrating data storage and protection solutions. To ensure success as a Node.js developer, you should possess extensive knowledge of Node.Js-based services and experience in a similar role.",
      pay: "45,500",
      duration: "Full Time",
    },
    {
      image: Mongodb,
      title: "Mongo DB",
      subTitle:
        "Minimum 1 year experience in Node.JS and MongoDB is mandatory. Ability to work in an agile development environment.Knowledge of best practices for the full software development life cycle, including coding standards, code reviews, source control management and testing Strong problem solving and debugging skills.Good verbal and written communication skills for client interaction.",
      pay: "50,100",
      duration: "Full Time",
    },
    {
      image: JavaScript,
      title: "JavaScript",
      subTitle:
        "Growtech Solutions (Partners with HBL and BOP and Askari Bank) is looking for a mid-level MEAN Stack developer having about 1 year of industrial experience  Angular 8/9/10, Node.js, Rxjs, MySql, API development Familiarity , Aws Light sail, Ubuntu and Docker is a plus point.",
      pay: "50,400",
      duration: "Full Time",
    },
    {
      image: Reactjs,
      title: "React Js",
      subTitle:
        "We are looking for an experienced React.js developer having 3+ years of experience to join our dynamic development team. The developer must have high technical proficiency across different stages of the software development life cycle. They must produce high-quality code deliverables for a module, lead validation for testing, and assistance associated with implementation, transition, and warranty.",
      pay: "67,800",
      duration: "Full Time",
    },
  ];

  const packages = [
    "The Full Time",
    "The Part Time",
    "The Hybrid",
    "The Remote",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Jobs</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.pay}</h4>
              </div>
              <div className="distance">
                <span>Fresh Graduate </span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    font-family: quicksand, sans-serif;
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-family: quicksand, sans-serif;
    font-size: 19px;
    font-weight: bold;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    font-family: quicksand, sans-serif;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    font-weight: bolder;
    .destination {
      font-family: quicksand, sans-serif;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      font-weight: bold;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        font-family: quicksand, sans-serif;
        .services {
          display: flex;
          gap: 0.3rem;
          font-family: quicksand, sans-serif;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
