---
layout: pricing
category: pricing
title: pricing
---

<section class="bg-blue">
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <p class="main-heading">Pricing</p>
            <p class="header-text">Transform unlimited notes into the tools you use everyday.</p>
            <p class="header-text">Go from meeting outcomes to action items in seconds.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-6 col-md-6" id="btn1">
            <button type="button" class="monthBtn" id="monthbtn" onclick="monthlyPrice()">Monthly</button>
        </div>
        <div class="col-6 col-md-6" id="btn2">
            <button type="button" class="annualBtn" id="annualbtn" onclick="annualPrice()">Annually
        </button>
        </div>
        <div class="col-md-12">
            <p class="underBtntext">Save 40% with annual billing</p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-10 col-sm-8 col-md-3 cards" id="card1">
            <div class="row" >
                <div class="col-md-12">
                    <p class="card-heading">Lite</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-8 col-md-12 price-text">
                    <h1 id="price1">$6</h1>
                    <h5>/month</h5>
                    <p>billed annually</p>
                </div>
            </div>
            <div class="row price-text-second">
                <div class="col-xs-8 col-md-12 ">
                    <h3>Includes</h3>
                    <h4>Unlimited notes</h4>
                    <hr>
                    <h5>Sync to Trello</h5>
                </div>
                <div class="col-6 col-md-12 col-lg-6">
                    <button type="button" class="tryBtn">Try</button>
                </div>
                <div class="col-6 col-md-12 col-lg-6" >
                    <button type="button" class="buyBtn">Buy</button>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-10 col-sm-8 col-md-4 cards">
            <div class="row" >
                <div class="col-md-12">
                    <p class="card-heading">Pro</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 price-text2">
                    <h2>Most Popular</h2>
                    <h1 id="price2">$14</h1>
                    <h5>/month</h5>
                    <p>billed annually</p>
                </div>
            </div>
            <div class="row price-text-second" id="pricecard2">
                <div class="col-md-12 ">
                    <h3>Includes</h3>
                    <h4>Unlimited notes</h4>
                    <hr>
                    <h5>Sync to Trello</h5>
                    <hr>
                    <h5>Sync to Jira Cloud</h5>
                    <hr>
                    <h5>Sync to Jira Server</h5>
                </div>
                <div class="col-6 col-md-12 col-lg-6">
                    <button type="button" class="tryBtn-card2">Try</button>
                </div>
                <div class="col-6 col-md-12 col-lg-6" >
                    <button type="button" class="buyBtn-card2">Buy</button>
                </div>
            </div>
        </div>
        <div class=" col-md-1"></div>
        <div class="col-10 col-sm-8 col-md-3 cards" id="card1">
            <div class="row" >
                <div class="col-md-12">
                    <p class="card-heading">Team</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 price-text3">
                    <h1>Custom</h1>
                    <p>for more than ten accounts</p>
                </div>
            </div>
            <div class="row price-text-second-card3">
                <div class="col-md-12 ">
                    <h3>Get in touch to discuss how we can help connect your team.</h3>
                </div>
                <div class="col-md-12">
                    <button type="button" class="ContactBtn">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<img src="/images/Rectangle2.png" class="img-fluid banner-after-bg">
<section class="base-text container">
    <div class="row">
        <div class="col-md-12">
            <h1>Not sure which plan will suit you best?</h1>
            <h2>Start a free 14 day trial with access to all features.</h2>
        </div>
        <div class="col-md-12">
            <button type="button" class="TrialBtn">Start free trial</button>
        </div>
    </div>
</section>
 <script type="text/javascript">
    window.onload = function() {
       document.getElementById("annualbtn").classList.remove("annualBtn-inactive");
       document.getElementById("monthbtn").classList.add("monthBtn-inactive");  
    }
    var p1=document.getElementById("price1");
    var p2=document.getElementById("price2");
    function monthlyPrice(){
       document.getElementById("annualbtn").classList.add("annualBtn-inactive");
       document.getElementById("monthbtn").classList.remove("monthBtn-inactive");
       p1.innerHTML = "$10";
       p2.innerHTML= "$20";
    }
    function annualPrice(){
       document.getElementById("annualbtn").classList.remove("annualBtn-inactive");
       document.getElementById("monthbtn").classList.add("monthBtn-inactive"); 
       p1.innerHTML = "$6";
       p2.innerHTML= "$14"; 
   }
 </script>






