<!--
    Home page
-->
<template>
    <main>
    <div class="image-container1">
        <img style="width:100%" src="~/assets/img/background_home.webp" alt="Image accueil"/>
            <div class="overlay">
                <div class="slogan">Growing together with <br> <span class="hltxt" style="color:#679436">Ivy</span></div>
            </div>
    </div>
    </main>

    <Overview class="overview" :sections="['Key Numbers', 'Join Ivy', 'The Team', 'Main Areas', 'Projects', 'Join the Adventure']"></Overview>
    <Return class="return_top"/>

    <div class="thebody">

        <div class="catchphrase">Cultivating success through <span class="hltxt" style="color:#679436">strategic investments</span></div>

        <div id = "Key Numbers">
            <h2 :class="{ show: textvisible }">IVY in numbers</h2>
            <div class="my-grid" :class="{ show: showGrid }">
                <div class="my-grid-item">
                    <div class="highlights">1st</div>
                        Impact investing firm worldwide
                </div>
                <div class="my-grid-item"> 
                    <div class="highlights">30</div>
                Successful businesses supported</div>
                <div class="my-grid-item">
                        <div class="highlights">500M</div> Invested so far</div>
            </div>
        </div>
            <div class ="block" id="Join Ivy">
                <h2 id="joinivy">Join Ivy</h2>
                <img class="imgtowrap" src="~/assets/img/joinus.webp "/>
                At Ivy Ventures, we believe in a transparent and collaborative approach to building partnerships. Startups interested in partnering with us can initiate the process by reaching out to our team. We encourage entrepreneurs to connect with us through networking events, introductions, or by directly submitting their proposals. We are always excited to explore innovative ideas and engage with passionate founders who are determined to make a difference. Find out how to join us by clicking the button below! <div class="button-center"><NuxtLink to = "/how_it_works"><TheButton color="#20394b">How it works</TheButton></NuxtLink></div></div>

        <div class = "block" id="The Team">
                <h2 id ="team-areas">The Team</h2>
                <img style="width:100%;margin-bottom: 2%;" src="~/assets/img/team.jpeg"/>
            <div>At Ivy Ventures, our success is driven by our exceptional team of professionals who bring a wealth of experience, expertise, and passion to the world of venture capital. With a diverse range of backgrounds and skills, our team is dedicated to supporting innovative startups in various areas. By combining deep industry knowledge, strategic insights, and a collaborative approach, we strive to make a meaningful impact on the businesses we partner with. Each member of our team brings a unique perspective and skill set that we have every intention to share with our partners. You can find out more about each member of our team by clicking the button below! <div class="button-center"> <NuxtLink to = "/team"><TheButton color="black">Meet our Team</TheButton></NuxtLink></div></div> </div>

        <div class = "block" id="Main Areas">
                <div class="areas">
                    <p><h2 id="team-areas">Main Areas </h2><div class="button-center"> <NuxtLink to = "/areas"><TheButton color="#000000">See Areas</TheButton ></NuxtLink></div></p>
                    <div class="delimiter"></div>
                    <table>
                        <tr>
                            <td style="background-color: #EBF2FA;"><NuxtLink to = "/areas/health/"><TheButton color="#EBF2FA">Health</TheButton></NuxtLink></td>
                            <td style="background-color: #427AA1;"><NuxtLink to = "/areas/transport/"><TheButton color="#427AA1">Transport</TheButton></NuxtLink></td>
                        </tr>
                        <tr>
                            <td style="background-color: #679436;"><NuxtLink to = "/areas/environment/"><TheButton color="#679436">Ecology</TheButton></NuxtLink></td>
                            <td>& more!</td>
                        </tr>
                    </table>
                    </div>
