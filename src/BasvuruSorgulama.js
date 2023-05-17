import { Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './logo.png';

function BasvuruSorgulama(){
    return(
        <div class="row">
        <div class="col-3" >
          <Sidebar/>
        </div>
        <div class="col-8">
          <div class="row mt-3 mb-4">
            <div class="col-4"><img src={logo} style={{width:"70px",height:"50px"}}/></div>
                <div class="col-6"><h4 class="mb-4">Cybermacs Başvuru Sorgulama</h4>
                   
                </div>
                <div class="col-2"></div>
                <hr/>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
              <h4>Başvuru Değerlendirme Aşamaları</h4>
              <p>
                CyberMACS programına kabul, rekabetçi bir temelde verilir ve başvuranlar, önceki akademik kayıtlarına göre değerlendirilir. Seçim belge tabanlıdır. Uygun başvuruların nihai değerlendirmesi ve nitelikli öğrencilerin sıralaması aşağıdaki kriterlere göre yapılır:
              <ol>
                <li>Önceki Çalışmaların Uygunluğu</li>
                <li>Akademik Performans</li>
                <li>Kurumun Tanınması ve Kalitesi</li>
                <li>CyberMACS Çalışmalarına Motivasyon ve Bağlılık</li>
                <li>İngilizce Dil Yeterliliği</li>
              </ol>
              </p>
              <div class="row bg-primary rounded" style={{width:"700px",height:"100px",marginTop:"100px"}}>
                <br/>
            
                  <h3 style={{marginTop:"20px",textAlign:"center"}}></h3>
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
export default BasvuruSorgulama;