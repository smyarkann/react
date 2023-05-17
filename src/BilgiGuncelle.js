import Sidebar from "./Sidebar";
import logo from './logo.png';
import React, { useState, useEffect } from 'react';
function BilgiGuncelle(){
    
  function uyrukgoster(){
    if(document.getElementById("ikinciuyruk").value==1){
       document.getElementById("ikinciuyrukalani").style.display="";
    }
   
  }
  function engellidurumgoster(){
    if(document.getElementById("engellidurum").value==1){
       document.getElementById("engellibelgediv").style.display="";
    }
   
  }
  async function bilgiyukle(){
   var bilgiler = sessionStorage.getItem("kisiselbilgiler");
   bilgiler =bilgiler.split(",");
   document.getElementById("ad").value=bilgiler[0];
   document.getElementById("soyad").value=bilgiler[1];
   document.getElementById("kimlikno").value=+bilgiler[2];
   document.getElementById("email").value=bilgiler[3];
   document.getElementById("dogumtarihi").value=bilgiler[4];

   var iletisimbilgi=sessionStorage.getItem("iletisimbilgi");
   iletisimbilgi=iletisimbilgi.split(",");
   document.getElementById("telefon").value=iletisimbilgi[0];
   document.getElementById("ulke").value=iletisimbilgi[1];
   document.getElementById("sehir").value=iletisimbilgi[2];
   document.getElementById("adres").value=iletisimbilgi[3];

   var dokuman=sessionStorage.getItem("dokuman");
   dokuman=dokuman.split(",");
   document.getElementById("cv").value=dokuman[0];
   document.getElementById("diploma").value=dokuman[1];
   document.getElementById("yeterlilikbelgesi").value=dokuman[2];
   document.getElementById("niyetmektubu").value=dokuman[3];
   document.getElementById("engellibelgesi").value=dokuman[4];

  }
  function bilgigonder(){
    var bilgiler=[(document.getElementById("ad").value),(document.getElementById("soyad").value),(document.getElementById("kimlikno").value),(document.getElementById("email").value),(document.getElementById("dogumtarihi").value)];
    sessionStorage.setItem("bilgiler", bilgiler);
    alert("bilgiler güncellendi");
  }
  function belgeguncelle(){
    var dokuman=[(document.getElementById("ogrencibelgesi").value),(document.getElementById("cv").value),(document.getElementById("diploma").value),(document.getElementById("yeterlilikbelgesi").value),(document.getElementById("niyetmektubu").value),(document.getElementById("engellibelgesi").value)];
    sessionStorage.setItem("dokuman", dokuman);
    alert("bilgiler güncellendi");
  }
  useEffect(() => {
    bilgiyukle();
  
  });
    return(
        <div class="row">
            <div class="col-3"><Sidebar/></div>
            

            <div class="col-8">
          <div class="row mt-3 mb-4">
            <div class="col-4"><img src={logo} style={{width:"70px",height:"50px"}}/></div>
                <div class="col-6"><h4 class="mb-4">Cybermacs Başvuru Güncelleme</h4>
                   
                </div>
                <div class="col-2"></div>
                <hr/>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="container">

                
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             Kişisel Bilgi Güncelleme
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"> 
                                <div class="row mt-4">
                                    <div class="col-2"></div>
                                    <div class="col-8">
                                      <h4 style={{textAlign:"center"}}>Kişisel Bilgiler</h4>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Ad</label>
                                          <input type="text" class="form-control" id="ad" placeholder="Ad" aria-label="First name"/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">Soyad</label>
                                          <input type="text" class="form-control" id="soyad" placeholder="Soyad" aria-label="Last name"/>
                                        </div>
                                      </div>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">TC Kimlik/Pasaport No</label>
                                          <input type="text" class="form-control" id="kimlikno" placeholder="" aria-label="First name"/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">Doğum Tarihi</label>
                                          <input type="date" class="form-control" id="dogumtarihi" placeholder="" aria-label="Last name"/>
                                        </div>
                                      </div>
                                      <div class="mb-3">
                                       
                                          
                                            
                                      </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">E-Mail</label>
                                        <input type="email" class="form-control" id="email" placeholder="E-Mail"/>
                                      </div>
                                      <div class="mb-3">
                                      
                                        <label for="exampleFormControlInput1" class="form-label">Uyruk</label>
                                        <select class="form-select" id="uyruk" aria-label="Default select example">
                                          <option selected>Ülke Seçiniz</option>
                                          <option value="Türkiye">Türkiye</option>
                        <option value="ABD Virgin Adaları">ABD Virgin Adaları</option>
                        <option value="Almanya">Almanya</option>
                        <option value="Amerika Birleşik Devletleri">Amerika Birleşik Devletleri</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
                        <option value="Arjantin">Arjantin</option>
                        <option value="Arnavutluk">Arnavutluk</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Avustralya">Avustralya</option>
                        <option value="Avusturya">Avusturya</option>
                        <option value="Azerbaycan">Azerbaycan</option>
                        <option value="Bahama">Bahama</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahreyn">Bahreyn</option>
                        <option value="Bangladeş">Bangladeş</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belçika">Belçika</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Beyaz Rusya">Beyaz Rusya</option>
                        <option value="Birleşik Arap Emirlikleri">Birleşik Arap Emirlikleri</option>
                        <option value="Bolivya">Bolivya</option>
                        <option value="Bosna Hersek">Bosna Hersek</option>
                        <option value="Brezilya">Brezilya</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaristan">Bulgaristan</option>
                        <option value="Burma">Burma</option>
                        <option value="Cebelitarık">Cebelitarık</option>
                        <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
                        <option value="Çin">Çin</option>
                        <option value="Danimarka">Danimarka</option>
                        <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
                        <option value="Ekvator">Ekvator</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Endonezya">Endonezya</option>
                        <option value="Eritre">Eritre</option>
                        <option value="Ermenistan">Ermenistan</option>
                        <option value="Estonya">Estonya</option>
                        <option value="Fas">Fas</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Filipinler">Filipinler</option>
                        <option value="Finlandiya">Finlandiya</option>
                        <option value="Fransa">Fransa</option>
                        <option value="Fransız Polinezyası">Fransız Polinezyası</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadalup">Guadalup</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Güney Afrika">Güney Afrika</option>
                        <option value="Gürcistan">Gürcistan</option>
                        <option value="Hırvatistan">Hırvatistan</option>
                        <option value="Hindistan">Hindistan</option>
                        <option value="Hollanda">Hollanda</option>
                        <option value="Hollanda Antilleri">Hollanda Antilleri</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="İngiliz Virginia Adaları">İngiliz Virginia Adaları</option>
                        <option value="İngiltere">İngiltere</option>
                        <option value="İrlanda">İrlanda</option>
                        <option value="İspanya">İspanya</option>
                        <option value="İsrail">İsrail</option>
                        <option value="İsveç">İsveç</option>
                        <option value="İsviçre">İsviçre</option>
                        <option value="İtalya">İtalya</option>
                        <option value="İzlanda">İzlanda</option>
                        <option value="Jamaika">Jamaika</option>
                        <option value="Japonya">Japonya</option>
                        <option value="Kamboçya">Kamboçya</option>
                        <option value="Kanada">Kanada</option>
                        <option value="Katar">Katar</option>
                        <option value="Kayman Adaları">Kayman Adaları</option>
                        <option value="Kıbrıs">Kıbrıs</option>
                        <option value="Kolombiya">Kolombiya</option>
                        <option value="Kore">Kore</option>
                        <option value="Kosta Rika">Kosta Rika</option>
                        <option value="Kuveyt">Kuveyt</option>
                        <option value="Küba">Küba</option>
                        <option value="Letonya">Letonya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Litvanya">Litvanya</option>
                        <option value="Lübnan">Lübnan</option>
                        <option value="Lüksemburg">Lüksemburg</option>
                        <option value="Macaristan">Macaristan</option>
                        <option value="Makedonya">Makedonya</option>
                        <option value="Maldivler">Maldivler</option>
                        <option value="Malezya">Malezya</option>
                        <option value="Malta">Malta</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Meksika">Meksika</option>
                        <option value="Mısır">Mısır</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monako">Monako</option>
                        <option value="Mozambik">Mozambik</option>
                        <option value="Nikaragua">Nikaragua</option>
                        <option value="Norveç">Norveç</option>
                        <option value="Özbekistan">Özbekistan</option>
                        <option value="Panama">Panama</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Polonya">Polonya</option>
                        <option value="Portekiz">Portekiz</option>
                        <option value="Porto Riko">Porto Riko</option>
                        <option value="Romanya">Romanya</option>
                        <option value="Rusya">Rusya</option>
                        <option value="Saint Kitts ve Nevis">Saint Kitts ve Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seyşel">Seyşel</option>
                        <option value="Singapur">Singapur</option>
                        <option value="Slovakya">Slovakya</option>
                        <option value="Slovenya">Slovenya</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Suriye">Suriye</option>
                        <option value="Suudi Arabistan">Suudi Arabistan</option>
                        <option value="Şili">Şili</option>
                        <option value="Tayland">Tayland</option>
                        <option value="Tayvan">Tayvan</option>
                        <option value="Tunus">Tunus</option>
                        <option value="Turks ve Caicos Adaları">Turks ve Caicos Adaları</option>
                        <option value="Ukrayna">Ukrayna</option>
                        <option value="Umman">Umman</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Ürdün">Ürdün</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yeni Zelanda">Yeni Zelanda</option>
                        <option value="Yunanistan">Yunanistan</option>
                                        </select>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="1" id="ikinciuyruk" onClick={uyrukgoster}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                          İkinci Uyruk
                                        </label>
                                      </div>
                                      <div class="mb-3"id="ikinciuyrukalani" style={{display:"none"}}>
                                        <br/>
                                        <label for="exampleFormControlInput1" class="form-label">İkinci Uyruk</label>
                                        <select class="form-select" aria-label="Default select example">
                                          <option selected>Ülke Seçiniz</option>
                                          <option value="Türkiye">Türkiye</option>
                        <option value="ABD Virgin Adaları">ABD Virgin Adaları</option>
                        <option value="Almanya">Almanya</option>
                        <option value="Amerika Birleşik Devletleri">Amerika Birleşik Devletleri</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
                        <option value="Arjantin">Arjantin</option>
                        <option value="Arnavutluk">Arnavutluk</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Avustralya">Avustralya</option>
                        <option value="Avusturya">Avusturya</option>
                        <option value="Azerbaycan">Azerbaycan</option>
                        <option value="Bahama">Bahama</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahreyn">Bahreyn</option>
                        <option value="Bangladeş">Bangladeş</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belçika">Belçika</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Beyaz Rusya">Beyaz Rusya</option>
                        <option value="Birleşik Arap Emirlikleri">Birleşik Arap Emirlikleri</option>
                        <option value="Bolivya">Bolivya</option>
                        <option value="Bosna Hersek">Bosna Hersek</option>
                        <option value="Brezilya">Brezilya</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaristan">Bulgaristan</option>
                        <option value="Burma">Burma</option>
                        <option value="Cebelitarık">Cebelitarık</option>
                        <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
                        <option value="Çin">Çin</option>
                        <option value="Danimarka">Danimarka</option>
                        <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
                        <option value="Ekvator">Ekvator</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Endonezya">Endonezya</option>
                        <option value="Eritre">Eritre</option>
                        <option value="Ermenistan">Ermenistan</option>
                        <option value="Estonya">Estonya</option>
                        <option value="Fas">Fas</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Filipinler">Filipinler</option>
                        <option value="Finlandiya">Finlandiya</option>
                        <option value="Fransa">Fransa</option>
                        <option value="Fransız Polinezyası">Fransız Polinezyası</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadalup">Guadalup</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Güney Afrika">Güney Afrika</option>
                        <option value="Gürcistan">Gürcistan</option>
                        <option value="Hırvatistan">Hırvatistan</option>
                        <option value="Hindistan">Hindistan</option>
                        <option value="Hollanda">Hollanda</option>
                        <option value="Hollanda Antilleri">Hollanda Antilleri</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="İngiliz Virginia Adaları">İngiliz Virginia Adaları</option>
                        <option value="İngiltere">İngiltere</option>
                        <option value="İrlanda">İrlanda</option>
                        <option value="İspanya">İspanya</option>
                        <option value="İsrail">İsrail</option>
                        <option value="İsveç">İsveç</option>
                        <option value="İsviçre">İsviçre</option>
                        <option value="İtalya">İtalya</option>
                        <option value="İzlanda">İzlanda</option>
                        <option value="Jamaika">Jamaika</option>
                        <option value="Japonya">Japonya</option>
                        <option value="Kamboçya">Kamboçya</option>
                        <option value="Kanada">Kanada</option>
                        <option value="Katar">Katar</option>
                        <option value="Kayman Adaları">Kayman Adaları</option>
                        <option value="Kıbrıs">Kıbrıs</option>
                        <option value="Kolombiya">Kolombiya</option>
                        <option value="Kore">Kore</option>
                        <option value="Kosta Rika">Kosta Rika</option>
                        <option value="Kuveyt">Kuveyt</option>
                        <option value="Küba">Küba</option>
                        <option value="Letonya">Letonya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Litvanya">Litvanya</option>
                        <option value="Lübnan">Lübnan</option>
                        <option value="Lüksemburg">Lüksemburg</option>
                        <option value="Macaristan">Macaristan</option>
                        <option value="Makedonya">Makedonya</option>
                        <option value="Maldivler">Maldivler</option>
                        <option value="Malezya">Malezya</option>
                        <option value="Malta">Malta</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Meksika">Meksika</option>
                        <option value="Mısır">Mısır</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monako">Monako</option>
                        <option value="Mozambik">Mozambik</option>
                        <option value="Nikaragua">Nikaragua</option>
                        <option value="Norveç">Norveç</option>
                        <option value="Özbekistan">Özbekistan</option>
                        <option value="Panama">Panama</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Polonya">Polonya</option>
                        <option value="Portekiz">Portekiz</option>
                        <option value="Porto Riko">Porto Riko</option>
                        <option value="Romanya">Romanya</option>
                        <option value="Rusya">Rusya</option>
                        <option value="Saint Kitts ve Nevis">Saint Kitts ve Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seyşel">Seyşel</option>
                        <option value="Singapur">Singapur</option>
                        <option value="Slovakya">Slovakya</option>
                        <option value="Slovenya">Slovenya</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Suriye">Suriye</option>
                        <option value="Suudi Arabistan">Suudi Arabistan</option>
                        <option value="Şili">Şili</option>
                        <option value="Tayland">Tayland</option>
                        <option value="Tayvan">Tayvan</option>
                        <option value="Tunus">Tunus</option>
                        <option value="Turks ve Caicos Adaları">Turks ve Caicos Adaları</option>
                        <option value="Ukrayna">Ukrayna</option>
                        <option value="Umman">Umman</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Ürdün">Ürdün</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yeni Zelanda">Yeni Zelanda</option>
                        <option value="Yunanistan">Yunanistan</option>
                                        </select>
                                      </div>
                                      <div class="mb-3 " style={{marginLeft:"150px"}}>
                                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={bilgigonder}>Güncelle</button>
                                       </div>
                                    </div>
                                    <div class="col-2"></div>
                                
                                  </div>
                               </div>                              
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Döküman Güncelleme
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="row mt-4">
                                    <div class="col-2"></div>
                                    <div class="col-8">
                                      <h4 style={{textAlign:"center"}}>Dökümanlar</h4>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Öğrenci Belgesi</label>
                                          <input type="File" class="form-control" id="ogrencibelgesi"placeholder="" aria-label=""/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">CV</label>
                                          <input type="file" class="form-control" id="cv" placeholder="" aria-label=""/>
                                        </div>
                                      </div>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Diploma</label>
                                          <input type="file" class="form-control" id="diploma" placeholder="" aria-label=""/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">Yeterlilik Belgesi</label>
                                          <input type="file" class="form-control" id="yeterlilikbelgesi" placeholder="" aria-label=""/>
                                        </div>
                                        
                                      </div>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Pasaport</label>
                                          <input type="file" class="form-control" id="pasaport" placeholder="" aria-label=""/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">Niyet Mektubu</label>
                                          <input type="file" class="form-control" id="niyetmektubu" placeholder="" aria-label=""/>
                                        </div>
                                        
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" id="engellidurum" onClick={engellidurumgoster}type="checkbox" value="1" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                          Engelli Durum
                                        </label>
                                      </div>
                                      <div class="mb-3" id="engellibelgediv" style={{display:'none'}}>
                                        <label for="exampleFormControlInput1" class="form-label">Engelli Belgesi</label>
                                        <input type="file" class="form-control" id="engellibelgesi" placeholder=""/>
                                      </div>
                                    
                                      
                                      <div class="mb-3 " style={{marginLeft:"150px"}}>
                                        <button type="button" class="btn btn-primary btn-lg btn-block " onClick={belgeguncelle}>Güncelle</button>
                                       </div>
                                    </div>
                                    <div class="col-2"></div>
                                
                                  </div>
                               
                                
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              İletişim Bilgileri Güncelleme
                            </button>
                          </h2>
                          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="row mt-4">
                                    <div class="col-2"></div>
                                    <div class="col-8">
                                      <h4 style={{textAlign:"center"}}>İletişim Bilgileri</h4>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Telefon</label>
                                          <input type="text" id="telefon" class="form-control" placeholder="" aria-label=""/>
                                        </div>
                                        
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Ülke</label>
                                            <select class="form-select"  id="ulke"aria-label="Default select example">
                                                <option selected>Ülke Seçiniz</option>
                                                <option value="Türkiye">Türkiye</option>
                              <option value="ABD Virgin Adaları">ABD Virgin Adaları</option>
                              <option value="Almanya">Almanya</option>
                              <option value="Amerika Birleşik Devletleri">Amerika Birleşik Devletleri</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
                              <option value="Arjantin">Arjantin</option>
                              <option value="Arnavutluk">Arnavutluk</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Avustralya">Avustralya</option>
                              <option value="Avusturya">Avusturya</option>
                              <option value="Azerbaycan">Azerbaycan</option>
                              <option value="Bahama">Bahama</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahreyn">Bahreyn</option>
                              <option value="Bangladeş">Bangladeş</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belçika">Belçika</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Beyaz Rusya">Beyaz Rusya</option>
                              <option value="Birleşik Arap Emirlikleri">Birleşik Arap Emirlikleri</option>
                              <option value="Bolivya">Bolivya</option>
                              <option value="Bosna Hersek">Bosna Hersek</option>
                              <option value="Brezilya">Brezilya</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaristan">Bulgaristan</option>
                              <option value="Burma">Burma</option>
                              <option value="Cebelitarık">Cebelitarık</option>
                              <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
                              <option value="Çin">Çin</option>
                              <option value="Danimarka">Danimarka</option>
                              <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
                              <option value="Ekvator">Ekvator</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Endonezya">Endonezya</option>
                              <option value="Eritre">Eritre</option>
                              <option value="Ermenistan">Ermenistan</option>
                              <option value="Estonya">Estonya</option>
                              <option value="Fas">Fas</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Filipinler">Filipinler</option>
                              <option value="Finlandiya">Finlandiya</option>
                              <option value="Fransa">Fransa</option>
                              <option value="Fransız Polinezyası">Fransız Polinezyası</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadalup">Guadalup</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Güney Afrika">Güney Afrika</option>
                              <option value="Gürcistan">Gürcistan</option>
                              <option value="Hırvatistan">Hırvatistan</option>
                              <option value="Hindistan">Hindistan</option>
                              <option value="Hollanda">Hollanda</option>
                              <option value="Hollanda Antilleri">Hollanda Antilleri</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="İngiliz Virginia Adaları">İngiliz Virginia Adaları</option>
                              <option value="İngiltere">İngiltere</option>
                              <option value="İrlanda">İrlanda</option>
                              <option value="İspanya">İspanya</option>
                              <option value="İsrail">İsrail</option>
                              <option value="İsveç">İsveç</option>
                              <option value="İsviçre">İsviçre</option>
                              <option value="İtalya">İtalya</option>
                              <option value="İzlanda">İzlanda</option>
                              <option value="Jamaika">Jamaika</option>
                              <option value="Japonya">Japonya</option>
                              <option value="Kamboçya">Kamboçya</option>
                              <option value="Kanada">Kanada</option>
                              <option value="Katar">Katar</option>
                              <option value="Kayman Adaları">Kayman Adaları</option>
                              <option value="Kıbrıs">Kıbrıs</option>
                              <option value="Kolombiya">Kolombiya</option>
                              <option value="Kore">Kore</option>
                              <option value="Kosta Rika">Kosta Rika</option>
                              <option value="Kuveyt">Kuveyt</option>
                              <option value="Küba">Küba</option>
                              <option value="Letonya">Letonya</option>
                              <option value="Liechtenstein">Liechtenstein</option>
                              <option value="Litvanya">Litvanya</option>
                              <option value="Lübnan">Lübnan</option>
                              <option value="Lüksemburg">Lüksemburg</option>
                              <option value="Macaristan">Macaristan</option>
                              <option value="Makedonya">Makedonya</option>
                              <option value="Maldivler">Maldivler</option>
                              <option value="Malezya">Malezya</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Meksika">Meksika</option>
                              <option value="Mısır">Mısır</option>
                              <option value="Moldova">Moldova</option>
                              <option value="Monako">Monako</option>
                              <option value="Mozambik">Mozambik</option>
                              <option value="Nikaragua">Nikaragua</option>
                              <option value="Norveç">Norveç</option>
                              <option value="Özbekistan">Özbekistan</option>
                              <option value="Panama">Panama</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Polonya">Polonya</option>
                              <option value="Portekiz">Portekiz</option>
                              <option value="Porto Riko">Porto Riko</option>
                              <option value="Romanya">Romanya</option>
                              <option value="Rusya">Rusya</option>
                              <option value="Saint Kitts ve Nevis">Saint Kitts ve Nevis</option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Seyşel">Seyşel</option>
                              <option value="Singapur">Singapur</option>
                              <option value="Slovakya">Slovakya</option>
                              <option value="Slovenya">Slovenya</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Suriye">Suriye</option>
                              <option value="Suudi Arabistan">Suudi Arabistan</option>
                              <option value="Şili">Şili</option>
                              <option value="Tayland">Tayland</option>
                              <option value="Tayvan">Tayvan</option>
                              <option value="Tunus">Tunus</option>
                              <option value="Turks ve Caicos Adaları">Turks ve Caicos Adaları</option>
                              <option value="Ukrayna">Ukrayna</option>
                              <option value="Umman">Umman</option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Ürdün">Ürdün</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Yeni Zelanda">Yeni Zelanda</option>
                              <option value="Yunanistan">Yunanistan</option>
                                              </select>
                                            </div>
                                            
                            </div>
                                      <div class="row g-3 mb-3">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label">Şehir</label>
                                          <input type="text" id="sehir"class="form-control" placeholder="" aria-label=""/>
                                        </div>
                                        <div class="col ">
                                            <label for="exampleFormControlInput1" class="form-label">Adres</label>
                                          <input type="text" id="adres"class="form-control"  placeholder="" aria-label=""/>
                                        </div>
                                      </div>
                                      
                                      
                                      <div class="mb-3 " style={{marginLeft:"150px"}}>
                                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={bilgigonder}>Güncelle</button>
                                       
                                       </div>
                                    </div>
                                    <div class="col-2"></div>
                                
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                    <div class="col-2"></div>
            </div>
            </div>
            
            
       
        </div>
    );
}
export default BilgiGuncelle;