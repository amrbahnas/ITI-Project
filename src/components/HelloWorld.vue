<template>
   <div class="landing">
        <div class="background">
            <div class="container-fluid position-relative">
                <div class="d-flex justify-content-between  align-items-center py-4 header ">
                    <div class="logo text-white bg-dark p-1"><router-link to="/"><img src="../assets/logo.png" alt=""
                                class="w-100"></router-link>
                    </div>
                    <ul class="nav">
                        <li class="nav-item"><a href="#speakers" class="nav-link text-white">speakers</a></li>
                        <li class="nav-item"><a href="#sponsor" class="nav-link text-white">sponsors</a></li>
                        <li class="nav-item"><a href="#register" class="nav-link text-white enshow">register</a></li>
                    </ul>
                </div>
                <!-- end header -->
                <div class="text">
                    <div class="top d-flex align-items-center">
                        <div class="d-flex align-items-center bitch">
                            <span></span>
                            <p>1-3 November 2022</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <span></span>
                            <p>Metro Toronto Convention Centre</p>
                        </div>
                    </div>
                    <div class="center">
                        <p>North America’s premier Vue.js Conference</p>
                    </div>
                    <div class="bottom">
                        <a href="#register" class="bottom">register now</a>
                    </div>
                    <!-- /* end body */ -->
                </div>
                <div class="parent position-relative">
                    <div class="join_us">
                        <div class="d-flex justify-content-end  vue">
                            <p>powered by</p>
                            <a href="https://vuejobs.com" target="_blank">Vuejobs</a>
                        </div>
                        <div class="join_content">
                            <div class="image"><img src="../assets/mtcc.1c1465f.jpg" alt=""></div>
                            <div class="context">
                                <h2>
                                    2 days - single track
                                </h2>
                                <p>Join us in-person 🎉</p>
                                <p>
                                    VueConf Toronto is back to in-person! The 5th edition of the Toronto
                                    conference will take place as a 2-day single-track event at the
                                    iconic Metro Toronto Convention Centre with talks and workshops from
                                    Vue.js core team members and industry experts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- end landing -->

    <!-- speaker -->
    <div class="container-fluid speak">
        <div class="speakers" id="speakers">
            <div class="head">
                <h2>Speakers</h2>
                <p>If you are interested in speaking at the conference, please submit your proposal below.</p>
            </div>
            <div class="contron_box row justify-content-center">
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href="#"><img src="../assets/1.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Alexandre Chopin</p>
                        <p>Nuxt.js co-creator</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/2.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Daniel Roe</p>
                        <p>Nuxt.js architect, core team</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/3.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Eduardo San Martin Morote</p>
                        <p>Vue.js core team</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/4.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Evan You</p>
                        <p>Creator of Vue.js</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/5.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Evan You</p>
                        <p>Creator of Vue.js</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/6.jpg" alt=""></a></div>
                    <div class="text">
                        <p>John Leider</p>
                        <p>Creator of Vuetify.js</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/7.jpeg" alt=""></a></div>
                    <div class="text">
                        <p>Kara Erickson</p>
                        <p>TLM / Sr Software Engineer</p>
                    </div>
                </div>
                <div class="box col-6 col-md-4 col-lg-3">
                    <div class="image"><a href=""><img src="../assets/8.jpg" alt=""></a></div>
                    <div class="text">
                        <p>Lucie Haberer</p>
                        <p>DevEx Engineer @Prismic</p>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>PS: CFP is now closed. Final speaker list will be published soon.</p>
            </div>
        </div>
    </div>
    <!-- /********************************* -->
    <div class="container-fluid my-4">
        <div class="row justify-content-center">
            <div class="row p-4 col-lg-8 col-md-8 col-12 divColor " style="padding:10px;">

                <h3 class="text-white " style="font-size:30px;">Stay in the loop</h3>

                <p class="mt-6 text-base  pColor">
                    More updates are coming soon! Subscribe to our newsletter or stay
                    connected with one of our social media channels to get the latest
                    about the conference.
                </p>

                <div class="row mt-3 flex-row mb-4 ">
                    <div class="icon col-2 ">
                        
                        <a href="https://twitter.com/vuetoronto" target="_blank"><i class="fa-brands fa-twitter  fa-2x" style="color:black"></i></a>

                    </div>

                    <div class="icon ms-2 col-2 ">
                        <a href="https://www.youtube.com/vueconftoronto" target="_blank"><i class="fa-brands fa-youtube  fa-2x" style="color:black"></i></a>

                    </div>

                    <div style="display:flex; " class="col-6 me-2 ">
                        <form style="display:flex;">
                            <input type="email" class="inpEmail" required placeholder="   Email"
                                style="background-color: #11252b; border:none; color:white; caret-color:white; padding:4px;" />

                            <input type="submit" value="Subscribe" class="subButton"
                                style="background-color: #75c05e; color:white;padding:7px;" />
                        </form>
                    </div>
                </div>
            </div>
            <div class=" col-lg-4 col-12 col-md-4 div2color div2 text-center p-4">
                <p class="text-white" style="font-size:20px;">Help us make the best event!</p>
                <div class="div2 anchor">
                    <a >
                            <router-link to='/Sponser'>Become A Sponser</router-link>       
                    </a>
                </div>
            </div>
        </div>
    </div>




    <div class="container-fluid my-3">
        <div class="d-flex  justify-content-center" style="flex-wrap:wrap">

            <div class="divColor  p-3 divwidth">
                <h3 style="color: var(--div-sec-color)">Workshops</h3>
                <p style="color: var(--p-color)">Interested in learning more about Vue.js from beginners to advanced
                    concepts? VueConf Toronto provides a pre-conference workshop day where industry experts teach
                    you
                    various concepts in Vue.js development.</p>
            </div>

            <div class="divColor  p-3 divwidth">
                <h3 style="color: var(--div-sec-color)">Unlimited Networking</h3>
                <p style="color: var(--p-color)">Yes, we are finally back in-person and there are tons of networking
                    opportunities during the conference and the amazing after-party! Meet Vue.js, Nuxt.js core team
                    members and other community members.</p>
            </div>

            <div class="divColor  p-3 divwidth">
                <h3 style="color: var(--div-sec-color)">Session and Lightning Talks</h3>
                <p style="color: var(--p-color)">The 2 day, single track event is fully packed with 30 mins long
                    session
                    talks, 7 minutes lightning talks and other exciting fun events. Developer lounges for you to
                    meet
                    and greet, ask your tech questions to industry experts!</p>
            </div>
        </div>

    </div>



    <div  class="container-fluid">
        <h3 class=" mx-4 text-white register" id="register" style="margin-bottom:60px">Tickets</h3>
    </div>

    <div class="container-fluid my-5 d-flex justify-content-center ">
        <div class="row w-100 justify-content-center">

            <div class="row divColor col-12 col-lg-6 p-3  mb-4 justify-content-center width2">

                <h3 class="container-fluid-md my-3 text-white " id="register">$599</h3>

                <p style="color: var(--div-sec-color); font-size:20px;">Group Conference Ticket</p>

                <p class="mb-4 pColor">Available till Oct 15, 2022</p>

                <ul class="pColor mb-5">
                    <li>Two-day access - Minimum 2 tickets</li>
                    <li>20+ Sessions and Lightning talks</li>
                    <li>Q/A Sessions</li>
                    <li>Meet the speaker</li>
                    <li>Conference goodies</li>
                    <li>Lunch, coffee and snacks</li>
                    <li>Awesome after-party</li>
                    <li>Unlimited networking</li>
                </ul>


                <button type="button" class="mb-5 div2color text-white" data-bs-toggle="modal"
                    style="padding: 10px; border: none;" data-bs-target="#exampleModal">
                    Register Now
                </button>


                <!-- Modal -->
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content col-12">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-header div2">
                                <h5 class="modal-title" id="exampleModalLabel" style="font-size:40px;">VueConf Toronto
                                    2022</h5>

                            </div>
                            <div class="modal-body">


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px; "
                                                class="change" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Nailing it with Nuxt 3 - Inside and Out by Daniel Roe</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change1" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$599.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change2" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />
                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Regular Conference Tickets</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$699.00</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change3" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />

                                <form class="flex-row my-4  col-12">
                                    <input type="text" required style="padding:10px; width:500px; max-width:80%;"
                                        placeholder=" Enter Disconde Code " class="chicking me-4 " />

                                    <input type="submit" value="Apply" class="apllybutton"
                                        style="background-color:gray; padding:10px; color:white ; border-radius:4px ; border:none;" />
                                </form>
                            </div>
                            <hr style="background-color: #35393d;" />
                            <div class="row  justify-content-between">
                                <h3 class="col-md-8 calctotal">Total :</h3>
                                <span class="total col-2"></span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    data-bs-toggle="modal" id="savecahnge" data-bs-target="#exampleModal3">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <div class="row divColor col-12 col-lg-6 p-4 mb-4  width2">

                <h3 class="container-fluid-md my-3 text-white" id="register">$699</h3>

                <p style="color: var(--div-sec-color); font-size:20px;">Regular Conference Ticket</p>

                <p class="mb-4 pColor">Available till Oct 15, 2022</p>

                <ul class="pColor mb-5">
                    <li>Two-day access - Individual Pass</li>
                    <li>20+ Sessions and Lightning talks</li>
                    <li>Q/A Sessions</li>
                    <li>Meet the speaker</li>
                    <li>Conference goodies</li>
                    <li>Lunch, coffee and snacks</li>
                    <li>Awesome after-party</li>
                    <li>Unlimited networking</li>
                </ul>




                <button type="button" class="mb-5 div2color text-white" data-bs-toggle="modal"
                    style="padding: 10px; border: none;" data-bs-target="#exampleModal2">
                    Register Now
                </button>

                <!-- Modal -->
                <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content col-12">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-header div2">
                                <h5 class="modal-title" id="exampleModalLabel" style="font-size:40px;">VueConf Toronto
                                    2022</h5>

                            </div>
                            <div class="modal-body">


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px; "
                                                class="change4" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Nailing it with Nuxt 3 - Inside and Out by Daniel Roe</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change5" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$599.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change6" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />
                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Regular Conference Tickets</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$699.00</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change7" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />

                                <form class="flex-row my-4  col-12">
                                    <input type="text" required style="padding:10px; width:500px; max-width:80%;"
                                        placeholder=" Enter Disconde Code " class="chicking2 me-4 " />

                                    <input type="submit" value="Apply" class="apllybutton2"
                                        style="background-color:gray; padding:10px; color:white ; border-radius:4px ; border:none;" />


                                </form>


                            </div>

                            <hr style="background-color: #35393d;" />

                            <div class="row  justify-content-between">

                                <h3 class="col-md-8 calctotal2">Total :</h3>
                                <span class="total2 col-2"></span>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>


    <h5 class=" container-fluid pColor mb-4 ">Full Day Pre-conf workshops - 1 Nov 2022</h5>

    <div class="container-fluid  mb-2  d-flex justify-content-center w-100">
        <div class="row p-3 w-100 divColor align-items-center justify-content-between">
            <div class="col-md-8 col-12 row ">

                <div class="col-12 col-m-2 col-lg-2">
                    <img src="../assets/5.jpg" style="width:70px; height:70px; max-width:100%" />
                </div>

                <div class="col-12 col-m-9 col-lg-9">
                    <h3><a href="#" class="text-white underline">Stress free testing in Vue 3</a></h3>

                    <p class="pColor"><span style="color: var(--div-sec-color); font-weight:bold;">Jessica Sachs
                        </span>- Maintainer @Vue test utils</p>

                </div>

            </div>

            <div class="col-md-3 col-12 mt-4 ">

                <button type="button" class="mb-5  coloring" data-bs-toggle="modal"
                    style="padding: 10px; background-color: white; color: black; border: none;"
                    data-bs-target="#exampleModal2">
                    Register Now <sup>$</sup>499
                </button>

                <!-- Modal -->
                <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content col-12">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-header div2">
                                <h5 class="modal-title" id="exampleModalLabel" style="font-size:40px;">VueConf Toronto
                                    2022</h5>

                            </div>
                            <div class="modal-body">

                                <div class="row ">
                                    <div class="row col-12 flex-row justify-content-between">
                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>
                                            <p class="pColor">Workshop Date: November 1, 2022</p>
                                        </div>
                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px; "
                                                class="change" />
                                        </div>
                                    </div>
                                </div>
                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Nailing it with Nuxt 3 - Inside and Out by Daniel Roe</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change1" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$599.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change2" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />
                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Regular Conference Tickets</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$699.00</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change3" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />

                                <form class="flex-row my-4  col-12">
                                    <input type="text" required style="padding:10px; width:500px; max-width:80%;"
                                        placeholder=" Enter Disconde Code " class="chicking me-4 " />

                                    <input type="submit" value="Apply" class="apllybutton"
                                        style="background-color:gray; padding:10px; color:white ; border-radius:4px ; border:none;" />


                                </form>


                            </div>

                            <hr style="background-color: #35393d;" />

                            <div class="row  justify-content-between">

                                <h3 class="col-md-8 calctotal">Total :</h3>
                                <span class="total col-2"></span>

                            </div>



                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>



    <div class="container-fluid mb-5 mt-2  d-flex justify-content-center w-100">
        <div class="row p-3 w-100 divColor align-items-center justify-content-between">
            <div class="col-md-8 col-12 row ">

                <div class="col-12 col-m-2 col-lg-2">
                    <img src="../assets/1.jpg" style="width:70px; height:70px; max-width:100%" />
                </div>

                <div class="col-12 col-m-9 col-lg-9">
                    <h3><a href="#" class="text-white  underline "> Nailing it with Nuxt 3 - Inside and Out</a></h3>

                    <p class="pColor"><span style="color: var(--div-sec-color); font-weight:bold;">Daniel Roe </span>-
                        Nuxt.js architect, core team</p>

                </div>

            </div>

            <div class="col-md-3 col-12 mt-4 ">

                <button type="button" class="mb-5  coloring" data-bs-toggle="modal"
                    style="padding: 10px; background-color: white; color:black; border: none;"
                    data-bs-target="#exampleModal">
                    Register Now <sup>$</sup>499
                </button>

                <!-- Modal -->
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content col-12">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-header div2">
                                <h5 class="modal-title" id="exampleModalLabel" style="font-size:40px;">VueConf Toronto
                                    2022</h5>

                            </div>
                            <div class="modal-body">


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px; "
                                                class="change4" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Nailing it with Nuxt 3 - Inside and Out by Daniel Roe</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$499.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change5" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />


                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Stress-free Testing for Vue 3 by Jessica Sachs</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$599.01</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change6" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />
                                <div class="row ">

                                    <div class="row col-12 flex-row justify-content-between">


                                        <div class="col-5 ">
                                            <p>Regular Conference Tickets</p>

                                            <p class="pColor">Workshop Date: November 1, 2022</p>

                                        </div>

                                        <div class="col-5">
                                            <p>CA$699.00</p>
                                            <p class="pColor" style="font-size:10px;">(CA$432.43 + CA$66.58 fees,
                                                including taxes)</p>
                                            <input type="number" step="1" min="0" max="40" style="padding:10px;"
                                                class="change7" />

                                        </div>

                                    </div>
                                </div>

                                <hr style="background-color: #35393d;" />

                                <form class="flex-row my-4  col-12">
                                    <input type="text" required style="padding:10px; width:500px; max-width:80%;"
                                        placeholder=" Enter Disconde Code " class="chicking me-4 " />

                                    <input type="submit" value="Apply" class="apllybutton"
                                        style="background-color:gray; padding:10px; color:white ; border-radius:4px ; border:none;" />


                                </form>


                            </div>

                            <hr style="background-color: #35393d;" />

                            <div class="row  justify-content-between">

                                <h3 class="col-md-8 calctotal2">Total :</h3>
                                <span class="total2 col-2"></span>

                            </div>



                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>

    </div>

     <h5 class="container-fluid pColor last">*More workshops to come soon.</h5>

   <div class="container-fluid">
     <h3 class="text-center text-white mb-2" style="margin-top:60px; font-size:40px;" id="sponsor">Platinum Sponsor</h3>
   </div>

    <div class="container-fluid div2 mt-5">


        <a class="div2 divColor mb-5 bordercolor " style="width:400px; height:120px;" href="https://www.storyblok.com/ "
            target="_blank">
            <img src="../assets/story.svg" style="display:inline-block;" />
        </a>

    </div>



    <h3 class="text-center text-white mb-2">Community Partners</h3>


    <div class="container-fluid  mt-5 d-flex justify-content-center gap-2">


        <a class="div2 divColor mb-5 bordercolor col-3" style="flex-basis:30%; height:80px;"
            href="https://vuetifyjs.com/en/ " target="_blank">
            <img src="../assets/vue2.svg" style="display:inline-block; width:100px;" />
        </a>

        <a class="div2 divColor mb-5 bordercolor " style="flex-basis:30%; height:80px;" href="https://vuejobs.com/ "
            target="_blank">
            <img src="../assets/vu1.svg" style="display:inline-block;" />
        </a>

        <a class="div2 divColor mb-5 bordercolor " style="flex-basis:30%; height:80px;" href="https://formester.com/ "
            target="_blank">
            <img src="../assets/form.svg" style="display:inline-block;" />
        </a>

    </div>

    <div class="container-fluid my-5">
        <div class="row">
            <div class="row flex-row col-12 col-lg-6 justify-content-center">
                <h3 class=" my-3 text-white text-center">Sponsors</h3>

                <p class="pColor text-center">Help us make a fantastic event and experience for the Vue.js community by
                    sponsoring the conference!</p>


                <div class="div2 anchor coloring">
                    <a >
                        <router-link to='/Sponser'>Become A Sponser</router-link>
                    </a>
                </div>

            </div>


            <div class="row flex-row col-12 col-lg-6 justify-content-center">
                <h3 class=" my-3 text-white text-center">Stay in the loop</h3>

                <p class="pColor text-center">We will update the site with more details as we go! Stay connected with
                    our social media, so you don't miss any updates.</p>


                <div class="row justify-content-center mt-3">

                    <div class="icon  ">
                        <a href="https://twitter.com/vuetoronto" target="_blank"><i class="fa-brands fa-twitter  fa-2x" style="color:black"></i></a>
                        
                    </div>

                    <div class="icon ms-2  ">
                    <a href="https://www.youtube.com/vueconftoronto" target="_blank"> <i class="fa-brands fa-youtube  fa-2x "  style="color:black"></i></a>
                       
                    </div>

                </div>

            </div>

        </div>

    </div>



    <h4 class="text-white container-fluid mb-4" style="margin-top:90px;">Explore an amaizing Vue.js conference</h4>


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
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
 * {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            
        }

        :root {
            --main-color: #11252b;
            --second-color: #1b3138;
            --title-colot: #75c05e;
            --div-color: #1b3138;
            --div-sec-color: #5fbc6d;
            --p-color: #6e8a93;
        }

        a {
            text-decoration: none;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--main-color);
            width:100%;
        }

        .landing {
            min-height: 130vh;
            overflow: hidden;
        }

        .landing .background {
            position: relative;
            background-image: url("../assets/vueconf-toronto.cb789bc.jpeg");
            background-size: cover;
            background-position: center;
            width: 100%;
            max-height: 90vh;
        }

        .landing .background::before {
            content: '';
            background-image: url("../assets/Screenshot\ 2022-08-27\ 154015.png");
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: cover;
            opacity: 0.7;

        }

        .enshow {
            display: none;
        }

        .container-fluid {
            padding: 0 15px;
        }

        @media (min-width:1200px) {
            .container-fluid {
                padding: 0 248px;
            }

            .enshow {
                display: block;
            }
        }

        .landing .container-fluid .header .logo a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 18px;
        }

        .landing .container-fluid .header .nav a {
            font-weight: bold;
            text-transform: capitalize;
            font-size: 14px;
            color: #777777;
        }

        .landing .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 100px;
            margin-top: 10px;
        }

        @media (max-width:1000px) {
            .landing .text {
                justify-content: flex-start;
                align-items: flex-start;
                padding: 20px;
            }

            .landing .text .top {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .landing .text .top span {
            width: 7px;
            height: 7px;
            background-color: gold;
            border-radius: 50%;
            display: inline-block;
        }

        .landing .text .top p {
            text-align: center;
            color: white;
            margin: 0 10px;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
        }

        @media (max-width:1199px) {
            .landing .text .top p {
                margin: 10px;
            }
        }

        @media (max-width:1199px) {
            .bitch {
                position: relative;
                left: -54px;
            }
        }

        .landing .text .center p {
            font-size: 60px;
            font-weight: 700;
            text-align: center;
            color: white;
            margin-top: 10px;
            line-height: 1.3;
        }

        @media (max-width:1000px) {
            .landing .text .center p {
                font-size: 28px;
                text-align: start;
            }
        }

        .landing .text .bottom a {
            color: white;
            border: none;
            padding: 15px 25px;
            background-color: var(--title-colot);
            text-transform: capitalize;
            font-weight: bold;  
        
            display:block

        }

        @media (max-width:1000px) {
            .landing .text .bottom a {
                margin-bottom: 80px;
            }
        }

        .landing .text .bottom a:hover {

            background-color: #a0c563;
        }

        .landing .join_us {
            margin-top: -50px;
        }



        @media (max-width:1000px) {}

        .landing .join_us .vue p {
            color: #777;
            font-weight: 400;
            font-size: 16px;
            margin-right: 10px;
            text-align: center;
        }

        .landing .join_us .vue a {
            text-decoration: none;
            color: white;
            font-size: 25px;
            font-weight: bold;
            text-align: center;
            line-height: 20px;
        }


        .landing .join_us .join_content {
            display: flex;
            background-color: var(--second-color);
        }

        @media (max-width:1000px) {
            .landing .join_us .join_content {
                margin: 0 -20px;
            }
        }



        .landing .join_us .join_content .image {
            position: relative;
            flex-basis: 40%;

        }

        @media (max-width:767px) {
            .landing .join_us .join_content .image {
                width: 100%;
            }

        }

        @media (max-width:1000px) {
            .landing .join_us .join_content .image {
                height: 300px;
            }
        }

        .landing .join_us .join_content .image::before {
            content: "";
            position: absolute;
            background-color: black;
            width: 100%;
            height: 100%;
            opacity: 0.5;
        }

        .landing .join_us .join_content .image img {
            width: 100%;
            height: 100%;
        }

        @media (max-width:767px) {
            .landing .join_us .join_content {
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
            }

            .landing .join_us .join_content .image img {
                height: 320px;
            }
        }

        .landing .join_us .join_content .context {
            flex: 1;
            padding: 3rem 3rem 0;
        }

        @media (max-width:1000px) {
            .landing .join_us .join_content .context {
                padding: 50px 15px;
            }
        }

        .landing .join_us .join_content .context h2 {
            font-size: 14px;
            font-weight: 600;
            color: #75c05e;
            text-transform: uppercase;
        }

        .landing .join_us .join_content .context p:first-of-type {
            font-weight: 700;
            font-size: 30px;
            color: #ffffff;
        }

        .landing .join_us .join_content .context p:last-child {
            font-weight: 400;
            font-size: 18px;
            color: #728e97;

        }

        @media (max-width:1000px) {
            .landing .join_us .join_content .context p:last-child {
                line-height: 1.3;
            }
        }

        /* start speakers  */
        .speakers {
            margin-top: 20px;
        }



        .speakers .head {
            margin-bottom: 30px;
        }



        .speakers .head h2 {
            color: white;
            font-size: 30px;
            font-weight: 700;
        }

        .speakers .head p {
            font-size: 16px;
            font-weight: 400;
            color: #728e97;
        }

        .speakers .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: fit-content;

        }

        .speakers .box .image {
            margin-bottom: 10px;
            min-width: 224px;
            height: 224px;
            align-self: center;
        }

        @media (max-width:768px) {
            .speakers .box .image {
                min-width: 171px;
                height: 171px;
            }
            .speakers .box .text {
                width: 171px;
                height:50px;
            }

        }

        .speakers .box .image:hover img {
            border: 4px solid;
            border-image: linear-gradient(to right, #1ab58c 50%, #8ec842) 5;
        }

        .speakers .box .image img {
            max-width: 100%;
            max-height: 100%;
        }

        .speakers .box .text p:first-child {
            font-weight: 500;
            font-size: 16px;
            color: var(--title-colot);
            margin: 0;
        }

        .speakers .box .text p:last-child {
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
        }

        .speakers .footer p {
            color: #728e97;
            margin-top: 20px;
        }

        .contron_box {
            row-gap: 25px;
            column-gap: 15px;
        }
        .register{
           font-size:30px;
           font-weight:700;
           color:#ffffff;
           position:relative;
           top:45px;
           
        }
        /******************************************************/

        .divColor {
            background-color: #1b3138;
        }

        .pColor {
            color: #6e8a93;
        }

        .icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .icon.fa {
            color: #1b3138;
            font-size: 20px;
        }

        .icon:hover {
            background-color: #75c05e;
            cursor: pointer;
        }

        .icon:hover .fa {
            color: white !important;
        }

        .subButton:hover {
            background-color: var(--div-sec-color) !important;
        }

        .div2color {
            background-color: var(--div-sec-color);

        }

        .div2 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        @media (max-width:567px) {
            .inpEmail {
                width: 100px !important;
            }
        }

        .anchor {
            width: 200px;

            height: 60px;

            background-color: white;
        }

        .anchor a {
            text-decoration: none;
            color: #2e3441;
        }

        .anchor:hover {
            background-color: var(--div-color);
        }

        .anchor:hover a {
            color: white !important;

        }

        .calctotal:hover {
            cursor: pointer;
            color: red;
        }

        .calctotal2:hover {
            cursor: pointer;
            color: red;
        }

        .coloring:hover {
            background-color: var(--div-sec-color) !important;
            color: white !important;
        }

        .bordercolor:hover {
            border: 5px solid;
            border-image: linear-gradient(to right, #1ab58c 50%, #8ec842) 5;
        }

        .divwidth {
            flex-basis:31%;
            margin: 10px;
        }

        @media (max-width:767px) {
            .divwidth {
                 flex-basis: 100%;
                margin-button: 10px;
            }
        }
        @media (min-width:768px) and (max-width:987px) {
            .divwidth {
                 flex-basis: 45%;
                margin-button: 10px;
            }
        }

        .width2 {
            width: 45%;
            margin: 20px;
        }

        @media (max-width:767px) {
            .width2 {
                width: 100%;
                margin: 0;
            }
        }
        .last{
          font-size:14px;
          font-weight:400;
          margin-top:-40px
        }
        .underline{
            font-size:20px;
            font-weight:600;
        }
        .underline:hover{
        text-decoration:underline;
        text-underline-offset: 6px;
         text-decoration-color: var(--title-colot);
        }
</style>
