import React from 'react'
export function Home(props){
    return(
        <body>
        <div id="site" className="site-wrapper bbb">
            <header id="header" className="header-showing">
                
                <div id="nav-bar">
                    <div class="container clearfix ">
                
                        <div class="mobile-menu visible-sm visible-xs">
                            <div class="mobile-toggle">
                                <i class="fa fa-bars"></i>
                            </div> 
                        </div>

                        <div class="loogo">
                                <a href="/" alt="Skytel">
                                    <img src="/stat/image/logo.png" alt=""/>
                                </a>
                                    </div>

                        <nav class="goog">
                                <ul class="nav   hidden-xs hidden-sm">
                                    <li class="id_subitem menu-1">
                                        <a href="">Үүрэн холбоо</a>
                                        <ul class="subnav subitem-four">
                                            <li>
                                                <a href="/p/corp-postpaid">
                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-icon-2.png)'}}></span>
                                                                ДАРАА ТӨЛБӨРТ                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/p/soyombo">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/uploads/images/soyombo_icon2.png)'}}></span>
                                                                Соёмбо                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-intl-services">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu/rouming.png)'}}></span>
                                                                Олон улсын роуминг                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-m2m">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu/m2m.png)'}}></span>
                                                                M2M үйлчилгээ                                            </a>
                                                        </li>
                                                    </ul>

                                                </li>
                                        <li class="id_subitem menu-2">
                                            <a href="/p/corp-triple">Гуравласан үйлчилгээ</a>
                                            <ul class="subnav subitem-three">
                                                        <li>
                                                            <a href="/p/corp-iptv">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu/iptv.png)'}}></span>
                                                                IPTV үйлчилгээ                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-internet">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu/internet.png)'}}></span>
                                                                Өндөр хурдны интернет                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-phone">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu/ip76.png)'}}></span>
                                                                Байгууллагын IP76 дугаар                                            </a>
                                                        </li>
                                                        </ul>

                                                                </li>
                                    <li class=" menu-3">
                                        <a href="/p/telemarketing">Телемаркетинг</a>
                                        </li>
                                        <li class="id_subitem menu-4">
                                        <a href="/p/corp-product">Дата центр</a>
                                                <ul class="subnav subitem-two">
                                                    <li>
                                                            <a href="/p/corp-data-center">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-fam-change-plan.png)'}}></span>
                                                                ДАТА ЦЕНТР                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-software">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-fam-add-feature.png)'}}></span>
                                                                ПРОГРАМ ХАНГАМЖ                                            </a>
                                                        </li>
                                                </ul>

                                                                </li>
                            <li class="id_subitem menu-5">
                                        <a href="">Тусламж</a>
                                        <ul class="subnav subitem-three" ><li>
                                                            <a href="/p/corp-qna">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-faq.png)'}}></span>
                                                                Асуулт Хариулт    </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="/p/corp-contact-us">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/app/images/menu-pri-contact-us.png)'}}></span>
                                                                Бидэнтэй Холбогдох                                            </a>
                                                        </li>
                                                                                            <li>
                                                            <a href="https://www.skytel.mn/company/login.php" target="_blank">
                                                                <span class="subnav-icon" style={{backgroundImage: 'url(https://www.skytel.mn/uploads/images/bill2.png)'}}></span>
                                                                Төлбөрийн нэхэмжлэх                                            </a>
                                                        </li>
                                            </ul>

                                    </li>
                                
                                    
                        

                            
                            <div class="top-search bbb">

                                <a href="#" class="search-toggle"><i class="fa fa-search"></i></a>

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
        <section>
            <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                            <div className="carousel-inner nnn">
                                <div className="carousel-item active">
                                <img src="/slider/c4392586b6d709f619dfe6c129dd8ef8c4d73a72.png" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                <img src="/slider/2ffcee243118e0b802d0ee97deffb57102d190be.jpg" className="d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                <img src="/slider/514fc8567d5fe661ebb03121b0c645af67e7dca7.jpg" className="d-block w-100"/>
                                
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
        <section class="section section-gray section-products">
            <div class="section-wrap">
                <div class="container">
                    <div class="row">
              
                        <div class="col-md-4">
                            <div class="box-blue">
                                <div class="box-wrap">
                                    <h2 class="title clearfix"><span>Яагаад</span><span><img src="/app/images/logo-white.png" alt=""/></span><span>гэж?</span></h2>
                                    <p>Тэнгэрийн холбоочид бид Таны бүтээж буй гэгээлэг ирээдүйг өнгөлсөөр ирсэн. Хойшид ч Ухаалаг хэрэглээт амьдралын хэв маягт мэдрэмжтэйгээр чиглүүлсээр байна.</p>
                                    <a href="/p/corp-why-sky" class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="home-product">
                                <figure>
                                    <img src="https://www.skytel.mn/app/images/beldsen/home/2.png" alt=""/>
                                    <div class="more">
                                        <a href="/p/corp-triple"><span>Дэлгэрэнгүй</span></a>
                                    </div>
                                </figure>
                                <h3><a href="/p/corp-triple" class="">Байгууллагын гурвалсан үйлчилгээ</a></h3>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="home-product">
                                <figure>
                                    <img src="https://www.skytel.mn/app/images/beldsen/home/2.png" alt=""/>
                                    <div class="more">
                                        <a href="/p/projects"><span>Дэлгэрэнгүй</span></a>
                                    </div>
                                </figure>
                                <h3><a href="/p/projects">Бидний хэрэгжүүлсэн төслүүд</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>            
        <section class="section section-products">
            <div class="section-wrap">
                <div class="container">

                    <div class="mb-10">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="heading" >
                                    <h2 >Мэдээ мэдээлэл</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="home-latest-news">
                        <div class="row">
                            
                    <div class="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special" >
                <article class="home-news">
                    <p class="news-date">
                        04
                        <span>12/2020</span>
                    </p>
                    <figure class="image">
                        <a href="/content/2767/view">
                            <img src="https://www.skytel.mn/uploads/news/1491ed2657f43d938fa576c9786badf4fc964c5c.png"  alt=""/>
                            <div class="hover">
                                <p></p>
                                <div class="text-center">
                                    <span class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                </div>
                            </div>
                        </a>
                    </figure>
                    <h3 class="title">
                        <a href="/content/2767/view">ДАРАА ТӨЛБӨРТ ХЭРЭГЛЭГЧДЭД ЗОРИУЛСАН ӨВЛИЙН УРАМШУУЛАЛ ЭХЭЛЛЭЭ </a>
                    </h3>
                </article>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 grid-item  all special" >
                <article class="home-news">
                    <p class="news-date">
                        07
                        <span>12/2020</span>
                    </p>
                    
                    <figure class="image">
                        <a href="/content/2768/view">
                            <img src="https://www.skytel.mn/uploads/news/2575232dd66e8a935e8b0fc221e5648c6083f8a6.png" />
                            <div class="hover">
                                <p></p>
                                <div class="text-center">
                                    <span class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                </div>
                            </div>
                        </a>
                    </figure><h3 class="title">
                        <a href="/content/2768/view">ГАР УТСААРАА PUK КОД АВЧ, ДУГААРАА НЭЭЖ, ХААХ БОЛОМЖТОЙ БОЛЛОО </a>
                    </h3>
                </article>
            </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special" >
                <article class="home-news">
                    <p class="news-date">
                        01
                        <span>12/2020</span>
                    </p>
                    <figure class="image">
                        <a href="/content/2766/view">
                            <img src="https://www.skytel.mn/uploads/news/2ff3b1e75bbae4f297326c800b30453165070da6.png"  alt=""/>
                            <div class="hover">
                                <p></p>
                                <div class="text-center">
                                    <span class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                </div>
                            </div>
                        </a>
                    </figure>
                    <h3 class="title">
                        <a href="/content/2766/view">УРЬДЧИЛСАН ТӨЛБӨРТ ХЭРЭГЛЭГЧДЭД ЗОРИУЛСАН ӨВЛИЙН УРАМШУУЛАЛ ЭХЭЛЛЭЭ </a>
                    </h3>
                </article>
            </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special" >
                <article class="home-news">
                    <p class="news-date">
                        21
                        <span>11/2020</span>
                    </p>
                    <figure class="image">
                        <a href="/content/2765/view">
                            <img src="https://www.skytel.mn/uploads/news/0c53c90456159a829f3ccb8a445ff4e1b71c6ded.png"  alt=""/>
                            <div class="hover">
                                <p></p>
                                <div class="text-center">
                                    <span class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                </div>
                            </div>
                        </a>
                    </figure>
                    <h3 class="title">
                        <a href="/content/2765/view">Холливудын шилдэг кинонуудыг өдөр бүр зөвхөн SKYlive 90-р сувгаар</a>
                    </h3>
                </article>
            </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 grid-item  all promotion special" >
                <article class="home-news">
                    <p class="news-date">
                        18
                        <span>11/2020</span>
                    </p>
                    <figure class="image">
                        <a href="/content/2764/view">
                            <img src="https://www.skytel.mn/uploads/news/054c8d0c7e715484d325da180e67c28ce2176a61.png" alt=""/>
                            <div class="hover">
                                <p></p>
                                <div class="text-center">
                                    <span class="btn btn-1 white btn-br small"><span><i class="fa fa-link"></i>Дэлгэрэнгүй</span></span>
                                </div>
                            </div>
                        </a>
                    </figure>
                    <h3 class="title">
                        <a href="/content/2764/view">SKYNET-ЭЭР SKYGO ХЯЗГААРГҮЙ ҮЗЭЭРЭЙ</a>
                    </h3>
                </article>
            </div>
        
                        </div>
                    </div>
                </div>
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
       
            </div>
            </body>
        
    )
}