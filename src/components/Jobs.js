import React,{useState,useEffect} from 'react'
import '../App.css';
import styled from 'styled-components'
import Card from './JobCard';

function Job() {


  const [Data , setData] = useState({
    data:[
      
    ]
  })

  const fetchdata = async ()=>{
    let response =  await fetch('http://refertest.pythonanywhere.com/job/openings');
    let parsedData = await response.json();
    setData(parsedData)
    
    // console.log(parsedData)
    console.log(Data.data[0])
  }
  useEffect( ()=>{
    fetchdata();
    // eslint-disable-next-line
  },[])
  
  return (
    <Container className='container'>
        {Data.data && Data.data.map((element)=>{
                 return(
                  <Card 
                  key ={element.company}
                  company={element.company} 
                  designation={element.designation}
                  experience={element.min_experience}
                  Location={element.location}
                  skills = {element.skills}
                />
                 )
               })}
              
    </Container>
  )
}


const Container = styled.div`
    width:70%;
    display:flex;
    flex-direction:column;
    
`

export default Job;
