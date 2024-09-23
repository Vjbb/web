import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='App'>
        <header className='App-header'>
        <div class="header-container">
            <div class="header-container2">
                <div class="logoimg">
                    <div>
                        <a href="">
                            <img src="./picture/Preview.png" alt=""/>
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
      </div>
  );
}

export default App;
