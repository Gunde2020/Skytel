import React from 'react'
import { Link} from 'react-router-dom'

export function HeaderTop(props){
    return(
        
  <body>
          <div id="site" className="site-wrapper bbb">
                <nav className="menu-left">
                    <ul className="">
                        
                            <li><a href="/"><span>Хувь хэрэглэгч</span></a></li>
                            <li><a href="/organisation"><span>Байгууллага</span></a></li>
                            <li><a href="/skymedia"><span>СКАЙмедиа</span></a></li>
                          <li> <Link to="/Login">Дилер</Link></li>
                                    
                        <li>
                            <a href="" className="level-1" >БҮТЭЭГДЭХҮҮН ҮЙЛЧИЛГЭЭ</a>
                                        <div className="left-sub-menu" style={{display: 'none'}}>
                                                    <a href="/p/postpaid">ДАРАА ТӨЛБӨРТ</a>
                                                    <a href="/p/prepaid">УРЬДЧИЛСАН ТӨЛБӨРТ</a>
                                                    <a href="/p/alphakids">Alpha Kids</a>
                                                    <a href="/p/data-service">ДАТА ҮЙЛЧИЛГЭЭ</a>
                                                    <a href="/family-triple/up">UP ҮЙЛЧИЛГЭЭ</a>
                                                    <a href="https://www.skytel.mn/skynet/index">SKYNET</a>
                                                    <a href="/p/intl-services">ОУ-Н ҮЙЛЧИЛГЭЭ</a>
                                                    <a href="/p/loyalty-services">ЛОЯАЛТИ ҮЙЛЧИЛГЭЭ</a>
                                            </div>
                            </li>
                        <li>
                            <a href="" className="level-1" >ОНЛАЙН САЛБАР</a>
                                        <div className="left-sub-menu" style={{display: 'none'}}>
                                                    <a href="/p/esim">eSIM</a>
                                                    <a href="/number/search">ШИНЭ ДУГААР</a>
                                                    <a href="/shop/card">ЦЭНЭГЛЭГЧ КАРТ</a>
                                                    <a href="/shop/product">ГАР УТАС, ТӨХӨӨРӨМЖ</a>
                                                    <a href="/content/faq/PHONE/ECOMMERCE">ТУСЛАМЖ</a>
                                            </div>
                            </li>
                        <li>
                            <a href="" className="level-1" >ТАНД ТУСАЛЪЯ</a>
                                        <div className="left-sub-menu" style={{display: 'none'}}>
                                                    <a href="/p/contact-us">БИДЭНТЭЙ ХОЛБОГДОХ</a>
                                                    <a href="/content/branches/Ulaanbaatar">ҮЙЛЧИЛГЭЭНИЙ САЛБАРУУД</a>
                                                    <a href="/p/instructions">ЗААВАР</a>
                                                    <a href="/p/qna">АСУУЛТ ХАРИУЛТ</a>
                                                    <a href="/p/coverage">ХАМРАХ ХҮРЭЭ</a>
                                                    <a href="/contract/">ХЭРЭГЛЭГЧИЙН БҮРТГЭЛ</a>
                                            </div>
                            </li>
                        <li>
                            <a href="" >КОНТЕНТ АППЛИКЕЙШН</a>
                        </li>
                        <li>
                            <a href="/src/Login">Нэвтрэх</a>
                        </li>
                        <li>
                            <a href="/shop/basket/"><span className="txt"><i className="fa fa-shopping-cart"></i></span><span className="shopping-cart-items"><span className="item-count">0</span></span></a>
                        </li>
                
                    </ul>
                </nav>
                <header id="header" className="header-showing">
                        <div  id="top-bar" className="hidden-sm hidden-xs">
                            <div className="container clearfix">
                                <nav className="responsive-site-nav pull-left">
                                <nav className="site-nav pull-left">
                                    <ul className="active">
                                        <li>
                                            <span style={{ color: '0000b4'}}></span>
                                        </li>
                                        <li className="active">
                                            <Link to="/">Хэрэглэгч</Link>
                                        </li>
                                            <li>
                                            <Link to="/home">Байгууллага</Link>
                                            </li>
                                            <li>
                                            <Link to="/about">Скаймедиа</Link>
                                            </li>
                                            <li> 
                                            <Link to="/users">Дилер</Link>
                                            </li>
                                    </ul>
                                </nav>
                                        <nav> 
                                            <div className="user-nav">
                                                <ul>
                                                    <li className="dropdown"><Link to="/users">Нэвтрэх</Link>
                                                    </li>
                                                    <li className="dropdown">
                                                        <span className="shopping-cart-items"><span className="item-count">0</span></span>
                                                        <a href="/shop/basket/"><span className="txt"><i className="fa fa-shopping-cart"></i></span></a>
                                                    </li>
                                                </ul>
                                            </div> 
                                        </nav>  
                                    
                                </nav>

                            </div>
                        </div>
                        <div id="nav-bar">
                            <div className="container clearfix">
                               
                                <div className="mobile-menu visible-sm visible-xs">
                                    <div className="mobile-toggle">
                                        <i className="fa fa-bars"></i>
                                    </div> 
                                </div>
                                    <div className="logo">
                                        <a href="/" alt="Skytel">
                                    <img src="/stat/image/logo.png" alt=""/></a>
                                    </div>
                         
                            <nav className="main-nav">
                                <ul className="nav hidden-xs hidden-sm">
                                  
                                    <li className="id_subitem menu-1">
                                        <a href="">БҮТЭЭГДЭХҮҮН ҮЙЛЧИЛГЭЭ </a>
                                    <ul className="subnav subitem-eight">
                                     
                                        <li>
                                            <a href="/p/postpaid">
                                                <span className="subnav-icon" style={{backgroundImage:'url(https://www.skytel.mn/app/images/menu-icon-2.png)'}}></span>ДАРАА ТӨЛБӨРТ </a>
                                        </li>
                                        <li>
                                            <a href="/p/prepaid">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-icon-1.png)'}} ><img></img></span>УРЬДЧИЛСАН ТӨЛБӨРТ</a>
                                        </li>
                                        <li>
                                            <a href="/p/alphakids">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/uploads/images/ic_aplha.png)'}}></span>Alpha Kids </a>
                                        </li>
                                        <li>
                                            <a href="/p/data-service">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-icon-3.png)'}}></span>ДАТА ҮЙЛЧИЛГЭЭ </a>
                                        </li>
                                        <li>
                                            <a href="/family-triple/up">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/mediamenu/12.png)'}}></span>UP ҮЙЛЧИЛГЭЭ </a>
                                        </li>
                                        <li>
                                            <a href="https://www.skytel.mn/skynet/index">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/uploads/images/SKYNET-icon.png)'}}></span>SKYNET </a>
                                        </li>
                                        <li>
                                            <a href="/p/intl-services">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-icon-5.png)'}}></span>
                                                ОУ-Н ҮЙЛЧИЛГЭЭ                                         </a>
                                        </li>
                                        <li>
                                            <a href="/p/loyalty-services">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-icon-3.png)'}}></span> ЛОЯАЛТИ ҮЙЛЧИЛГЭЭ </a>
                                        </li>
                                    </ul>
                                    </li>
                    <li className="id_subitem menu-2">
                        
                        <a href="">ОНЛАЙН САЛБАР</a>                                                                                                          
                        <ul className="subnav subitem-five">
                                        <li>
                                            <a href="/p/esim">
                                                <span className="subnav-icon ddd" style={{ backgroundImage:'url(https://www.skytel.mn/uploads/images/esimicon2.png)' }}></span>
                                                 <span >e</span>SIM       
                                                                                   </a>
                                        </li>
                                         <li>
                                            <a href="/number/search">
                                                <span className="subnav-icon" style={{ backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-new-number.png)' }}></span>
                                                ШИНЭ ДУГААР                                       </a>
                                        </li>
                                        <li>
                                            <a href="/shop/card">
                                                <span className="subnav-icon" style={{ backgroundImage:'url(https://www.skytel.mn/app/images/menu-pri-card.png)' }}></span>
                                                ЦЭНЭГЛЭГЧ КАРТ                                       </a>
                                        </li>
                                                                            <li>
                                            <a href="/shop/product">
                                                <span className="subnav-icon" style={{ backgroundImage:'url(https://www.skytel.mn/app/images/menu-pri-phone.png)' }}></span>
                                                ГАР УТАС, ТӨХӨӨРӨМЖ                                        </a>
                                        </li>
                                                                            <li>
                                            <a href="/content/faq/PHONE/ECOMMERCE">
                                                <span className="subnav-icon" style={{ backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-help.png)'}}></span>
                                                ТУСЛАМЖ                                         </a>
                                        </li>
                                    </ul>

                            </li>
                    <li className="id_subitem menu-3">
                        <a href="">ТАНД ТУСАЛЪЯ</a>                                                                                                 
                                        <ul className="subnav subitem-six">
                                          
                                        <li>
                                            <a href="/p/contact-us">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-contact-us.png)'}}></span>
                                                БИДЭНТЭЙ ХОЛБОГДОХ                                           </a>
                                        </li>
                                                                            <li>
                                            <a href="/content/branches/Ulaanbaatar">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-buildings.png)'}}></span>
                                                ҮЙЛЧИЛГЭЭНИЙ САЛБАРУУД                                    </a>
                                        </li>
                                                                            <li>
                                            <a href="/p/instructions">
                                                <span className="subnav-icon" style={{backgroundImage:'url(https://www.skytel.mn/app/images/menu-pri-instructions.png)'}}></span>
                                                ЗААВАР                                          </a>
                                        </li>
                                                                            <li>
                                            <a href="/p/qna">
                                                <span className="subnav-icon" style={{backgroundImage:'url(https://www.skytel.mn/app/images/menu-pri-faq.png)'}}></span>
                                                АСУУЛТ ХАРИУЛТ                                          </a>
                                        </li>
                                                                            <li>
                                            <a href="/p/coverage">
                                                <span className="subnav-icon" style={{backgroundImage:'url(https://www.skytel.mn/app/images/menu-pri-coverage.png)'}}></span>
                                                ХАМРАХ ХҮРЭЭ                                         </a>
                                        </li>
                                                                            <li>
                                            <a href="/contract/">
                                                <span className="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/mediamenu/2.png)'}}></span>
                                                ХЭРЭГЛЭГЧИЙН БҮРТГЭЛ                                     </a>
                                        </li>
                                                                    </ul>

                                                </li>
                        <li className=" menu-4">
                            
                                <Link to="">КОНТЕНТ АППЛИКЕЙШН</Link>
                           
                        </li>
                                   
                    
                        <div className="top-search">
                        <a href="#" className="search-toggle"><i class="fa fa-search" aria-hidden="true"></i></a>
                        <div class="header-search">
                                    <form id="search-form-main" action="/content/q/search">
                                        <div class="search-input">
                                            <input name="q" id="q" autocomplete="off" placeholder="Хайлт хийх" type="text"/>
                                        </div>
                                        <a href="#" class="search-btn" id="search-btn-main">ХАЙХ</a>
                                    </form>
                                </div>
                            </div>
                            </ul>

                            </nav>
                            </div>
                        </div>
                    
                    </header>
        <div id="contentWrapper">  
                <section>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="/slider/c4392586b6d709f619dfe6c129dd8ef8c4d73a72.png" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/2ffcee243118e0b802d0ee97deffb57102d190be.jpg" className="d-block w-100"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/514fc8567d5fe661ebb03121b0c645af67e7dca7.jpg" className="d-block w-100"/>
                                        
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/83117ca0d1ba1612019a71e59ddb88d025a165c7.jpg " className="d-block w-100"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/c80e7d73c2c28f6a6eaff785499dd6a3387f17ab.png" className="d-block w-100"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/ddb9686f06f25e75868f9141fb595cd961866eee.png" className="d-block w-100"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/ecf06cc760fbacb1f5ead1123dd61657dcaade79.png" className="d-block w-100"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="/slider/d6b7971005d27613ae48b33e1a0b6d9b3220b78b.png" className="d-block w-100"/>
                                        </div>

                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>
                            </section>
                <section>
                    <div class="container">
                        <div class="product-menu-container">
                            <nav class="product-menu">
                                <ul class="column-6 clearfix">
                                                                    <li>
                                            <a href="/profile/usage">
                                                <span class="icon" style={{ backgroundImage: 'url(https://www.skytel.mn/app/images/menu2-icon-1.png)'}}></span>
                                                <span>ХЭРЭГЛЭЭ ХЯНАХ</span>
                                            </a>
                                        </li>
                                                                    <li>
                                            <a href="/pay/">
                                                <span class="icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu2-icon-2.png)'}}></span>
                                                <span>ТӨЛБӨР ТӨЛӨХ</span> 
                                            </a>
                                        </li>
                                                                    <li>
                                            <a href="/shop/card">
                                                <span class="icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu2-icon-3.png)'}}></span>
                                                <span>НЭГЖ ЦЭНЭГЛЭХ</span>
                                            </a>
                                        </li>
                                                                    <li>
                                            <a href="/shop/card?id=18">
                                                <span class="icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu2-icon-4.png)'}}></span>
                                                <span>ДАТА КАРТ АВАХ</span>
                                            </a>
                                        </li>
                                                                    <li>
                                            <a href="https://www.skytel.mn/skynet/index">
                                                <span class="icon" style={{backgroundImage:'url(https://www.skytel.mn/uploads/images/iconskynet.png)'}}></span>
                                                <span>SKYNET</span>
                                            </a>
                                        </li>
                                                                    <li>
                                            <a href="/number/search">
                                                <span class="icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/newnumber.png)'}}></span>
                                                <span>ШИНЭ ДУГААР</span>
                                            </a>
                                        </li>
                                    </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="section section-products">
                <div className="section-wrap">
                    <div className="container">
                    <div class="mb-10">
                        <div class="row">
                            <div class="col-md-5 col-sm-5">
                                <div class="heading" >
                                    <h2>Мэдээ мэдээлэл</h2>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-7 hidden-xs">
                                <div class="pull-right">
                                    <div class="tab-1 home-news-tab">
                                        <div class="inner">
                                            <ul class="home-news-filter">
                                                <li class="active">
                                                    <a href="#" data-toggle="tab" data-filter=".all">Бүгд</a>
                                                </li>
                                                <li class="">
                                                    <a href="#" data-toggle="tab" data-filter=".promotion">Урамшуулал</a>
                                                </li>
                                                <li class="">
                                                    <a href="#" data-toggle="tab" data-filter=".special">Онцлох</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                


                <div>
                    <div className="home-latest-news">
                                <div id="home-news-grid" className="row" >
                                        
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special">
                        <article className="home-news">
                            <p className="news-date">
                                21
                                <span>11/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2765/view">
                                    <img src="/news/0c53c90456159a829f3ccb8a445ff4e1b71c6ded.png"  alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 className="title">
                                <a href="/content/2765/view">Холливудын шилдэг кинонуудыг өдөр бүр зөвхөн SKYlive 90-р сувгаар</a>
                            </h3>
                        </article>
                    </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special">
                        <article className="home-news">
                            <p className="news-date">
                                18
                                <span>11/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2764/view">
                                    <img src="/news/054c8d0c7e715484d325da180e67c28ce2176a61.png"  alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 className="title">
                                <a href="/content/2764/view">SKYNET-ЭЭР SKYGO ХЯЗГААРГҮЙ ҮЗЭЭРЭЙ</a>
                            </h3>
                        </article>
                    </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  all special" >
                        <article className="home-news">
                            <p className="news-date">
                                13
                                <span>11/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2763/view">
                                    <img src="/news/5d510e7915cdc54da0495d4693563a4467c94054.jpg"  alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 className="title">
                                <a href="/content/2763/view">Улаанбаатар хот болон Орон нутгийн салбаруудын ажиллах цагийн хуваарь</a>
                            </h3>
                        </article>
                    </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  all special" >
                        <article className="home-news">
                            <p className="news-date">
                                11
                                <span>11/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2762/view">
                                    <img src="/news/8e983118613db588e5c5ff224417e64594fb3799.jpg" alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 className="title">
                                <a href="/content/2762/view">СКАЙтел группийн ажилтнуудад дохионы хэлний сургалт орлоо</a>
                            </h3>
                        </article>
                    </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion">
                        <article className="home-news">
                            <p className="news-date">
                                21
                                <span>10/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2761/view">
                                    <img src="/news/4ee9350d70a63f303998def0513681d6bb65e3f5.png"  alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 class="title">
                                <a href="/content/2761/view">ДАТАТАЙ ГАР УТСАА ХЭМНЭЛТТЭЙ ҮНЭЭР АВААРАЙ </a>
                            </h3>
                        </article>
                    </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 grid-item  promotion" >
                        <article className="home-news">
                            <p className="news-date">
                                14
                                <span>10/2020</span>
                            </p>
                            <figure className="image">
                                <a href="/content/2757/view">
                                    <img src="/news/877b4975db8c109ea929c14077203adc400c2779.png" alt=""/>
                                    <div className="hover">
                                        <p></p>
                                        <div className="text-center">
                                            <span className="btn btn-1 white btn-br small"><span><i className="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <h3 className="title">
                                <a href="/content/2757/view">ИНТЕРНЭТ ХУРДАА ХУРДЛУУЛЪЯ</a>
                            </h3>
                        </article>
                    </div>
                

                                                                </div>
                            </div>
                </div>
                </div>
                <section class="section section-gray section-products">
                    <div class="section-wrap">
                    
                    <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="box-blue">
                                        <div class="box-wrap">
                                            <h2 class="title clearfix"><span>Яагаад</span><span><img src="https://www.skytel.mn/app/images/logo-white.png" alt=""/></span><span>гэж?</span></h2>
                                            <p>Тэнгэрийн холбоочид бид Таны бүтээж буй гэгээлэг ирээдүйг өнгөлсөөр ирсэн. Хойшид ч Ухаалаг хэрэглээт амьдралын хэв маягт мэдрэмжтэйгээр чиглүүлсээр байна.</p>
                                            <a href="/p/why-sky" class="btn btn-1 btn-br white small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="home-product">
                                        <figure>
                                            <img src="https://www.skytel.mn/app/images/beldsen/home/2.png" alt=""/>
                                            <div class="more">
                                                <a href="/p/data-service"><span>Дэлгэрэнгүй</span></a>
                                            </div>
                                        </figure>
                                        <h3><a href="/p/data-service" class="">Дата үйлчилгээ</a></h3>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="home-product">
                                        <figure>
                                            <img src="https://www.skytel.mn/app/images/beldsen/home/coverage.png" alt=""/>
                                            <div class="more">
                                                <a href="/p/coverage"><span>Дэлгэрэнгүй</span></a>
                                            </div>
                                        </figure>
                                        <h3><a href="/p/coverage">Хамрах хүрээ</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="home-product">
                                        <figure>
                                            <img src="https://www.skytel.mn/app/images/beldsen/home/card.png" alt=""/>
                                            <div class="more">
                                                <a href="/shop/card"><span>Дэлгэрэнгүй</span></a>
                                            </div>
                                        </figure>
                                        <h3><a href="/shop/card">Цэнэглэгч карт</a></h3>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="home-product">
                                        <figure>
                                            <img src="https://www.skytel.mn/app/images/beldsen/home/4.png" alt=""/>
                                            <div class="more">
                                                <a href="/shop/product"><span>Дэлгэрэнгүй</span></a>
                                            </div>
                                        </figure>
                                        <h3><a href="/shop/product">Гар утас, төхөөрөмж</a></h3>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="home-product">
                                        <figure>
                                            <img src="https://www.skytel.mn/app/images/beldsen/home/7.png" alt=""/>
                                            <div class="more">
                                                <a href="/app/home"><span>Дэлгэрэнгүй</span></a>
                                            </div>
                                        </figure>
                                        <h3><a href="/app/home">Аппликейшн</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            

            </div>
                </section>
               
        <footer id="footer">
            <div class="footer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                                <div class="widget">
                                    <h4 class="widget-title"><i class="fa fa-square"></i>БИДНИЙ ТУХАЙ</h4>
                                            <ul class="list-large list-links">
                                                    <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/mvv">Эрхэм зорилго</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/sky-symbol">SKY бэлгэдлийн тайлал</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/companies">Групп компаниуд</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/aboutus">Бидний тухай</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/content">Мэдээ мэдээлэл</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/hr">Хүний нөөц</a>
                                                    </li>
                                                                                                                    </ul>
                                                            </div>
                            </div>
                                            <div class="col-md-2" >
                                <div class="widget">
                                    <h4 class="widget-title"><i class="fa fa-square"></i>ОНЛАЙН ҮЙЛЧИЛГЭЭ</h4>
                                                                    <ul class="list-large list-links">
                                                                                                                                <li><i class="fa fa-angle-right"></i>
                                                        <a href="/pay/">Төлбөр төлөх</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/number/search">Шинэ дугаар</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/shop/product">Гар утас</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/shop/card?id=17">Нэгжийн карт</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/shop/card?id=18">Дата карт</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/tos-privacy-policy">Үйлчилгээний нөхцөл</a>
                                                    </li>
                                                                                                                    </ul>
                                                            </div>
                            </div>
                                            <div class="col-md-2" >
                                <div class="widget">
                                    <h4 class="widget-title"><i class="fa fa-square"></i>ТУСЛАХ ЦЭС</h4>
                                                                    <ul class="list-large list-links">
                                                                                                                                <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/cooperation">Хамтран ажиллах</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/content/branches/Ulaanbaatar">Үйлчилгээний салбар</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/coverage">3G Хамрах хүрээ</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/4g_map">4G LTE Хамрах хүрээ</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/qna">Түгээмэл асуулт</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/contact-us">Холбоо барих</a>
                                                    </li>
                                                                                                                    </ul>
                                                            </div>
                            </div>
                                            <div class="col-md-2" >
                                <div class="widget">
                                    <h4 class="widget-title"><i class="fa fa-square"></i>ХОЛБООСУУД</h4>
                                                 <ul class="list-large list-links">
                                                    <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/tender">Тендерийн урилга</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="http://www.skymelody.mn">Скай Мелоди</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/sky-symbol">Файл татах</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/sitemap">Сайтын бүтэц</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="/p/speedtest">Интернэт хурд шалгах</a>
                                                    </li>
                                                                                                                                                                        <li><i class="fa fa-angle-right"></i>
                                                        <a href="http://epg.skytel.mn/auth/login">TV хөтөлбөр оруулах</a>
                                                    </li>
                                                                                                                    </ul>
                                                            </div>
                            </div>
                                        <div class="col-md-3">
                            <div class="widget">
                                <h4 class="widget-title"><i class="fa fa-square"></i>ХАЯГ БАЙРШИЛ</h4>
                                <ul class="list-large">
                                    <li><i class="fa fa-map-marker"></i>14251 Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо, Чингисийн өргөн чөлөө 9, Скайтел Плаза</li>
                                    <li><i class="fa fa-phone"></i>Скайтел лавлах төв: <br/>1515, 18001515<br/>Скаймедиа лавлах төв:<br/>1520, 76769000</li>
                                    <li><i class="fa fa-fax"></i>318487</li>
                                    <li><i class="fa fa-envelope-o"></i>Хувь хэрэглэгч: info@skytel.mn</li>
                                    <li><i class="fa fa-envelope"></i>Байгууллага: enterprise@skytel.mn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-content">
            <div class="container clearfix">
                <div class="social-icons">
                    <ul>
                        <li><a href="https://www.facebook.com/skytel.official" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/SkytelOfficial" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/user/skytelmn" target="_blank"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
                <p class="copyright hidden-xs hidden-sm">© Хуулбарлахыг хориглоно 1999 - 2020 Скайтел Групп. Бүх эрх хуулиар хамгаалагдсан</p>
            </div>
        </div>
        </footer>
       
        <div class="back_to_top show">
            <a href="#" id="totop"><i class="fa fa-angle-up"></i></a>
        </div>
       
   </div>
   
            </div>
    <div id="erxes-messenger-container" class="erxes-messenger-shown small">
            <iframe id="erxes-messenger-iframe" src="https://erxeswidgets.skytel.mn/messenger" >
                <html lang="en">
                <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title></title>
                </head>
                <body>
                   

                    <div id="root">
                        <div class="erxes-widget">
                            <a class="erxes-launcher" style={{ backgrounImage: 'url("https://skytel-erxes.s3.ap-northeast-2.amazonaws.com/0.22379009547141848skytel_plane.png)'}}></a>::before
                            <div class="erxes-topbar">
                                <div class="erxes-middle fade-in">
                                    <div class="erxes-topbar-title">
                                        <div>Харилцагч та</div>
                                        <span>дараах холбогдох мэдээллийг оруулна уу.</span>
                                        </div></div>
                                        <button class="topbar-button right fade-in">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="33" viewBox="0 0 24 24" fill="#ffffff" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="10" cy="4.5" r="4.5"></circle>
                                                <circle cx="10" cy="20.5" r="4.5"></circle>
                                                <circle cx="10" cy="35.5" r="4.5"></circle></svg>
                                            <ul>
                                                <li><a href="#">Харилцан яриа дуусгах</a></li>
                                                <li><a href="#">Хаах</a></li>
                                            </ul>
                                            </button>
                                            </div>
                                            <div class="accquire-information slide-in">
                                                <p class="type">
                                                    <span class="current">И-мэйл</span>
                                                    <span class="current" >Утас</span>
                                                    </p><form class="form"><input placeholder="email@domain.com" type="text"/>
                                                    <button type="submit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <polyline points="9 18 15 12 9 6">
                                                                </polyline></svg></button></form></div>
                                                                
                                                                <a class="erxes-launcher close" style={{ backgroundImage: 'url(&quot;https://skytel-erxes.s3.ap-northeast-2.amazonaws.com/0.22379009547141848skytel_plane.png&quot;)'}}><div></div></a>
                                                                
                                                                </div>
                                                                </div>
                        
                    <script src="https://erxeswidgets.skytel.mn/build/messenger.bundle.js"></script>
                

                    </body>
                </html>
            </iframe>
            ::after
            </div>
            </body>
    )
}