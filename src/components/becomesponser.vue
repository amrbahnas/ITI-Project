<template>
    <div class="fullscreen">

        <div class="centerized one flex align-items-center justify-content-center pt-5">
            <div class="mt-4">
                <h3 style="color: #575757; font-size:30px; font-weight:bold;" class="text-center">Sponsorship Request
                </h3>
                <p style="color: #575757" class="text-center">VueConf Toronto 2022 | 1-3 November 2022</p>
            </div>
            <div class="row justify-content-center mt-5">
                <button class="btn btn-success" style="max-width:30%; max-height:20%; width:100px;"
                    @click="next2()">Start</button>
            </div>
        </div>

        <div class="centerized two">
            <div class="form-group p-2 p-md-5 d-flex " style="flex-wrap:wrap; justify-content:center; gap:10px">
                <input type="text" required
                    style="padding: 10px; border: 1px solid #ededed; font-size:15px;flex:1"
                    class="col-12 col-md-6 col-lg-6 mb-2" placeholder="Enter Your First Name" id="firstName" />
                <input type="text" required style="padding: 10px; border: 1px solid #ededed; font-size: 15px;flex:1"
                    class="col-12 col-md-6  col-lg-6 mb-2" placeholder="Enter Your Last Name" id="lastName" />
            </div>
            <div class="row justify-content-evenly p-4 mt-1 col-12">
                <button @click="next1()" class="btn colorbutton ms-md-5 "
                    style="max-width:30%; max-height:20%; width:100px; border:1px solid green; background-color:white; color:green; "
                    id="pervButoon">Perv</button>
                <button @click="next3()" class="btn btn-success  me-md-5"
                    style="max-width:30%; max-height:20%; width:100px;" id="pervButoon">Next</button>
            </div>
        </div>



        <div class="centerized three  ">
            <div class="form-group p-2 p-md-5">
                <label class="mb-2">Email<span style="color:red;">*</span></label>
                <input type="email" required placeholder="example@company.com" class="form-control"
                    style="font-size:12px;" />
            </div>
            <div class="d-flex justify-content-evenly p-3 ">
                <button @click="next2()" class="btn colorbutton ms-md-5 "
                    style="max-width:35%; max-height:20%; width:100px; border:1px solid green; background-color:white; color:green; "
                    id="pervButoon">Perv</button>
                <button @click="next4()" class="btn btn-success  me-md-5"
                    style="max-width:35%; max-height:20%; width:100px;" id="pervButoon">Next</button>
            </div>
        </div>


        <div class="centerized four ">
            <div class="form-group p-2 p-md-5">
                <label class="mb-2">Company<span style="color:red;">*</span></label>
                <input type="text" required placeholder="Your Company Name" class="form-control"
                    style="font-size:12px;" />
            </div>
            <div class="d-flex justify-content-evenly p-3 ">
                <button @click="next3()" class="btn colorbutton ms-md-5 "
                    style="max-width:35%; max-height:20%; width:100px; border:1px solid green; background-color:white; color:green; "
                    id="pervButoon">Perv</button>
                <button @click="next5()" class="btn btn-success  me-md-5"
                    style="max-width:35%; max-height:20%; width:100px;" id="pervButoon">Next</button>
            </div>
        </div>


        <div class="centerized five ">
            <div class="form-group p-2 p-md-2">
                <label style="font-weight:bold; color:#575757" class="mb-1">Message</label>
                <p style="color:rgba(61 ,61 ,61 ,0.7)">We'll get back to you as soon as possible or reach out to us at
                    sponsors@vuetoronto.com</p>
                <textarea class="w-100" placeholder="type your answer here"
                    style="padding: 10px;  font-size:15px; height:100px"></textarea>
            </div>
            <div class="d-flex justify-content-evenly p-3 mb-2">
                <button @click="next4()" class="btn colorbutton ms-md-5 "
                    style="max-width:35%; max-height:20%; width:100px; border:1px solid green; background-color:white; color:green; "
                    id="pervButoon">Perv</button>
                <button @click="finish()" class="btn btn-success  me-md-5"
                    style="max-width:35%; max-height:20%; width:100px;" id="pervButoon">Submit</button>
            </div>
        </div>



        <div class="d-flex justify-content-evenly flex align-items-center  ">
            <div class="alert alert-success successfully " style="width:30% color:green" role="alert"><i
                    class="fa-solid fa-circle-check" style="color:green; font-size:18px; margin-right:10px"></i>
                Form Submitted Successfully
            </div>
        </div>

    </div>

    <router-link class="home" to="/"></router-link>


</template>



<style>
    .fullscreen {
        background-image: url("../assets/vueconf-toronto.cb789bc.jpeg");
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .fullscreen::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-image: url("../assets/Screenshot\ 2022-08-27\ 154015.png");
        opacity: 70%;
    }



    .centerized {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 50%;
        background-color: white;
        transform: translate(-50%, -50%);
        width: 60%;       
        padding: 40px 10px;
        border-radius: 6px;
      
    }

    .two,
    .three,
    .four,
    .five {
        display: none;
    }

    .successfully {
        opacity: 0;
        transition: 2s;
    }


    textarea {
        border-radius: 5px;

    }

    textarea:focus {
        outline: 5px solid rgba(184, 227, 201, 1);
        border-radius: 5px;
        border: none;
    }
</style>

<script>

    export default {

        methods: {
            next1: function () {
                document.querySelector(".two").style.display = "none";
                document.querySelector(".one").style.display = "block";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "none";
                document.querySelector(".five").style.display = "none";
            },
            next2: function () {
                document.querySelector(".two").style.display = "block";
                document.querySelector(".one").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "none";
                document.querySelector(".five").style.display = "none";
            },
            next3: function () {
                document.querySelector(".two").style.display = "none";
                document.querySelector(".one").style.display = "none";
                document.querySelector(".three").style.display = "block";
                document.querySelector(".four").style.display = "none";
                document.querySelector(".five").style.display = "none";

            },
            next4: function () {
                document.querySelector(".two").style.display = "none";
                document.querySelector(".one").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "block";
                document.querySelector(".five").style.display = "none";


            },

            next5: function () {
                document.querySelector(".one").style.display = "none";
                document.querySelector(".two").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "none";
                document.querySelector(".five").style.display = "block";

            },
            finish: function () {
                document.querySelector(".successfully").style.opacity = "1";
                document.querySelector(".successfully").style.transform = "translatey(20px)";
                setTimeout(function () {
                    document.querySelector(".successfully").style.opacity = "0";
                    document.querySelector(".successfully").style.transform = "translatey(0)";

                    document.querySelector(".home").click();
                }, 2500);
            }
        }
    }
</script>