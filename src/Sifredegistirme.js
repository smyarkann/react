import Sidebar from "./Sidebar";
import logo from './logo.png';


function Sifredegistirme(){
    async function sifredegis() {
        var kullanici = sessionStorage.getItem("user");
        kullanici = kullanici.split(",");
        var sifre=kullanici[1];
        alert(sifre);
        var eskisifre = document.getElementById("eskisifre").value;
        var yazi = document.getElementById("sonuc");
        var yenisifre=document.getElementById("yenisifre").value;
        var yenisifretekrar=document.getElementById("yenisifretekrar").value;
        alert(yenisifre);
    if ( eskisifre == sifre) {
       
      if(yenisifre == yenisifretekrar){
        var kullanici =[kullanici[0],(document.getElementById("yenisifre").value)];
        sessionStorage.setItem("user", kullanici);
        yazi.innerHTML="Şifreniz değiştirildi";
        
      }else{
        yazi.innerHTML="Şifreler eşleşmiyor";
      }
         
    }else {
         yazi.innerHTML = "Eski Şifre Hatalı";
        
       }
    }
    return(
        <div class="row">
        <div class="col-3" >
          <Sidebar/>
        </div>
        <div class="col-8">
          <div class="row mt-3 mb-4">
            <div class="col-4"><img src={logo} style={{width:"70px",height:"50px"}}/></div>
                <div class="col-6"><h4 class="mb-4">Şifre Yenileme</h4>
                   
                </div>
                <div class="col-2"></div>
                <hr/>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
              
            <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Eski Şifre</span>
  <input type="text" id="eskisifre" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Yeni Şifre</span>
  <input type="text" id="yenisifre"class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Yeni Sifre Tekrar</span>
  <input type="text" id="yenisifretekrar" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<button type="button" class="btn btn-primary" onClick={sifredegis}>Şifre Yenile</button>
<p id="sonuc"></p>
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
export default Sifredegistirme;