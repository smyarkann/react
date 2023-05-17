import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  { useState, useEffect } from 'react';
import axios from 'axios';


function Sidebar(props){
  const navigate = useNavigate();
  var isLogin;
    async function bilgiyukle(){
        var bilgiler = sessionStorage.getItem("bilgiler");
       bilgiler =bilgiler.split(",");
       document.getElementById("kullaniciadi").innerHTML=bilgiler[0]+" "+bilgiler[1];
       
      }
      useEffect(() => {
        bilgiyukle();
    
      });
      async function CikisYap(navigate){

        const bilgi = sessionStorage.getItem("bilgiler");
        const tc=bilgi[2];
    
    
        try{
    
            const response = await axios.post('http://localhost:3001/signout',
                {tc}
            );
    
            if(response.status === 200){
              navigate('/');
            }else{
                alert("Şu an cikisinizi yapamiyoruz.");
            }
    
    
        }catch(err){
            console.error(err);
        }
    
    }
 

    return(
        <>
        {/*SIDEBAR*/}
        
         <div className="d-flex flex-column flex-shrink-0 p-3 bg-light"  style={{width:"250px",height:"100vh"}}>
           <svg className="bi pe-none me-2"style={{marginTop:"0px"}} ></svg>
              <span className="fs-4 " >CYBERMACS</span>
              <hr></hr>
              <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                  <svg className="bi pe-none me-2" style={{width:"16px" ,height:"16px"}}></svg>
                  <Link to="/portal"><span className="nav-link active ">Hesabım</span></Link>
                  </li>
                  <li>
                  <svg className="bi pe-none me-2" style={{width:"16px" ,height:"16px"}}></svg>
                  <Link to="/portal/BasvuruFormu"><span className="nav-link link-dark ">Başvuru</span></Link>
                  </li>
                  <li>
                  <svg className="bi pe-none me-2" style={{width:"16px" ,height:"16px"}}></svg>
                  <Link to="/portal/BilgiGuncelle"><span className="nav-link link-dark"> Bilgi Güncelleme</span></Link>
                  </li>
                  <li>
                  <svg className="bi pe-none me-2" style={{width:"16px" ,height:"16px"}}></svg>
                  <Link to="/portal/BasvuruSorgulama"><span className="nav-link link-dark" >Başvuru Sorgulama</span></Link>
                  </li>
                  <li>
                  <svg className="bi pe-none me-2" style={{width:"16px" ,height:"16px"}}></svg>
                  <Link to="/portal/Sifredegistirme"><span className="nav-link link-dark" style={{marginBottom:"150px"}}>Şifre Yenileme</span></Link>
                  </li>

              </ul>
              <hr>
              </hr>
              <div class="dropdown">
              <span class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <strong id="kullaniciadi"></strong>
              </span>
              <ul class="dropdown-menu text-small shadow">
                <li ><Link to="/"><span class="dropdown-item" onClick={CikisYap} >Çıkış Yap</span></Link></li>
              </ul>
            </div>
              
            </div>
       
        {/*SIDEBAR END*/}
        </>
    );


}

export default Sidebar;