</div> 

        <div class= "block" id="Projects">
                <h2>Projects</h2>
                <div style="text-align:center">Here are a few projects we worked on:</div>
                 <br><br>
                 <div class="scroll-container">
  
  <section class="carousel">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
        <img id = "car" src="../assets/img/Ecotech.png" class="img-carousel" alt="Proj1">
           <div class="image-description"><NuxtLink to = "/projects/1">EcoTech Solutions</NuxtLink></div>
        <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev"></a>
        <a href="#carousel__slide2"
           class="carousel__next"></a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">       
        <img id = "car" src="../assets/img/GreenCommute.png" class="img-carousel"  alt="Proj2">
        <div class="image-description"><NuxtLink to = "/projects/2">GreenCommute</NuxtLink></div>
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev"></a>
      <a href="#carousel__slide3"
         class="carousel__next"></a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
        <img id = "car" src="../assets/img/MedTech.png" class="img-carousel" alt="Proj3">
        <div class="image-description"><NuxtLink to = "/projects/3">MedTech Innovations</NuxtLink></div>

      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev"></a>
      <a href="#carousel__slide4"
         class="carousel__next"></a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
        <img id = "car" src="../assets/img/CleanWater.png" class="img-carousel"  alt="Proj4">
    <div class="image-description"><NuxtLink to = "/projects/4">BioGenetics</NuxtLink></div>

      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev"></a>
      <a href="#carousel__slide1"
         class="carousel__next"></a>
    </li>
  </ol>


  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">

        <a href="#carousel__slide1"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button"></a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button"></a>
      </li>
    </ol>
  </aside>
</section>
</div>
                
                At Ivy Ventures, we take immense pride in the exceptional projects and startups we have nurtured throughout our journey. Our investment focus around the environment, means of transportation, and health has allowed us to support groundbreaking ventures that are driving innovation, sustainability, and social impact. From clean energy solutions to revolutionary transportation technologies and life-saving healthcare innovations, our portfolio reflects our commitment to making a difference in these critical sectors. You can find out more about each project we supported by clicking the button below!<div class="button-center"><NuxtLink to = "/projects"><TheButton color="#679436">See our projects</TheButton></NuxtLink></div></div>

        <div class = "block" id="Join the Adventure">
                <h2 :class="{ show: textvisible }">Join the ad<i>venture</i></h2>
         Need someone to invest in your idea?<div class="button-center"> <NuxtLink to = "/contact"><TheButton color="#679436">Join Ivy!</TheButton></NuxtLink></div> </div>
    </div>
</template>



<script>
import Overview from "@/components/Overview.vue";

export default {
    data() {
      return {
        showGrid: false,
        textvisible: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const grid = document.querySelector(".my-grid");
        const gridPos = grid.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        const txt = document.querySelector("h2");
        const txtPos = txt.getBoundingClientRect().top;

        if (gridPos < screenHeight * 0.8) {
          this.showGrid = true;
        }

        if (txtPos < screenHeight * 0.8){
            this.textvisible = true;
        }
      },
    },

    components: {
        Overview,
    }
  };
</script>


