import React,{useState,useEffect} from 'react'
import '../App.css';
import styled from 'styled-components'
import Card from './JobCard';

function Job() {


  const [Data , setData] = useState({
    data:{
      
    }
  })

  const fetchdata = async ()=>{
    let response =  await fetch('http://refertest.pythonanywhere.com/job/openings');
    let parsedData = await response.json();
    setData(parsedData)
    console.log(Data)
  }
  useEffect(()=>{
    
    fetchdata();
    // eslint-disable-next-line
  },[])


  return (
    <Container className='container'>
        <Card/>
        <Card/>
    </Container>
  )
}


const Container = styled.div`
    background-color: pink;
    width:70%;
    display:flex;
    flex-direction:column;
    
`

export default Job;
