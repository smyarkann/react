import { Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './logo.png';
import React, { useState, useEffect } from 'react';

function Portal(){
  
  async function bilgiyukle(){
    var bilgiler = sessionStorage.getItem("bilgiler");
   bilgiler =bilgiler.split(",");
   document.getElementById("kullaniciad").innerHTML="Hoşgeldiniz "+bilgiler[0];
   document.getElementById("bolumad").innerHTML="Ad:"+bilgiler[0];
   document.getElementById("bolumsoyad").innerHTML="Soyad:"+bilgiler[1];
   document.getElementById("bolumtc").innerHTML="Tc Kimlik No:"+bilgiler[2];
   document.getElementById("bolumemail").innerHTML="Mail:"+bilgiler[3];
   document.getElementById("bolumdogumtarihi").innerHTML="Doğum Tarihi:"+bilgiler[4];
  }
  async function dosyayukle(){
  var dokuman = sessionStorage.getItem("dokuman");
   dokuman =dokuman.split(",");
   document.getElementById("ogrencibel").innerHTML="Öğrenci Belgesi: "+dokuman[0];
   document.getElementById("cvbel").innerHTML="CV:  "+dokuman[1];
   document.getElementById("diplomabel").innerHTML="Diploma: "+dokuman[2];
   document.getElementById("yeterlilikbel").innerHTML="Yeterlilik Belgesi: "+dokuman[3];
   document.getElementById("pasaportbel").innerHTML="Pasaport Belgesi: "+dokuman[4];
   document.getElementById("niyetmek").innerHTML="Niyet Mektubu: "+dokuman[5];
   document.getElementById("engellibel").innerHTML="Engelli Belgesi: "+dokuman[6];
  }
  function tamamlamayuzde(){
  var yuzde = parseInt(sessionStorage.getItem("yuzde"));
  document.getElementById("yuzde").style.width=yuzde;
  document.getElementById("yuzde").innerHTML=yuzde+" %";
  
}
useEffect(() => {
  bilgiyukle();
  dosyayukle();
  tamamlamayuzde();
});
    return(
        <div class="row">
        <div class="col-3" >
          <Sidebar/>
        </div>
        <div class="col-8">
          <div class="row mt-3 mb-4">
            <div class="col-4"><img src={logo} style={{width:"70px",height:"50px"}}/></div>
                <div class="col-6"><h4 class="mb-4"><p id="kullaniciad"></p></h4>
                   
                </div>
                <div class="col-2"></div>
                <hr/>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
              <div class="row mb-4">
               
                <div class="col-5 bg-light" style={{height:"300px"}}>
                  <div id="bolumad" ></div>
                  <br/>
                  <div id="bolumsoyad" ></div>
                  <br/>
                  <div id="bolumtc" ></div>
                  <br/>
                  <div id="bolumemail" ></div>
                  <br/>
                  <div id="bolumdogumtarihi" ></div>
                  
                </div>
                <div class="col-1"></div>
                <div class="col-5 bg-light">
                  <span>Yüklenen Dosyalar</span>
                  <div id="ogrencibel"></div>
                  <br/>
                  <div id="cvbel"></div>
                  <br/>
                  <div id="diplomabel"></div>
                  <br/>
                  <div id="yeterlilikbel"></div>
                  <br/>
                  <div id="pasaportbel"></div>
                  <br/>
                  <div id="niyetmek"></div>
                  <br/>
                  <div id="engellibel"></div>

                </div>
                <div class="col-1"></div>
              </div>
              
                <div class="col-2"></div>
              </div>
              
              
            
            </div>
            <div class="row mt-4" >
                <div class="col-2"></div>
                <div class="col-8">
                    <h4>Başvuru Tamamlama Durumu</h4>

                    <div class="progress" role="progressbar" aria-label="Example with label" id="yuzdeoran"aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar"  id="yuzde"></div>
                      </div>
                </div>
            <div class="col-2"></div>
        
          </div>
        </div>
        
          
         
  <div class="b-example-divider"></div>

<div class="container pt-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      
      <span class="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"></li>
      <li class="ms-3"></li>
      <li class="ms-3"></li>
    </ul>
  </footer>
</div>
</div>
    );
}
export default Portal;