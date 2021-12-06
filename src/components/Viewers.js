import styled from "styled-components";
import React from 'react'



const Viewers = () => {
    return (
        <Container>
        
           <Wrap>
               <img src='/images/poster1.png' alt=""/>
               
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               </p>
            
                <p>
                WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST

                </p>
                  
               
           </Wrap>
           <Wrap>
               <img src='/images/viewers-marvel.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               </p>
              
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-national.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               
               </p>
           
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-pixar.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               
               </p>
             
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-starwars.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
           
               </p>
              
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-starwars.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               
               </p>
             
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-starwars.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
               </p>
              
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-starwars.png' alt=""/>
               <p> Free Guy <br></br>1 hr 54 min , Action, Adventure, Comedy, English, Hindi, Tamil, Telugu, 2021 <br></br>
              
               </p>
           
               <p>
                   WATCH MOVIE 
                   <br></br>
                   ADD TO WATCHLIST
               </p>
           </Wrap>
        </Container>
    )
}

const Container = styled.div`

margin-top:30px;
padding:30px 0px 26px;
display:grid;
gap: 25px;
position:relative;
flex-flow:row nowrap;
justify-content:flex-end;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;

const Wrap = styled.div`
padding-top:68%;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
curser:pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid rgba(249, 249, 249, 0.1);

img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;    
        transition:opacity 500ms ease-in-out 0s;
        width:100%;
        
        top:0;
        
${'' /* 
        webkit-filter: blur(4px); 
        filter: blur(4px); */}

}
p{
    
    opacity:0;
    text-align:left;
    font-size:10px;
    z-index:1;


}


&:hover{
    box-shadow: rgb( 0 0 0/80%) 0px 40px 58px -16px ,rgb(0 0 0 /72%) 0px 30px 22px -10px;
   transform:scale(1.3,1.3);
   @media  (max-width:768px) {
       transform:scale(1.1)
   }
   
    img{
        webkit-filter:grayscale(100%) blur(4px); 
        filter: blur(3px); 
        
        z-index:-1;
       
    }

    p{
        font-
    transition:0.8s;
    opacity:1;
    z-index:1;

    }

}


`;



export default Viewers

