
import './App.css';
import img1 from "./essets/imagesFolders/imagesFolders/footer_icon.png"
import img2 from "./essets/imagesFolders/imagesFolders/home.png"
import img3 from "./essets/imagesFolders/imagesFolders/home1.png"
import img4 from "./essets/imagesFolders/imagesFolders/Group 7 (1).png"
import img5 from "./essets/imagesFolders/imagesFolders/Group 7 (2).png"
import img6 from "./essets/imagesFolders/imagesFolders/Group 7 (3).png"
import img7 from "./essets/imagesFolders/imagesFolders/Group 41.png"
import img8 from "./essets/imagesFolders/imagesFolders/Group 724.png"
import img9 from "./essets/imagesFolders/imagesFolders/Group.png"
import img10 from "./essets/imagesFolders/imagesFolders/Group 481775.png"
import img11 from "./essets/imagesFolders/imagesFolders/ero.png"
import img12 from "./essets/imagesFolders/imagesFolders/1mg.png"
import img13 from "./essets/imagesFolders/imagesFolders/Image.png"
import img14 from "./essets/imagesFolders/imagesFolders/Image (1).png"
import img15 from "./essets/imagesFolders/imagesFolders/Vector.png"
import img16 from "./essets/imagesFolders/imagesFolders/Vector35.png"
import img17 from "./essets/imagesFolders/imagesFolders/Vector36.png"
import img18 from "./essets/imagesFolders/imagesFolders/Vector37.png"
import img19 from "./essets/imagesFolders/imagesFolders/footer_icon.png"
import img20 from "./essets/imagesFolders/imagesFolders/Vector (1).png"
import img21 from "./essets/imagesFolders/imagesFolders/Vector (2).png"
import img22 from "./essets/imagesFolders/imagesFolders/Vector (3).png"


