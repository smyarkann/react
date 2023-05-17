import logo from './logo.png';
import React from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login(props){
  const navigate = useNavigate();
  function girisKontrol() {
    var yazi = document.getElementById("sonuc");
    var isLogin;
    var kullanici = sessionStorage.getItem("user");
    kullanici = kullanici.split(",");
    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;
   if (mail == kullanici[0] && sifre == kullanici[1]) {
     yazi.innerHTML = "Giriş bilgileri doğru!"; 
      navigate('/portal');
     isLogin = true;
     
     sessionStorage.setItem("isLogin", isLogin);
   }else {
     yazi.innerHTML = "Girilen bilgiler hatalı.";
    
   }
  }

    return(
        <div className="row bt-4">
            <div className="col-3"></div>
            <div className="col-6">
            <form>
                <div class="row">
                <div className="col-4"></div>
                <div className="col-6"><img class="mt-4" src={logo} alt="" /></div>
                <div className="col-2"></div>
                </div>
    
    <h1 class="h3 mb-3 fw-normal">Giriş Yapın</h1>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
      <label for="floatingInput">Email adresi</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="sifre" placeholder="Password"/>
      <label for="floatingPassword">Şifre</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Beni Hatırla
      </label>
      <p id="sonuc"></p>
    </div>
    <p>Hesabınız yok mu? <Link to="/kayit">Kayıt ol</Link></p>
    <button class="w-100 btn btn-lg btn-primary"  onClick={()=>{girisKontrol()}}>Giriş Yap</button>

    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
  </form>




            </div>
            <div className="col-3"></div>
     
        </div>
    );
}
export default Login;