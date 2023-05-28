import React from 'react'
import "./Search.css";
import styled from "styled-components";


const Search = () => {
  return (
    <Section id="hero">
      <div className="content">
        <div className="title">
          <h1>The Easiest Way To Get Your New Job</h1>
          <p>Find Jobs, Employment & Career Oppertunities
          </p>
        </div>
        <div className="search">
          <div className="search_container">
           
            <input type="text" placeholder="Keywords" />
          </div>
          <div className="search_container">
         
            <input type="text" placeholder="All Regions" />
          </div>

          <div className="search_container">
            
            <select id="search_category" name="search_category">
              <option value="">Any Category</option>
              <option value="102">Construction</option>
              <option value="105">Corodinator</option>
              <option value="117">Employer</option>
              <option value="129">Financial Career</option>
              <option value="137">Information Technology</option>
              <option value="152">Marketing</option>
              <option value="165">Quality check</option>
              <option value="166">Real Estate</option>
              <option value="171">Sales</option>
              <option value="177">Supporting</option>
              <option value="179">Teaching</option>
            </select>
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
position: relative;
width: 100%;
display:center;
bottom:350px;
.content {
padding-left:200px;
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .title {
    color: white;
    h1 {
      font-family:quicksand,sans-serif;
    font-weight:600px;
    text-rendering:optimizelegibility;
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
    p {
      font-family:quicksand,sans-serif;
    font-weight:600px;
    text-rendering:optimizelegibility;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.2rem;
    }
  }
  .search {
    display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.3rem;
    .search_container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      
      label {
        font-size: 1.1rem;
        color: #03045e;
      }
      input {
        background-color: transparent;
        border: none;
        text-align: center;
        color: black;
        &[type="date"] {
          padding-right: 3rem;
        }
        &::placeholder {
          color: black;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      margin-top:5px;
      margin-bottom:5px;
      text-align:center;
        padding: 15px;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: .7rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
      &:hover {
        background-color: #023e8a;
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 980px) {
  height: 25rem;
  .background {
    background-color: palegreen;
    img {
      height: 100%;
    }
  }
  .content {
    .title {
      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
        padding: 1vw;
      }
    }
    .search {
      flex-direction: column;
      padding: 0 0.8rem;
      gap: 0.8rem;
      /* padding: 0; */
      .search_container {
        padding: 0 0 0.8rem;
        input[type="date"] {
          padding-left: ;
        }
      }
      button {
        padding: 1rem;
      }
      /* display: none; */
    }
  }
}`;

export default Search