function App() {
  return (
    <div className="App">
      <header className='container '>
        <nav class="navbar navbar-expand-lg p-3 ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={img1} className='setColor' alt="" /></a>
            <button class="navbar-toggler custom-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item custom-nav-item">
                  <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item custom-nav-item">
                  <a class="nav-link text-white" href="#">About Us</a>
                </li>
                <li class="nav-item custom-nav-item">
                  <a class="nav-link text-white" href="#">Features</a>
                </li>
                <li class="nav-item custom-nav-item">
                  <a class="nav-link text-white" href="#">Solution</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="container-fluid mt-5">
        <div class="row">

          <div class="col-md-6 text-white p-5 ">
            <p className='sizeImg1'> <img src={img3} alt="" /></p>
            <h1 className='FontSize'>The Next</h1>
            <h1 className='setColorImg FontSize'>Generation</h1>
            <h1 className='FontSize'>Payment Method.</h1>
            <p className='mt-5'>Our team of experts uses a methodology to identify <br /> the credit cards most likely to fit your needs. <br />
              We examine annual percentage rates, annual fees.</p>
          </div>

          <div class="col-md-6">
            <img src={img2} className='setImgsize' alt="SADS" />
          </div>
        </div>
      </div>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-4 ">
            <h4 className='colorSet4 '> <span className='colorSet5 '>3800+  </span>   USER ACTIVE</h4>
          </div>
          <div className="col-md-4 col-sm-4 ">
            <h4 className='colorSet4 '> <span className='colorSet5 '>3800+  </span>   USER ACTIVE</h4>
          </div>
          <div className="col-md-4 col-sm-4">
            <h4 className='colorSet7 '> <span className='colorSet5 '>3800+  </span>   USER ACTIVE</h4>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 text-white mt-5">
            <h1 className='mt-5 textSizehading'>You do the business, we’ll handle the money.</h1>
            <h5 className='mt-5 textSizehading1'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</h5>
            <button className='btn btn-primary mt-5 px-5 p-3'> Get Started </button>
          </div>
          <div className="col-md-6 mt-5">

            <div class="card custom-card mb-3">
              <div class=" card-body d-flex">
                <div className="icon">
                  <img src={img4} alt="dfsdfdf" />
                </div>
                <div className="content">
                  <h2> Rewards</h2>
                  <p className='textSize12'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
              </div>
            </div>

            <div class="card custom-card mb-3">
              <div class=" card-body d-flex">
                <div className="icon">
                  <img src={img5} alt="dfsdfdf" />
                </div>
                <div className="content">
                  <h2>100% Secured</h2>
                  <p className='textSize12'>We take proactive steps make sure your information and transactions are secure.</p>
                </div>
              </div>
            </div>
            <div class="card custom-card mb-3">
              <div class=" card-body d-flex">
                <div className="icon">
                  <img src={img6} alt="dfsdfdf" />
                </div>
                <div className="content">
                  <h2>Balance Transfer</h2>
                  <p className='textSize12'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 ">
            <img src={img7} className='imgCover' alt="" />
          </div>
          <div className="col-md-6 text-white pt-5">
            <h1 className='fontSize'>Easily control your billing & invoicing.</h1>
            <p className='fontSize44'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className=" mt-5">
              <img src={img8} alt="" />
              <img src={img9} className='px-5' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 text-white">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className='fontSize5'>Find a better card deal in few easy steps.</h1>
            <p className='fontSize44'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <button className='btn btn-primary px-5 p-3 mt-5'> Get Started</button>
          </div>
          <div className="col-md-6">
            <img src={img10} className='setimgsize22' alt="" />
          </div>
        </div>
      </div>

      <div className="container mt-5 p-5 text-white">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className='fontSize5'>What people are saying about us</h1>
          </div>
          <div className="col-md-6 p-5">
            <h4>Everything you need to accept card payments and grow your business anywhere on the planet.</h4>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div class="card custom-card mb-3">
              <div class=" card-body ">
                <div className="icon">
                  <img src={img11} alt="dfsdfdf" />
                </div>
                <div className="content mt-3">

                  <p className='textSize12'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                  <div className="setprofiles mb-5 mt-4 d-flex">
                    <img src={img13} alt="" />
                    <div className="profiles px-4">
                      <h5>Herman Jensen</h5>
                      <h6>Founder & Leader</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4">

            <div class="card custom-card  mb-3">
              <div class=" card-body ">
                <div className="icon">
                  <img src={img11} alt="dfsdfdf" />
                </div>
                <div className="content mt-3">

                  <p className='textSize12'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                  <div className="setprofiles mb-5 mt-5 d-flex">
                    <img src={img12} style={{ width: '52px' }} alt="" />
                    <div className="profiles px-4">
                      <h5>Herman Jensen</h5>
                      <h6>Founder & Leader</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4">

            <div class="card custom-card mb-3">
              <div class=" card-body ">
                <div className="icon">
                  <img src={img11} style={{ width: '52px' }} alt="dfsdfdf" />
                </div>
                <div className="content mt-3">

                  <p className='textSize12'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                  <div className="setprofiles mb-5 mt-4  d-flex">
                    <img src={img14} alt="" />
                    <div className="profiles px-4">
                      <h5>Herman Jensen</h5>
                      <h6>Founder & Leader</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-3 text-center">
            <img src={img15} style={{width:"200px"}} alt="" />
          </div>
          <div className="col-md-3 text-center">
            <img src={img16} style={{width:"200px"}} alt="" />
          </div>
          <div className="col-md-3 text-center">
            <img src={img17} style={{width:"200px"}} alt="" />
          </div>
          <div className="col-md-3 text-center">
            <img src={img18} style={{width:"200px"}} alt="" />
          </div>
        </div>
      </div>
       <div className="container bg-Set">
        <div className="row p-5 text-white">
          <div className="col-md-8 " >
                <h1 style={{fontSize:"50px"}}>Let’s try our service now!</h1>
                <p style={{fontSize:"22px",paddingTop:"30px"}}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>
          <div className="col-md-4" style={{textAlign:"center",paddingTop:"70px"}}>
             <button className='btn btn-primary px-5 p-3'> Get Start</button>
          </div>
        </div>
       </div>
       <div className="container mt-5 pt-5 text-white">
  <div className="row">
    <div className="col-md-6 p-5">
      <ul className="custom-list">
        <li><img src={img19} style={{width: "150px"}} alt="Image Description" /></li>
        <li className="pt-4">A new way to make the payments easy, reliable, and secure.</li>
      </ul>
    </div>
    <div className="col-md-2">
      <ul className="custom-list">
        <li><h5>Useful Links</h5></li>
        <li>Content</li>
        <li>How it Works</li>
        <li>Create</li>
        <li>Explore</li>
        <li>Terms & Services</li>
      </ul>
    </div>
    <div className="col-md-2">
      <ul className="custom-list">
        <li><h5>Community</h5></li>
        <li>Help Center</li>
        <li>Partners</li>
        <li>Suggestions</li>
        <li>Blog</li>
        <li>Newsletters</li>
      </ul>
    </div>
    <div className="col-md-2">
      <ul className="custom-list">
        <li><h5>Partner</h5></li>
        <li>Our Partner</li>
        <li>Become a Partner</li>
      </ul>
    </div>
  </div>
</div>
<footer class=" text-white " >
    <div class="container pt-4 mt-4" style={{borderTop:"1px solid gray"}}>
      <div class="row">
        <div className="col-md-10">
            <h6> Copyright   2021 HookBank. All Rights Reserved.</h6>
        </div>
        <div className="col-md-2  " style={{textAlign:'end !importent'}}>
          <ul className='d-flex text-end custom-list'>
            <li className='px-4'>
              <img src={img20} alt="sacsd" />
            </li>
            <li className='px-4'>
              <img src={img21} alt="scsz" />
            </li>
            <li className='px-4'>
              <img src={img22} alt="zxc" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

    </div>
  );
}

export default App;
