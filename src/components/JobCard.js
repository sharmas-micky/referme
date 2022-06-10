import React from 'react'

import styled from 'styled-components'
function JobCard(props) {
  return (
    <div>
      <Card>
           <JobDet className="container">
              <CompanyName>{props.company}</CompanyName>
              <Designation>{props.designation}</Designation>
        
              {props.experience>0 && <Experience>{props.experience}Years+ experience</Experience>}
              {props.experience<=0 && <Experience>Fresher</Experience>}

              <Location>{props.Location}</Location>
           </JobDet>

           <SkilSet className="container">
             <SkilSet2>
               {props.skills && props.skills.map((element)=>{
                 return(
                  <Skil key={element}>{element}</Skil>
                 )
               })}
             </SkilSet2>
              <Button>Apply</Button>
           </SkilSet>

        </Card>
    </div>
  )
}

const Card = styled.div`
    margin:5px;
    display:flex;
    flex-direction:column;
    // background-color:antiquewhite;
    border:1px solid gray;
    border-radius:3px;


`
const Button = styled.button`
  align-text:center;
  border:1px solid white;
  font-size:16px;
  border-radius:4px;
  padding:0px 16px;
  color:white;
  background-color:royalblue;
  
`
const CompanyName = styled.text`
  margin:4px 0px;
  font-size:16px;
`
const Designation = styled.text`
  // margin:2px;
  font-size:25px;
`
const Experience = styled.text`
  // margin:2px;
  max-width:fit-content;
  padding:1px 4px;
  border-radius:9px;
  font-size:13px;
  background-color:#d7d9db;
`

const SkilSet = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:6px 0px;
`
const SkilSet2 = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:4px 0px
  flex-wrap:wrap;
  align-items:center;
`
const Skil = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
    margin-right:5px;
    height:fit-content;
    padding:4px;
    // margin:0px 6px;
    border-radius:7px;
    font-size:16px;
    background-color:#d7d9db;
`
const JobDet = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
`
const Location = styled.text`
  font-size:12px;
  width:fit-content;
  margin:0px 2px;
`
export default JobCard
