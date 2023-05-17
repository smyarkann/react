import logo from './logo.png';
import { useNavigate } from 'react-router-dom';


function Register(){
  const navigate = useNavigate();
  function sifreKontrol () {

    var kullanici =[(document.getElementById("email").value), (document.getElementById("sifre").value)];
    var bilgiler=[(document.getElementById("ad").value),(document.getElementById("soyad").value),(document.getElementById("kimlik").value),(document.getElementById("email").value),(document.getElementById("dogumtarih").value)];
    
    var sifre2 = document.getElementById("resifre").value;
  
    var yazi = document.getElementById("sonuc");
   
    
    if (kullanici[1] == sifre2) {
    
        yazi.innerHTML = "Hesap Oluşturuldu!";
        navigate('/');
        
        
        
        sessionStorage.setItem("user", kullanici);
        sessionStorage.setItem("bilgiler", bilgiler);
    
    }
    else {
        yazi.innerHTML = "Şifreler Eşleşmiyor.";
        
    }
}
  
    return(
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <div class="row">
        
                <div className="col-4"></div>
                <div className="col-6"><img class="mt-4" src={logo} alt="" />
                <h2  class="mb-4 mt-4 ">Hesap Oluşturun</h2>
                </div>
                <div className="col-2"></div>
                </div>
                <form>
            <div class="row g-3 mb-3">
                <div class="col">
                    <label for="exampleFormControlInput1" class="form-label">Ad</label>
                  <input type="text" id="ad" class="form-control" placeholder="Ad" aria-label="First name"/>
                </div>
                <div class="col ">
                    <label for="exampleFormControlInput1" class="form-label">Soyad</label>
                  <input type="text" id="soyad" class="form-control" placeholder="Soyad" aria-label="Last name"/>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col">
                    <label for="exampleFormControlInput1" class="form-label">TC Kimlik No/Pasaport No</label>
                  <input type="text" id="kimlik" class="form-control" placeholder="" aria-label="First name"/>
                </div>
                <div class="col ">
                    <label for="exampleFormControlInput1" class="form-label">Doğum Tarihi</label>
                  <input type="date" id="dogumtarih" class="form-control" placeholder="" aria-label="Last name"/>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cinsiyet</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                     Kadın
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault2">
                      Erkek
                    </label>
                  </div>
                    
              </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Adresi</label>
                <input type="text" class="form-control" id="email" placeholder="isim@örnek.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Şifre</label>
                <input type="password" class="form-control" id="sifre" placeholder=""/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Şifre</label>
                <input type="password" class="form-control" id="resifre" placeholder=""/>
              </div>
         
              <div class="mb-3 ">
                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{sifreKontrol()}} >Kayıt ol</button>
                <button type="button" class="btn btn-secondary btn-lg btn-block">Temizle</button>
               </div>
               <p id="sonuc"></p>
               </form>
        </div>
        
        <div class="col-3"></div>
        
      </div>
      
    );
    
}
export default Register;