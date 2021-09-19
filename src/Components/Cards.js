import {React,useState} from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn} from "mdb-react-ui-kit";
import "./Card.css";
import C1 from "../assets/c1.jpg";
import C2 from "../assets/c2.jpeg";
import C3 from "../assets/c3.jpeg";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



function Cards() {
   
  const [VIEWMORE,setReadMore]=useState(false);
  const [VIEWMORE1,setReadMore1]=useState(false);
  const [VIEWMORE2,setReadMore2]=useState(false);

  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
        
      </p>
  </div>
   const extraContent3=<div className= "extra-content3">
   <p >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
     porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
     commodi officia aliquam! Maxime.
     
   </p>
</div>
  const linkName=VIEWMORE?' ':'VIEW MORE  '
  const linkName1=VIEWMORE1?' ':'VIEW MORE  '
  const linkName2=VIEWMORE2?' ':'VIEW MORE  '

  return (
      <div>
    <MDBCard className="card1" style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage  className="c1" src={C1} />
        </MDBCol>
        <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle>Galle Fort</MDBCardTitle>
            <MDBCardText >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </MDBCardText>
            <a className="view-more-link" onClick={()=>{setReadMore(!VIEWMORE)}}><p> {linkName }{VIEWMORE && extraContent} <ChevronRightIcon className="btncd1"/> </p></a>  
                     
            
           
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard className="card2" style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className="c2" src={C2} />
        </MDBCol>
        <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle>Sigiriya</MDBCardTitle>
            <MDBCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </MDBCardText>
            <a className="view-more-link1" onClick={()=>{setReadMore1(!VIEWMORE1)}}><p> {linkName1 }{VIEWMORE1 && extraContent} <ChevronRightIcon className="btncd1"/> </p></a>  
                     
           </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <div className="part3">
      <h2 className="part3h">
        Tempor quis pariatur qui proident sit Lorem magna.
      </h2>

      <p className="part3p">
       
Do et magna consectetur commodo aliqua nostrud aliqua eiusmod consequat ex nisi anim deserunt. Nisi aliquip in officia esse dolore incididunt voluptate aliqua cupidatat do. Aute est mollit consectetur et ullamco amet anim. Officia ipsum do aliquip magna laboris qui adipisicing magna.

Proident in et magna ea culpa est nostrud laborum proident cupidatat in et ea est. Non labore minim aliquip sunt ad fugiat in elit reprehenderit ad pariatur laboris quis occaecat. Et Lorem consequat sunt proident nisi aliqua aliqua laboris non adipisicing culpa labore et dolore.

Officia tempor nostrud sint nisi. Id id consequat voluptate ex. Dolor nulla ullamco excepteur ex veniam tempor aliqua.

</p>

    </div>
    <div>
    <MDBCard className="card3" style={{ maxWidth: '1480px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage  className="c3" src={C3} />
        </MDBCol>
        <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle className="card3h">Galle Fort</MDBCardTitle>
            <MDBCardText className="card3p" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.


            </MDBCardText>
            <a className="view-more-link2" onClick={()=>{setReadMore2(!VIEWMORE2)}}><p className="viewmore"> {linkName2 }{VIEWMORE2 && extraContent3} <ChevronRightIcon className="btncd13"/> </p></a>  
                     
            
           
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    </div>
  );
}
           

 
    


export default Cards
