import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as MenuItem } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './SidebarKataloq.css'
import img1 from "./image/phone.png";
import img2 from './image/laptop.png';
import img3 from './image/watch (2).png';
import img4 from './image/television (2).png';
import img5 from './image/camera.png';
import img6 from './image/fridge (1).png';
import img7 from './image/laundry.png';
import img8 from './image/console.png';
import img9 from './image/chip.png';
import './PgHeader.css'
import App from "./App";


 
const Katalog = ({content}) => {
  const [openMenu, setOpenMenu] =useState(false)

  const [openMenur, setOpenMenur] = useState(false)

  const OpenedMenu =() => {
    setOpenMenu(true)
    setOpenMenur(true)
  }
  const CloseMenu =() =>{
    setOpenMenu(false)
    setOpenMenur(false)
  }

 
  return (
    <div className="kat1">
          <div onMouseDown={CloseMenu} className={`menu-header_${openMenur?"active" :"inactive"}`}></div>
      <ul className="menyu">
        <li className="menyu2">
           <a  onClick={OpenedMenu} href="#">
            <FontAwesomeIcon className="menyuicon" icon={MenuItem} />
            <span >{content.Kataloq}</span>           
          </a>       
          {
                openMenu ?
          
                    <div className={`dropdown-menu.${openMenu?"active" :"inactive"}`} id="MenuSidebar">
                    <section className="sidebar" > 
        <div className='allmenuitem'></div>
          <ul className="mainkt">
            <li className="menyu01"> 
              <a className="kt q1" href="#">
                <img src={img1} />
                <span>{content.Telefon}</span>
              </a>
              <div className="menyudiv1">
                <ul className="menyu1">
                  <li className="Smartfon"> <a href=""> <span>{content.Smartfon}</span>  </a> </li>
                  <li> <a  href=""> <span className="Apple">Apple</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14 Pro</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14 Pro Max</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 13 Pro max</span>  </a> </li>
                  <li className="lastapple"> <a href=""> <span>Iphone 13</span>  </a> </li>
                  <li className="Samsung"> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy S22 Ultra</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy S22</span>  </a> </li>
                  <li> <a href=""> <span>Samsung  Galaxy Z Fold</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy A73</span>  </a> </li>
                  <li className="lastsamsung"> <a href=""> <span>Samsung Galaxy A52</span>  </a> </li>
                  <li className="Xiaomi"> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Mi 12T</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Poco X3 Pro</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Mi 11 Ultra</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Redmi Note 11 Pro</span>  </a> </li>
                </ul>
                <ul className="menyu12">
                <li className="Smartfon"> <a href=""> <span>{content.Smartfon}</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Realme</span>  </a> </li>
                  <li> <a href=""> <span>One Plus</span>  </a> </li>
                  <li> <a href=""> <span>Blacview</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>Oppo</span>  </a> </li>
                  <li> <a href=""> <span>Nothing</span>  </a> </li>
                  <li> <a href=""> <span>Itel</span>  </a> </li>
                  <li> <a href=""> <span>TCL</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>Vivo</span>  </a> </li>
                  <li> <a href=""> <span>Motorola</span>  </a> </li>
                  <li> <a href=""> <span>Nokia</span>  </a> </li>
                  <li> <a href=""> <span>Google</span>  </a> </li>
                  <li> <a href=""> <span>Tecno</span>  </a> </li>    
                </ul>
              <ul className="menyu11">
              <li className="Smartfon"> <a href=""> <span>{content.Planset}</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>Microsoft</span>  </a> </li>
                  <li> <a href=""> <span>Blacview</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>TCL</span>  </a> </li>  
                              
                </ul>
                </div>
            </li>
            <li className="menyu02">
              <a className="kt 2" href="#">
                <img src={img2} />
                <span>{content.Noutbuk}</span>
              </a>
              <div className="menyudiv2">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>{content.Noutbuks}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Ev}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Oyun1}</span>  </a> </li>
                  <li> <a href=""> <span>Ultrabook</span>  </a> </li>
                  <li> <a href=""> <span>Macbook</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>{content.Noutbuks}</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>MSI</span>  </a> </li>
                  <li> <a href=""> <span>HP</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Vivo</span>  </a> </li>
                  <li> <a href=""> <span>Acer</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>Dell</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>{content.Komputer}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Monoblok}</span>  </a> </li>
                  <li> <a href=""> <span>{content.SistemB}</span>  </a> </li>                 
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.Monitor}</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>HP</span>  </a> </li>
                  <li> <a href=""> <span>Dell</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>Aoec</span>  </a> </li>
                  <li className="komputer"> <a href=""> <span>{content.Komphiss}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Qida}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Soyutma}</span>  </a> </li>                
                  <li> <a href=""> <span>{content.Prosessor}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Plata}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Operativ}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Qrafik}</span>  </a> </li>
                  <li> <a href=""> <span>UPS</span>  </a> </li>
                </ul>
                
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>{content.Kompaksess}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Klaviatura}</span>  </a> </li>
                  <li> <a href=""> <span>Mouse</span>  </a> </li>
                  <li> <a href=""> <span>Mousepad</span>  </a> </li>
                  <li> <a href=""> <span>{content.Kamera}</span>  </a> </li>
                  <li> <a href=""> <span>Modem</span>  </a> </li>
                  <li> <a href=""> <span>{content.Portativ}</span>  </a> </li>
                  <li> <a href=""> <span>SSD</span>  </a> </li>
                  <li> <a href=""> <span>{content.Usb}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Eynek}</span>  </a> </li>    
                  <li> <a href=""> <span>{content.Antivirus}</span>  </a> </li>                               
                  <li> <a href=""> <span>{content.Mikrofon}</span>  </a> </li>                               
                  <li> <a href=""> <span>{content.Temizlik}</span>  </a> </li>
                </ul>         
                </div>
            </li>
            <li className="menyu03">
              <a className="kt 3" href="#">
                <img src={img3} />
                <span>{content.Saat}</span>
              </a>
              <div className="menyudiv3">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>{content.Smart}</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Mykronor</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Omthing</span>  </a> </li>
                  <li> <a href=""> <span>Haylou</span>  </a> </li>
                  <li> <a href=""> <span>1More</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>{content.Smartqolbaq}</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>               
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.Qulaqliqlar}</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>2E</span>  </a> </li>
                  <li> <a href=""> <span>A4Tech</span>  </a> </li>
                  <li> <a href=""> <span>Alcatel</span>  </a> </li>
                  <li> <a href=""> <span>Baseus</span>  </a> </li>
                  <li> <a href=""> <span>Bang&Olufsen</span>  </a> </li>
                  <li> <a href=""> <span>Beats</span>  </a> </li>
                  <li className="komputer"> <a href=""> <span>{content.Saatlar}</span>  </a> </li>
                  <li> <a href=""> <span>Casio</span>  </a> </li>
                  <li> <a href=""> <span>Orient</span>  </a> </li>                
                  <li> <a href=""> <span>Cover</span>  </a> </li>
                  <li> <a href=""> <span>Q&Q</span>  </a> </li>
                  <li> <a href=""> <span>Ingersoll</span>  </a> </li>
                  <li> <a href=""> <span>VMF</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>{content.TelAks}</span>  </a> </li>
                  <li> <a href=""> <span>{content.AdapterUSB}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Adaptersimsiz}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Telefonqablar??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.EkranQoruyucu}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Yadda??kart??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.PowerBank}</span>  </a> </li>
                  <li> <a href=""> <span>{content.USB}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Stilus}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Monopod}</span>  </a> </li>    
                  <li> <a href=""> <span>{content.Portativprinterl??r}</span>  </a> </li>                               
                  <li> <a href=""> <span>{content.N??mr????t??r??c??}</span>  </a> </li>                               
                  <li> <a href=""> <span>{content.Qulaql??qqablar??}</span>  </a> </li>   
                  <li> <a href=""> <span>{content.??tativliled??????q}</span>  </a> </li>                               
                  <li> <a href=""> <span>{content.Mikrofon2}</span>  </a> </li>                               
                </ul>         
                </div>
            </li>
            <li className="menyu04">
              <a className="kt 4" href="#">
                <img src={img4} />
                <span>{content.Tv}</span>
                <div className="menyudiv4">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>{content.Televizorlar}</span>  </a> </li>
                  <li> <a href=""> <span>LG</span>  </a> </li>
                  <li> <a href=""> <span>Neos</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Skyworth</span>  </a> </li>
                  <li> <a href=""> <span>Sony</span>  </a> </li>
                  <li> <a href=""> <span>Ar??elik</span>  </a> </li>
                  <li> <a href=""> <span>Zimmer</span>  </a> </li>
                  <li> <a href=""> <span>Sunny</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>AIWA</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>  
                  <li> <a href=""> <span>Lotus</span>  </a> </li>               
                  <li> <a href=""> <span>Yoshira</span>  </a> </li>               
                  <li> <a href=""> <span>Hisense</span>  </a> </li>  
                  <li> <a href=""> <span>TCL</span>  </a> </li>               
                  <li> <a href=""> <span>Toshiba</span>  </a> </li>  
                  <li> <a href=""> <span>Artel</span>  </a> </li>               
                  <li> <a href=""> <span>Beko</span>  </a> </li>              
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.TeleAks}</span>  </a> </li>
                  <li> <a href=""> <span>{content.TVBox}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Kron??teyn}</span>  </a> </li>
                  <li> <a href=""> <span>{content.HDMILabell??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.????r??iv??l??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Tvekranqoruyucular??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.AUXnaqill??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Vnaqill??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Optiknaqill??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Televizoraltl??????}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Pultlar}</span>  </a> </li>
                 <li> <a href=""> <span>{content.Mikrafon}</span>  </a> </li>
                  <li> <a href=""> <span>{content.T??mizlikvasit??l??ri}</span>  </a> </li>                
                  <li> <a href=""> <span>{content.Adapterl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Deynekl??r}</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>Audio</span>  </a> </li>
                  <li> <a href=""> <span>{content.Soundbarlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Mikrafon}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Portativakustikl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Smartakustikl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.S??sg??cl??ndiricil??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Qulaql??qaksessuarlar??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Pioneeraksessuarlar??}</span>  </a> </li>                        
                </ul>         
                </div>        
              </a>
            </li>
            <li className="menyu05">
              <a className="kt 5" href="#">
                <img src={img5} />
                <span>{content.Foto}</span>
              </a>
              <div className="menyudiv5">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span> {content.G??zg??l??}</span>  </a> </li>
                  <li> <a href=""> <span>Canon</span>  </a> </li>
                  <li> <a href=""> <span>Leica</span>  </a> </li>
                  <li> <a href=""> <span>Nikon</span>  </a> </li>
                  <li> <a href=""> <span>Sony</span>  </a> </li>
                  <li> <a href=""> <span>Actions</span>  </a> </li>  
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.Fotos}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Obyektivl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Foto??antalar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.??tativl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Fotostabilizatorlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Fotoka????zlar}</span>  </a> </li>
                </ul>         
                </div>
            </li>
            <li className="menyu06">
              <a className="kt 6" href="#">
                <img src={img6} />
                <span> {content.BoyukM}</span>
                </a>
                <div className="menyudiv6">
                <ul className="menyu1">

                  <li className="Noutbuk"> <a href=""> <span>{content.Stasionar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Paltaryuyanma????nlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Qabyuyanlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Sobalar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Mikrodal??al??soba}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Plit??l??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.QurutmaMa????nlar??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Dondurucu}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Dispenser}</span>  </a> </li>
                  <li> <a href=""> <span>{content.????rabdolablar??}</span>  </a> </li>    
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.Qura??d??r??lantexnika}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Soyuducu}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Paltaryuyanma????nlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Qabyuyanlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Sobalar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Mikrodal??al??soba}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Bi??irm??panel}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Aspiratorlar}</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>{content.??qlim}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Kombisisteml??ri}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Kombiaksessuarlar??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.??ransobalar??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Kondisioner}</span>  </a> </li>
                  <li> <a href=""> <span>{content.S??rinke??}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Radiatorlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Q??zd??r??c??lar}</span>  </a> </li>  
                  <li> <a href=""> <span>{content.Suq??zd??r??c??kalonkalar}</span>  </a> </li>                        
                  <li> <a href=""> <span>{content.Havat??mizl??yicil??r}</span>  </a> </li>                        
                  <li> <a href=""> <span>{content.Kamin}</span>  </a> </li>                        

                </ul>         
                </div>
                </li>
                <li className="menyu07">
                <a className="kt 7" href="#">
                <img src={img7} />
                <span>{content.KicikM}</span>
              </a>
              <div className="menyudiv7">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>{content.M??tb??x}</span>  </a> </li>
                  <li> <a href=""> <span>{content.??t????k??nl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.??ir??????k??n}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Mikser}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Blenderl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.??aydanlar}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Multibi??iricil??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Tosterl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Q??hv??bi??ir??nl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.M??tb??xrobotu} </span>  </a> </li>
                  <li> <a href=""> <span>{content.????r??kbi??ir??nl??r}</span>  </a> </li>
                  <li> <a href=""> <span>{content.Elektrikplit??l??r}</span>  </a> </li>  
                  <li> <a href=""> <span>{content.Fritozlar}</span>  </a> </li>               
                  <li> <a href=""> <span>{content.Q??hv????y??d??nl??r}</span>  </a> </li>               
                  <li> <a href=""> <span>{content.Do??ray??c??lar}</span>  </a> </li>  
                  <li> <a href=""> <span>{content.Buxarl??bi??iricil??r}</span>  </a> </li>               
                  <li> <a href=""> <span>{content.Elektriklisac}</span>  </a> </li>  
                  <li> <a href=""> <span>Artel</span>  </a> </li>               
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>{content.Robots}</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Roborock</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>{content.Buxar}</span>  </a> </li>
                  <li> <a href=""> <span>Karcher</span>  </a> </li>
                  <li> <a href=""> <span>Tefal</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>
                  <li> <a href=""> <span>Zelmer</span>  </a> </li>
                  <li> <a href=""> <span>Bort</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>{content.??t??}</span>  </a> </li>
                  <li> <a href=""> <span>Tefal</span>  </a> </li>                
                  <li> <a href=""> <span>Polaris</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>Bosch</span>  </a> </li>
                  <li> <a href=""> <span>Beko</span>  </a> </li>
                  <li> <a href=""> <span>Karcher</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>{content.Tozsoronlar}</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>LG</span>  </a> </li>
                  <li> <a href=""> <span>Fakir</span>  </a> </li>
                  <li> <a href=""> <span>Ardesto</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>  
                  <li> <a href=""> <span>Polaris</span>  </a> </li>                        
                  <li> <a href=""> <span>Tefal</span>  </a> </li>                        
                  <li> <a href=""> <span>Bosch</span>  </a> </li>    
                  <li> <a href=""> <span>Hitachi</span>  </a> </li>                        
                  <li> <a href=""> <span>Beko</span>  </a> </li>                        
                  <li> <a href=""> <span>Baseus</span>  </a> </li>                        
                </ul>         
                </div>
              </li>
            
            <li className="menyu08">
              <a className="kt 8" href="#">
                <img src={img8} />
                <span>{content.Oyun}</span>
              </a>
              <div className="menyudiv8">
              <ul className="menyu1">
                <li className="Noutbuk"> <a href=""> <span>{content.Oyun}</span>  </a> </li>
                <li> <a href=""> <span>Sony</span>  </a> </li>
                <li> <a href=""> <span>Xbox</span>  </a> </li>
                <li> <a href=""> <span>Oculus</span>  </a> </li>
                <li> <a href=""> <span>Nintendo</span>  </a> </li>      
              </ul>
              <ul className="menyu12">
              <li className="Noutbuk"> <a href=""> <span>{content.Playstation}</span>  </a> </li>
                <li> <a href=""> <span> {content.Playstation2} </span>  </a> </li>
                <li> <a href=""> <span>{content.Playstation3}</span>  </a> </li>
                <li> <a href=""> <span>{content.Playstation4} </span>  </a> </li>
              </ul>   
                </div>
            </li>
            <li className="menyu08">
              <a className="kt8" href="#">
                <img src={img9} />
                <span>{content.Texno}</span>
              </a>
              </li>
          </ul>
        </section>
                    </div>
                    : null }
        </li>
      </ul>
    </div>
  );
};

export default Katalog;
