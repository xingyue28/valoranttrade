import './App.css';

import { ethers } from 'ethers';
import contractABI from './GiveForeverABI.json';

const contractAddress = '0x3BDb6DF984cd55761A76c4b1C0C0954d4f92C987'; // Goerli
let provider = new ethers.providers.Web3Provider(window.ethereum);
let contract = new ethers.Contract(contractAddress, contractABI, provider);
let signer;

const connect = async () => {
  await provider.send("eth_requestAccounts",[]);
  signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, signer);
  const userAddress = await signer.getAddress();
  console.log(userAddress);
}

const deposit = async () => {
  let userAmount = document.getElementById('deposit-amount').value;
  const weiAmount = ethers.utils.parseEther(userAmount);
  const tx = await contract.deposit({ value: weiAmount});
  const receipt = await tx.wait();
}

const withdraw = async () => {
  await contract.withdraw();
}

function App() {
  return (
  <html>
    <head>
      <title>Valorant交易平台</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="App.css" />
    </head>
    <body class="homepage is-preload">
      <div id="page-wrapper">

          <section id="header">
            <div id="navv">
              <br></br>
              <h1><a href="index.html">Valorant交易平台</a></h1>

              <nav id="nav">
                <ul>
                  <li class="current"><a href="#">首頁</a></li>
                  <li><a href="#intro">介紹</a></li>
                  <li><a href="#main">商品</a></li>
                  <li><a href="#dataa">討論</a></li>
                  <li><a href="#footer">歷程</a></li>
                </ul>
              </nav>
            </div>

            
              <section id="banner">
                <header>
                  <h2>誠摯獻上最好的服務</h2>
                  <p>ouo</p>
                </header>
              </section>

            
              <section id="intro" class="container">
                <div class="row">
                  <div class="col-4 col-12-medium">
                    <section class="first">
                      <i class="icon solid featured fa-cog"></i>
                      <header>
                        <h2>透明</h2>
                      </header>
                      <p>確保所有交易信息對買賣雙方都可見，包括帳號描述、價格。</p>
                    </section>
                  </div>
                  <div class="col-4 col-12-medium">
                    <section class="middle">
                      <i class="icon solid featured alt fa-bolt"></i>
                      <header>
                        <h2>快速</h2>
                      </header>
                      <p>交易仰賴系統，不需等待仲介或買賣雙方才完成!</p>
                    </section>
                  </div>
                  <div class="col-4 col-12-medium">
                    <section class="last">
                      <i class="icon solid featured alt2 fa-star"></i>
                      <header>
                        <h2>安全</h2>
                      </header>
                      <p>利用區塊鏈及智能合約創造的公平線上交易平台</p>
                    </section>
                  </div>
                </div>
                <footer>
                  <ul class="actions">
                  </ul>
                </footer>
              </section>

          </section>

        
          <section id="main">
            <div class="container">
              <div class="row">
                <div class="col-12">

                  
                    <section>
                      <header class="major">
                        <h2>商品</h2>
                      </header>
                      <div class="row">
                        <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="" alt="" /></a>
                            <header>
                              <h3>商品1</h3>
                            </header>
                              <img src="https://cdn.discordapp.com/attachments/1040654046467457024/1150683891745706024/IMG_0133.jpg" width={250} />
                            <footer>
                              <ul class="actions">
                                <li><a href="left-sidebar.js" class="button alt">購買</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                            <header>
                              <h3>商品2</h3>
                            </header>
                            <img src="https://cdn.discordapp.com/attachments/1040654046467457024/1150683891745706024/IMG_0133.jpg" width={250} />
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button alt">購買</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
                            <header>
                              <h3>商品3</h3>
                            </header>
                            <img src="https://cdn.discordapp.com/attachments/1040654046467457024/1150683891745706024/IMG_0133.jpg" width={250} />
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button alt">購買</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>
                            <header>
                              <h3>商品4</h3>
                            </header>
                            <img src="https://cdn.discordapp.com/attachments/1040654046467457024/1150683891745706024/IMG_0133.jpg" width={250} />
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button alt">購買</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic06.jpg" alt="" /></a>
                            <header>
                              <h3>商品5</h3>
                            </header>
                            <img src="https://cdn.discordapp.com/attachments/1040654046467457024/1150683891745706024/IMG_0133.jpg" width={250} />
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button alt">購買</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                      </div>
                    </section>

                </div>
                <div class="col-12">

                  
                    <section>
                      <div id="dataa">
                      <header class="major">
                        <h2>討論區</h2>
                      </header>
                      <div class="row">
                        <div class="col-6 col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
                            <header>
                              <h3>問個 這帳號值多少</h3>
                              <p>45 分鐘前</p>
                            </header>
                            <p>想估號</p>
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button icon solid fa-file-alt">繼續閱讀</a></li>
                                <li><a href="#" class="button alt icon solid fa-comment">33 則評論</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-6 col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                            <header>
                              <h3>聊天</h3>
                              <p>2分鐘前</p>
                            </header>
                            <p>開個聊天樓</p>
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button icon solid fa-file-alt">繼續閱讀</a></li>
                                <li><a href="#" class="button alt icon solid fa-comment">92 則評論</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                      </div>
                      </div>
                    </section>

                </div>
              </div>
            </div>
          </section>

        
          <section id="footer">
            <div class="container">
              <div class="row">
                <div class="col-8 col-12-medium">
                  <section>
                    <header>
                      <h2>網站歷程</h2>
                    </header>
                    <ul class="dates">
                      <li>
                        <span class="date">Sep <strong>11</strong></span>
                        <h3><a href="#">網站開始建立</a></h3>
                        <p>策畫已久的網站終於在視野中出現了!</p>
                      </li>
                      <li>
                        <span class="date">Sep <strong>20</strong></span>
                        <h3><a href="#">網站首頁大致完成</a></h3>
                        <p>完成美術及排版</p>
                      </li>
                      <li>
                        <span class="date">ouo <strong>99</strong></span>
                        <h3><a href="#">Magna tempus lorem feugiat</a></h3>
                        <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
                      </li>
                      <li>
                        <span class="date">ouo <strong>99</strong></span>
                        <h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
                        <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
                      </li>
                      <li>
                        <span class="date">ouo <strong>99</strong></span>
                        <h3><a href="#">Blandit tempus aliquam?</a></h3>
                        <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section>
                    <header>
                      <h2>這個網站是什麼?</h2>
                    </header>
                    <a href="#" class="image featured"><img src="images/pic10.jpg" alt="" /></a>
                    <p>
                      這是由我們兩人打造出的VALORANT(特戰英豪)交易網站，其中使用區塊鍊及智能合約技術使交易更加安全便利。
                    </p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button">更多</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
	  						
  						</div>
  					</div>
  				</section>

  		</div>

	  </body>
  </html>
  );
}

export default App;