<style scoped>

    .thebody{
        padding-left:25vw;
        padding-right:5vw;
        padding-bottom:5vh;
        max-width: 80%;
        margin-top: -30%;
    }
    .slogan {
        font-size: 7vw;
        font-family: 'Arial Black';
        text-align: center;
        width:95%;
        margin:  auto;
        margin-top:15vh;

    }

    .hltxt  {
        transition:0.5s;
        color:white
    }

    .hltxt:hover{
        text-shadow: #679436 0 0 10px;
        transition:0.5s
    }

    .image-container1 {
        position: relative;
        display: inline-block;
        z-index: 2;
    }

    .image-container1:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 15%;
        background-image: linear-gradient(to bottom, rgb(255, 255, 255,0), rgb(235, 250, 238,0.7), #ebfaee 95%)
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 0px;
        box-sizing: border-box;
    }
    
    .catchphrase{
        font-family:'Arial';
        display:inline-block;
        position:absolute;
        text-align: center;
        font-size:3vw;
        color:black;
        font-weight: bold;
        margin:auto;
        margin: 0;
        line-height: 1.5;
        max-width:100vw;
    }

    p {
        padding:10%;
        padding-bottom: 0;
    }

    td {
        text-align: center;
    }
    .my-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 100px);
        /*gap: 5vh;*/
        opacity: 0;
        transition: opacity 1s ease;
        margin:0;
    }
    .my-grid.show {
        opacity: 1;
    }
    .my-grid-item {
        padding: 20px;
        font-size: 3vh;
        text-align: center;
        height:10vh;
        transition: 0.5s;
        border-image: linear-gradient(to bottom, white, #679436, white) 1 100%;
        border-right: 1.5%;
        border-left: 0;
        border-style: solid;
        overflow: hidden;

    }
    .my-grid-item:last-child {
	border-right: 0;
}
    h2{
        margin:0;
        opacity:1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
        border-image-slice: 1;
        width:100%;

    }

    h2#joinivy{
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #20394b, rgba(255, 255, 255, 0));
        margin:0;
        opacity: 1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image-slice: 1;
        width:100%;
    }

    h2#team-areas{
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), black, rgba(255, 255, 255, 0));
        margin:0;
        opacity: 1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image-slice: 1;
        width:100%;
    }
    h2::before {
	content: '─';
	margin-right: 0.6em;
	color: black;
}
    h2:after {
	content: '─';
	margin-left: 0.6em;
	color: black;
}
    h2.show{
        opacity:1;
    }

    .highlights{
        font-weight:lighter;
        color:#679436;
        font-family: 'Garamond';
        font-weight: bold;
        font-size: 5vh;
    }

    .block {
        margin-top: 8%;
        margin-bottom: 2%;
    }

    .button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
    }

    [id = "Key Numbers"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
    }
    [id = 'Join Ivy']{
        background-color: #427AA1;
        padding:5%;
        border-radius: 3%;
        border: solid #20394b 2px;
        text-align: justify;
    }

    [id='Main Areas']{
        background-color: #fff;
        border: solid black 2px;
        text-align: center;
    }

    [id="The Team"]{
        background-color: #679436;
        border: solid black 2px;
        padding: 5%;
        border-radius: 3%;
        text-align: justify;
    }

    [id="Join the Adventure"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
    }

    .imgtowrap {
        float: left;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
    }

    .button-center{
        justify-content: center;
    }

    .areas {
  display: flex;
  align-items: center;
}

.areas p {
  flex: 1;
  color:black;
  font-size: 5vh;
  text-align: center;
  margin-top:0;
  padding-top:3%
}
.delimiter {
  width: 2px;
  height: 15vh;
  background-image: linear-gradient(0.5turn,  rgba(255, 255, 255, 0), black, rgba(255, 255, 255, 0));
  margin-right: 10px;
}

.areas table {
  flex: 1;
  margin-left: 20px;
  border-collapse: collapse;
  margin-right: 3%;
}

td {
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 2%;
  font-size: x-large;
  border-radius: 4px;

}

.carousel{
    box-sizing: border-box;
    scrollbar-color: transparent transparent; 
    scrollbar-width: 0px;
    text-align: center;
}
.areas a {
    color:black;
    transition:0.5s
}

.areas a:hover {
    color: #000;;
    text-shadow: black 0 0 10px;
    transition:0.5s;
}



  
  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .carousel {
    position: relative;
    padding-top: 45%;
    filter: drop-shadow(0 0 10px #0003);
  }
  
    
  *::-webkit-scrollbar {
    width: 0;
  }
  

  .carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    height: 70vh;
  }
  
  .carousel__slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    counter-increment: item;
  }
  
  .carousel__slide:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-40%,70px);
    color: #fff;
    font-size: 2em;
  }
  
  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }
  
  .image-description {
  position: absolute;
  width:60%;
  transform: translate(0,-100%);
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  left:20.3%;
  height:2.4em;
}

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }
  
  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  
  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }
  
  .carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #333;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }
  
  .carousel::before,
  .carousel::after,
  .carousel__prev,
  .carousel__next {
    position: absolute;
    top: 0;
    margin-top: 37.5%;
    width: 4rem;
    height: 4rem;
    transform: translateY(-50%);
    border-radius: 50%;
    font-size: 0;
    outline: 0;
  }
  
  .carousel::before,
  .carousel__prev {
    left: -1rem;
  }
  
  .carousel::after,
  .carousel__next {
    right: -1rem;
  }
  
  .carousel::before,
  .carousel::after {
    content: '';
    z-index: 1;
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    color: #679436 ;
    font-size: 2.5rem;
    line-height: 4rem;
    text-align: center;
    pointer-events: none;
  }
  
  .carousel::before {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
  }
  
  .carousel::after {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
  }

   #car {
    height:25vw;
    width:auto
  }

</style>
