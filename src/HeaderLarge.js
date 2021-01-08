import {BrowserRouter, Link, Switch, Route } from "react-router-dom";

import React, {useState} from 'react';
export function HeaderLarge(){
    return(
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
        
        
    )
}