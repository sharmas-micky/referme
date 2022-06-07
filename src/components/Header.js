import React ,{useState,useEffect} from 'react'
import '../App.css';
import styled from 'styled-components'


function Header() {

    const [Data , setData] = useState({
      data:{
        
      }
    })
    const fetchdata = async ()=>{
      let response =  await fetch('http://refertest.pythonanywhere.com/user/data');
      let parsedData = await response.json();
      setData(parsedData)

    }
    useEffect(()=>{
      
      fetchdata();
      // eslint-disable-next-line
    },[])
 

      return (
        <>
        <Container className="container">
          <Logo href="/"><Title>ReferMe</Title></Logo>
          <User>
            <UserDet>
            <Name>{Data.data.name}</Name>
            <ClgName>{Data.data.college}</ClgName>
            </UserDet>
            <UserImg>
            <img src={Data.data.pictureUrl} alt="" style={{width:'30px',height:'30px',borderRadius:'50%'}} />
            </UserImg>
          </User>
        </Container>
        </>
      )
}

const Container = styled.div`
  // background-color: aliceblue;
  width:80%;
  display: flex;
  justify-content:space-between;
`
const Logo = styled.div`
  margin-top: 14px 14px;
`
const User = styled.div`
  display: flex;
  align-items:center;

`
const UserDet = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;

`
const UserImg = styled.div`
  width:30px;
  height:30px;
  margin-left:7px;
`
const Name = styled.div`
  margin:0;
  font-size:13px
`
const ClgName = styled.div`
  margin:0;
  font-size:8px

`
const Title = styled.div`
  margin:14px 14px;
`
export default Header
