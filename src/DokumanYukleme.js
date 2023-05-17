import { Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './logo.png';
function DokumanYukleme(){

  function dosyagonder(){
    var dokumanlar =[(document.getElementById("ogrencibelgesi").value), (document.getElementById("cvbelgesi").value),(document.getElementById("diplomabelgesi").value),(document.getElementById("yeterlilikbelgesi").value),(document.getElementById("pasaportbelgesi").value),(document.getElementById("niyetmektubu").value),(document.getElementById("engellibelgesi").value)];
        sessionStorage.setItem("dokuman", dokumanlar);
        alert("Başvuru Kaydınız başarıyla tamamlanmıştır.");
    }
    function goster(){
      if(document.getElementById("engellidurum").value==1){
         document.getElementById("engelli").style.display="";
      }
     
    }
    function tamamlamayuzde(){
      var yuzde = parseInt(sessionStorage.getItem("yuzde"));
      yuzde=yuzde+34;
      sessionStorage.setItem("yuzde", yuzde);
    }
    return(
        <div class="row">
        <div class="col-3" >
          <Sidebar/>
        </div>
        <div class="col-8">
          <div class="row mt-3 mb-4">
            <div class="col-4"><img src={logo} style={{width:"70px",height:"50px"}}/></div>
                <div class="col-6"><h4 class="mb-4">Cybermacs Başvuru Formu</h4>
                   
                </div>
                <div class="col-2"></div>
                <hr/>
          </div>
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
                  <input type="file" class="form-control" id="cvbelgesi"placeholder="" aria-label=""/>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col">
                    <label for="exampleFormControlInput1" class="form-label">Diploma</label>
                  <input type="file" class="form-control" id="diplomabelgesi" placeholder="" aria-label=""/>
                </div>
                <div class="col ">
                    <label for="exampleFormControlInput1" class="form-label">Yeterlilik Belgesi</label>
                  <input type="file" class="form-control" id="yeterlilikbelgesi"  placeholder="" aria-label=""/>
                </div>
                
              </div>
              <div class="row g-3 mb-3">
                <div class="col">
                    <label for="exampleFormControlInput1" class="form-label">Pasaport</label>
                  <input type="file" class="form-control" id="pasaportbelgesi"placeholder="" aria-label=""/>
                </div>
                <div class="col ">
                    <label for="exampleFormControlInput1" class="form-label">Niyet Mektubu</label>
                  <input type="file" class="form-control"  id="niyetmektubu"placeholder="" aria-label=""/>
                </div>
                
              </div>
              <div class="form-check" >
                <input class="form-check-input" id="engellidurum" type="checkbox" onClick={goster} value="1"/>
                <label class="form-check-label"  for="flexCheckDefault">
                  Engelli Durum
                </label>
              </div>
              <div class="mb-3" id="engelli"style={{display:"none"}}>
                <label for="exampleFormControlInput1" class="form-label">Engelli Belgesi</label>
                <input type="file" class="form-control" id="engellibelgesi" placeholder=""/>
              </div>
            
              
              <div class="mb-3 " style={{marginLeft:"150px"}}>
                <Link><button type="button" class="btn btn-primary btn-lg btn-block " onClick={dosyagonder} >Gönder</button></Link>
                <button type="button" class="btn btn-secondary btn-lg btn-block">Temizle</button>
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
export default DokumanYukleme;