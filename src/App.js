import logo from './logo.svg';
import './App.css';
import newShoes from './image/newshoes.jpeg';
import newShoes2 from './image/newshoes2.jpeg';
import newShoes3 from './image/newshoes3.jpeg';
import newshoes4 from './image/newshoes4.jpeg';
import newShoes5 from './image/newshoes5.jpeg';
import NewShoes from './image/new-shoes.jpeg';
import Preview from './image/Preview.png';
import puma1 from './image/puma-shoes1.jpeg';
import adidas2 from './image/adidas-shoes2.jpg';
import nike4 from './image/nike-shoes4.jpeg';
import images from './image/images.jpeg'
import nike2 from './image/nike-shoes2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
      <div className='App'>
        <header className='App-header'>
        <div class="header-container">
            <div class="header-container2">
                <div class="logoimg">
                    <div>
                        <a href="">
                            <img src={Preview} alt=""/>
                        </a>
                    </div>
                </div>

                <div class="addition">
                    <div class="navigation">
                        <div><a href="#discount">Home</a></div>
                        <div><a href="">About</a></div>
                        <div><a href="">Sales</a></div>
                        <div><a href="">Contact</a></div>
                    </div>


                    <div class="search1">
                        <div class="header-search">
                                <input type="text"/>
                            </div>
                            <div class="header-basket">
                                <a href="#" class="cart-icon">
                                    🛒
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </header>

        <main>
          <div class="discount" id='discount'>
              <div class="discount-container">
                  <div class="adidas">
                      <div class="adidas-discount">
                          <div class="ad">
                              <img src={puma1} alt=""/>
                          </div>
                          <div class="price1">
                              <div class="old-price1">бағасы <br />
                                                  <span>50%</span><br/>
                                                      жеңілдік</div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src={adidas2} alt=""/>
                              </div>
                              <div class="price2">
                                  <div class="old-price2">бағасы <br/>
                                                      <span>70%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src={nike4} alt=""/>
                              </div>
                              <div class="price3">
                                  <div class="old-price3">бағасы <br/>
                                                      <span>40%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src={images} alt=""/>
                              </div>
                              <div class="price4">
                                  <div class="old-price4">бағасы <br/>
                                                      <span>15%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src={nike2} alt=""/>
                              </div>
                              <div class="price5">
                                  <div class="old-price4">бағасы <br/>
                                                      <span>10%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src="./picture/nike-shoes3.jpeg" alt=""/>
                              </div>
                              <div class="price6">
                                  <div class="old-price4">бағасы <br/>
                                                      <span>25%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="adidas-discount">
                              <div class="ad">
                                  <img src="./picture/puma-shoes3.jpeg" alt=""/>
                              </div>
                              <div class="price7">
                                  <div class="old-price4">бағасы <br/>
                                                      <span>30%</span><br/>
                                                          жеңілдік</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="new-product">
              <div class="extra-shoes">
                  <div>
                      <div><img src={newShoes} alt=""/></div>
                      <div><img src={newShoes5} alt=""/></div>
                      <div><img src={newShoes2} alt=""/></div>
                      <div><img src={newShoes3} alt=""/></div>
                      <div><img src={newshoes4} alt=""/></div>
                  </div>
              </div>
              
              <div class="product">
                  <div className='left-btn'>
                      <button> &lt; </button>
                  </div>
                  <div class="main-shoes">
                      <img src={NewShoes} alt=""/>
                  </div>
                  <div className='right-btn'>
                      <button> &gt; </button>
                  </div>
              </div>
              
              <div class="sale-shoes">
                  <div class="sale">
                      <div class="text-newshoes">
                          <span>Жаңа аяқ киім Ерлерге арналған кроссовкалар. Сәнді аяқ киім Trainer Race ақ сәнді лоферлер</span>
                      </div>
                      <div class="price">
                          34 990 ТЕҢГЕ <br/>
                          <span>жеткізу бағасы 3 000 теңге</span>
                      </div>
                      <div class="select-size-color">
                          <div class="select">
                              <label for="shoe-size">Аяқ киім өлшемі:</label>
                              <select name="" id="shoe-size">
                                  <option value="38">38 cm</option>
                                  <option value="39">39 cm</option>
                                  <option value="40">40 cm</option>
                                  <option value="41">41 cm</option>
                                  <option value="42">42 cm</option>
                                  <option value="43">43 cm</option>
                                  <option value="44">44 cm</option>
                                  <option value="45">45 cm</option>
                              </select>
                          </div>
                          <div class="select">
                              <label for="shoe-color">Аяқ киім өлшемі:</label>
                              <select name="" id="shoe-color">
                                  <option value="1">Қоңыр</option>
                                  <option value="2">Жасыл</option>
                                  <option value="3">Қара</option>
                                  <option value="4">Ақ</option>
                                  <option value="5">Қызыл</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="product-price">
            <div className="product-container">
              <div className='product-word'>
                <div className='word-container'>Өнімдер</div>
              </div>
              <div className='price-product'>
                <div className='basket-container1'>
                  <div className='first-container'>

                    <div className='container1'>
                      <div className='product-image1'><img src={newShoes} alt="" id='a'/></div>
                      
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>
                    <div className='container2'>
                      <div className='product-image2'><img src={newShoes2} alt="" id='2'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container3">
                      <div className='product-image3'><img src={newshoes4} alt="" id='3'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container4">  
                      <div className='product-image4'><img src={newShoes5} alt="" id='4'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container5">
                      <div className='product-image5'><img src={newshoes4} alt="" id='5'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div> 

                    <div className="container6">
                      <div className='product-image6'><img src={newShoes5} alt="" id='6'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='price-product'>
                <div className='basket-container1'>
                  <div className='first-container'>

                    <div className='container1'>
                      <div className='product-image1'><img src={newShoes} alt="" id='a'/></div>
                      
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>
                    <div className='container2'>
                      <div className='product-image2'><img src={newShoes2} alt="" id='2'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container3">
                      <div className='product-image3'><img src={newshoes4} alt="" id='3'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container4">  
                      <div className='product-image4'><img src={newShoes5} alt="" id='4'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>

                    <div className="container5">
                      <div className='product-image5'><img src={newshoes4} alt="" id='5'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div> 

                    <div className="container6">
                      <div className='product-image6'><img src={newShoes5} alt="" id='6'/></div>
                      <div className='product-button'>
                        <div>Аяқ-киім</div>
                        <div>35 490 теңге</div>
                        <div><button className='product-btn'>Сатып алу</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='basket-container2'>
                </div>
              </div>

              </div>
            </div>
          </div>

          <div className='about'>
            <div className='about-container'>
              <div className='about-word'>Біздің компания</div>
              <div className='about-body'>
                  <p>
                  "KIMEX "және" Grazie " – 1994 жылы құрылған Қазақстандағы ең ірі мульти-брендтік дүкендер желісі. <br />

                  Бүгін біз Қазақстан Республикасының аумағындағы fashion сегментіндегі бөлшек сауданың ең ірі өкілдерінің бірі болып табыламыз. <br />

                  Желіде әйгілі еуропалық брендтердің бүкіл отбасы үшін ең жақсы аяқ киім, Киім және аксессуарлар топтамалары, сондай-ақ өз дизайнының жоғары сапалы өнімдері бар. <br />

                  Жылдан жылға біз өсуді және дамуды жалғастырамыз, қатысу географиясын кеңейтеміз, қызмет көрсету сапасын жақсартамыз және тауарларды онлайн сатып алу мүмкіндігімен оны сатып алушыларымыз үшін ыңғайлы етеміз. <br />

                  <span>Біздің миссиямыз-қанағаттанған клиент</span> <br />
                  <span>Біздің көзқарасымыз-өз ісіндегі ең жақсысы</span> <br />

                  Біздің Компанияның айрықша ерекшелігі-команда ішінде де, біздің бизнестің барлық бағыттарында да отбасылық құндылықтар принципі! <br />

                  Сайтта және бөлшек сауда дүкендерінде тауарлардың кең ассортименті ұсынылған: ерлер, әйелдер және балалар киімдері, аяқ киім және аксессуарлар – сөмкелер, белбеулер, әмияндар, қолшатырлар, шарфтар, қолғаптар және т.б. сіз курьерлік қызметтер арқылы Қазақстан Республикасының бүкіл аумағы бойынша жеткізумен тауарға интернет-дүкенде тапсырыс бере аласыз. <br />
                  </p>
              </div>
            </div>
          </div>

        </main>

        <footer>
          <div className='footer-container'>
            <div><span>Покупателю</span><br />
              <a href="">Доставка и оплата</a><br />
              <a href="">Бонус</a>
            </div>
            <div><span>О нас</span><br />
              <a href="">Магазин</a> <br />
              <a href="">Карьера</a> <br />
              <a href="">Новости</a> <br />
              <a href="">Контакт</a>
            </div>
            <div><span>Партнерам</span><br />
              <a href="">Marketplace</a> <br />
              <a href="">Intertop</a>
            </div>
            <div className='social-media'><span>Социальные сети</span><br />
              <a href="" ><FontAwesomeIcon icon={ faInstagram } size='2x'/></a>
              <a href=""><FontAwesomeIcon icon={ faTelegram} size='2x'/></a>
              <a href="https://wa.me/+7785621707"><FontAwesomeIcon icon={ faWhatsapp } size='2x'/></a>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
