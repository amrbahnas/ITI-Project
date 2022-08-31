<template>

    <div class="parenta2 mb-4">
    <div class="container"> 
     <div class="d-flex justify-content-between  align-items-center py-4 header ">
                    <div class="logo text-white bg-dark p-1"><a href="#"><img src="../assets/logo.png" alt=""
                                class="w-100"></a>
                    </div>
                    <ul class="nav">
                        <li class="nav-item"><router-link  class="nav-link text-white" to="/#register">speakers</router-link></li>
                        <li class="nav-item"><router-link  class="nav-link text-white" to="/#sponsors">sponsors</router-link></li>
                        <li class="nav-item"><router-link  class="nav-link text-white" to="/#register">register</router-link></li>
                    </ul>
                </div>  
    </div>
</div>

    <div class="container parenta">

    
    <footer >
                     
              <h3 class="text-lg lg:text-xl font-medium lg:font-semibold text-white lg:leading-none pb-4 lg:pb-0">
                Explore an amaizing Vue.js conference
              </h3>
               <div class="container-fluid my-5">
        <div class="row">


            <div class="col-6 col-lg-3">
                <p><a class="pColor" href="https://twitter.com/vuetoronto" target="_blank">@VueToronto</a></p>
                <p><a class="pColor" href="mailto:info@vuetoronto.com" target="_blank">info@vuetoronto.com</a></p>

            </div>

            <div class="col-6 col-lg-3">
                <p><a class="pColor" href="https://vuejobs.com/" target="_blank">Vue.js Jobs</a></p>
                <p><a class="pColor" href="mailto:info@vuetoronto.com" target="_blank">Code of conduct</a></p>

            </div>

            <div class="col-6 col-lg-3">
                <p><a class="pColor" href="https://www.meetup.com/Vue-Toronto/" target="_blank"> Meetup Page</a></p>
                <p><router-link class="pColor" to="/Jobs">Jobs in Toronto</router-link></p>

            </div>

            <div class="col-6 col-lg-3">
                <p><router-link class="pColor" to="/PrivacyPolicy">Privacy</router-link></p>
                <p><router-link to="/Terms" class="pColor">Terms</router-link></p>

            </div>
        </div>
    </div>

    <div class="container-fluid">


        <div class=" row mt-4 mb-3 justify-content-center">
            <p class="pColor text-center">Proudly supported by VueJobs.com</p>
            <p class="pColor text-center">Copyright © 2022 Marvel Events | All Rights Reserved.</p>
        </div>

    </div>
        </footer>
    

    </div>
</template>


<style>

 
        .parenta{
            
            margin-top:40px;
        }
        .parenta p, .parent ul{            
            margin-bottom:40px; 
            font-size:16px;
            font-weight:400;
            color:#728e97;
        }
        .parenta h1{
            margin-bottom:20px;
        }

        .parenta2{

 position: relative;
            background-image: url("../assets/vueconf-toronto.cb789bc.jpeg");
            background-size: cover;
            background-position: center;
            width: 100%;
            max-height: 90vh;
            z-index:2;
        }

    .parenta2:before{

  content: '';
            background-image: url("../assets/Screenshot\ 2022-08-27\ 154015.png");
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: cover;
            opacity: 0.7;
            z-index:-1;
    }


       


</style>