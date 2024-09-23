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
                        <div><a href="">Home</a></div>
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
          <div class="discount">
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
                  <div>
                      <button> &lt; </button>
                  </div>
                  <div class="main-shoes">
                      <img src={NewShoes} alt=""/>
                  </div>
                  <div>
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

        </main>
      </div>
  );
}

export default App;
