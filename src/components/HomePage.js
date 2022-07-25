import React, {useState} from 'react';
import "../assets/Brand Icons/icofont.min.css";
import "../assets/regular/icofont.min.css";
import "../assets/Direction Icons/icofont.min.css";
import SmokeElement from "smoke-effect-react";
import "./Style.css";


const HomePage = ({disps}) => {
    const[number, setNumber]= useState(0);
    const [numbr, setNumbr]= useState(0);
    const[red, setRed] = useState(false);
    
    const timer = () =>{
        if(numbr<3){
            setTimeout(() => {
                setNumbr(numbr + 1);
                console.log(numbr);
                
            }, 4000)

        }else if(numbr>=3){
            setTimeout(() => {
                setNumbr(0);
                console.log(numbr)
                
            }, 4000)
        }
    
        
    }
    timer();

    const redSetter = () =>{
        // if(red = true){
        //     setRed(false);
        // }else{
        //     setRed(true);
        // }
        setRed(current=> !current)
    }
    

 const Render = disps.map((item)=>{
     const {id, color, img,name} = item;
     return(
         <div className='col-sm-4 shoecard' key={id} >
             <div 
                classname="shoebg1" 
                style={{backgroundColor: color, width:"70%", height:"100%",position:"absolute",
                 zIndex:"-1", borderRadius:"7px"}}></div>
             <div>
             <i className='icofont-brand-nike' style={{color:"white", marginLeft:"10px"}}></i>
                 <div className='Air'>Air</div>
                 <img  style={{width:"100%"}}src={img} alt={id}/>
             
                    <div>
                         <h3 style={{fontSize:"2em", display:"flex", alignItems:"center", marginLeft:"5%"}}>{name}</h3>
                         
                         <div className='card-circle'>
                             <div className='circle'></div>
                             <div className='circle'></div>
                             <div className='circle'></div>
                             <div className='circle'></div>

                         </div>

                         <div className='card-footer'>
                         <div className='buy' style={{color: "white"}}>Buy Now</div>
                         <i className='icofont-cart'></i>

                         </div>
                         

                    </div>
             </div>
            
             
         </div>
     )



 })


 const colorUse = disps[number].color;
 const imgUse = disps[number].img
    

 return (
    <div>
        
        
      <div className='jumbotron' style={{backgroundColor: colorUse }}>
        <img className='animated infinite fadeIn pattern' src='img/spiral.png' style={{mixBlendMode:"color-dodge",
         position:"absolute",animationDirection:"alternate",
        repeatY:"repeat",
        
          width:"100%", marginTop:"-60px",opacity:".5", marginLeft:"-32px"}}/>
                <div className='header' style={{color:"white"}}>
                            <i className='icofont-brand-nike' onClick={()=>{setNumber(number + 1)}}></i>
                            <h2>nike</h2>
                    </div>
        
            <div className='controller'
            onClick={()=>{setNumber(number - 1)}}
            style={{color:disps[number].mainColor, display:number <=0 && "none"}}>
            <i className='icofont-caret-left'></i>

            </div>

          <div className='container'>
              <div className='row'>

                  <div className='col-12 col-sm-6 left'>
                      <div>
                        <div className='shoeunder'></div>
                        <img className='animated  bounceIn' src={imgUse} alt={disps[number].id}/>
                      </div>
                     
                      <div className='circle-div'>
                          <div className='circle'onClick={()=>{setNumber(0)}} style={{backgroundColor: disps[0].color}}></div>
                          <div className='circle' onClick={()=>{setNumber(1)}} style={{backgroundColor:disps[1].color}}></div>
                          <div className='circle' onClick={()=>{setNumber(2)}} style={{backgroundColor:disps[2].color}}></div>
                          <div className='circle' onClick={()=>{setNumber(3)}} style={{backgroundColor:disps[3].color}}></div>
                      </div>

                  </div>
                  <div className='col-12 col-sm-6'>
                      
                      <h4 className='neonEffect'>Nike</h4>
                      <h3 className='neonEffect'>Air Presto</h3>
                      <div className='price' style={{color:(number===1) && "white"}}>
                          <span className='price-before'>$29.99 </span>
                          <span className='price-now'>$50</span>
                      </div>
                      <div className='favorite-buy'>
                          
                              <div className='button favorite'>
                                  <i className='icofont-cart'></i>
                                  <div className='button-text'>Buy Now</div>
                              </div>

                              <div className='button buy'>
                                  <i className='icofont-heart' style={{color:red && "red"}} onClick={redSetter}></i>
                                  <div className='button-text'>save</div>
                              </div>
                        
                      </div>
                      <div>
                          <form>
                              
                              <input type="text" style={{color:disps[number].color}} placeholder='size e.g 43, 44'/>
                          </form>
                      </div>
                  </div>
             
            
              </div>
          </div>
          <div className='controller controller2'>
          <i className='icofont-caret-right'
             style={{display:number >2 && "none", color:disps[number].mainColor}}
             onClick={()=>{setNumber(number + 1)}}></i>
          </div>

      </div>



      {/* second section */}



      <div className='about'>
          <div className='container'>
              <div className="header">
                  <div style={{fontWeight: 600}}>Everyone</div>
                  <div className='Nike'>Nike it</div>

              </div>
              <div className='row'>
                    {Render}
              </div>
          </div>

      </div>


     {/* Third sectionrgb(245, 30, 66); */}
     <div className='thirdsection'>
         <div  className="col-sm-3 " style={{position:"absolute",marginLeft:"20%",  zIndex:"99", display:"flex",flexDirection:"column"}}>
             <img src="img/3long.jpg" style={{border:"7px solid white",borderRadius:"10px",width:"300px", backgroundColor:"white"}}/>
             <div style={{color:"rgb(17, 17, 17)", fontSize:"1.2em", fontWeight:"500"}}>The shoe you need to keep running<br/> all over the world</div>
         </div>
        <div style={{paddingTop:"7%"}}>

                <div className='jumbotron shoedisplay' style={{backgroundColor:disps[numbr].color, width:"80%"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>

                            </div>
                            <div className='col-12 col-sm-6'>
                            
                                
                            <img src={disps[numbr].img} style={{width:"70%",marginLeft:"30%"}} alt={disps[number].id}/>
                            </div>
                        </div>
                    </div>
                    
                </div>





        </div>

     </div>
     {/* fourth section */}
     <div className='fourth'>
         <div className='container'>
             <div className='row'>
                 <div className='col-sm-6 lefty'>
                     <h1>Don't go alone<br/> Take <span style={{color:"rgb(245, 30, 66)"}}> Nike </span> with you</h1>
                     <div className='content '> with the massive cushion effect and well laid sole, you need no other 
                         companion wherever you go. Carefully designed for sports, and fashion.
                     </div>
                 </div>
                 <div className='col-sm-6 useflex'>
                     <div className='col-sm-6'>
                         <div className='imgbg imgbg1'>
                         <img src='img/1long.jpg'  alt='1'></img>

                         </div>
                         <div className='imgbg imgbg2'>
                         <img src="img/1short.jpg"  alt='1'></img>
                         </div>
                         
                         

                     </div>
                     <div className='col-sm-6'>
                         <div className='imgbg imgbg3'>
                         <img src='img/leg.jpg' alt='1'></img>

                         </div>
                         <div className='imgbg imgbg4'>
                         <img src="img/2long.jpg"  alt='1'></img>


                         </div>
                        
                         
                     </div>
                 </div>
             </div>
         </div>
     </div>

     {/* footer */}
     <footer>

        <span style={{color:"rgb(245, 30, 66)"}}>nike <i className='icofont-copyright'></i> 2022</span> 
        <div style={{color:"white"}}>Designed by Olarotimi Olaniran</div>
     </footer>
    </div>
  );
}

export default HomePage;
