<!--
    Area Ecolo 
-->


<script setup>
    const { data: area } = await useFetch(useRuntimeConfig().baseURL + '/server/area')
</script>



<template>
    <main>
    <div class="image">
                <div id="slogan">Help construct the world of tomorrow</div>
    </div>
    
    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/areas"><a>Areas</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/areas/environment"><a>Environment</a></NuxtLink></li>
    </ol>
    
    <Overview class="overview" :sections="['Summary','A few number','Projects']"/>
    <Return class="return_top"/>



    <div class="thebody">

    <div id="Summary">

    <h2 :class="{show: textvisible}">Summary</h2>
    <br><br>
    {{ area[2].short_summary }}
    <br><br>
    {{ area[2].summary}}
   <br><br><br><br>
    </div>
    <div id="A few number">
    <h2 :class="{show: textvisible}">A few number</h2>
    <br>
      <div class="my-container">
          <div class="my-grid" :class="{ show: showGrid }">  
              <div id="circle_1" align = center><br><br><br><br><br>1 animal or plant species out<br> of 8 is threatened with extinction !</div>
              <div></div>
              <div id="circle_1" align = center><br><br><br>8 million metric <br>tons of plastic waste<br> end up in our oceans annually,<br>posing a grave <br>threat to marine <br>life and ecosystems.</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div id="circle_2" align = center><br><br><br>1 million plastic <br>bottles sold every<br>minute in the world. </div>
              <div></div>

          </div>
      </div>
    </div>
    <br>
    <div id="Projects">

      <br><br><br><br><br><br><br><br><br>
      <h2 :class="{show: textvisible}">Projects</h2>
      <br><br>
        <div class = "carousel"  style="float: center">
          <input type="radio" name="position" />
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <proj id="carousel">
            <div class="item">
              <NuxtLink to = "/projects/4"><img class="image_test" src="~/assets/img/CleanWater.png" height="200" width="240"></NuxtLink>
              <div class="image-description" align = "center"><NuxtLink to = "/projects/4">CleanWater</NuxtLink></div>
            </div>
            <div class="item">
              <NuxtLink to = "/projects/8"><img class="image_test" src="~/assets/img/EcoFashion.png" height="200" width="240"></NuxtLink>
              <div class="image-description"><NuxtLink to = "/projects/8">Ecofashion</NuxtLink></div>
            </div>
            <div class="item">
                    <br><br><br><br>
                    <div class="button-right"><NuxtLink to = "/projects/environment"><TheButton color=red>See all projects <br>in this area</TheButton></NuxtLink></div>
            </div>
          </proj>
      </div>
      <div >
        <div class="button-center"><NuxtLink to = "/areas"><TheButton color="#679436">See all areas</TheButton></NuxtLink></div>
      <br><br>
      </div>
      </div>
    </div>

</main>

</template>


<script>
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
};
</script>





<style scoped>

.image {
  padding: 7vw;
    font-size: 3vh;
    background-image:url(~/assets/img/ecolo2.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    }
  

       
#slogan{
      position : relative;
      font-size: 5vw;
      font-family: 'Arial Black';
      color:white;
      text-align: center;
      margin:0%;
}



.thebody{
    padding-left:25vw;
    padding-right:3vw;
    padding-bottom:5vh;
    max-width: 80%;
    margin-top: -20%;
}

#circle_1{
background:#679436;
border-radius:50%;
width:23vw;
height:23vw;
border:2px solid #679436;
color: white;
font-family: 'Arial Black'; 
}

#circle_2{
background:#679436;
border-radius:50%;
width:16vw;
height:16vw;
border:2px solid #679436; 
color: white;
font-family: 'Arial Black';
}


.my-container {
          padding-bottom:10%;
      }
.my-grid {
       display: grid;
       grid-template-columns: repeat(5, 1fr);
       grid-template-rows: repeat(3, 50px);
       gap: 5vh;
       opacity: 0;
       transition: opacity 1s ease;
       margin:0;
   }
.my-grid.show {
    opacity: 1;
}


#content{
          border-radius: 10px;
          background:#679436;
          width:220px;
          height:300px;
          border:2px solid #679436; 
          color: white;
        }

      .projects_grid {
          padding-bottom:10%;
      }

      .projects_list{
          display: grid;
          grid-template-columns: repeat(3, 240px);
          grid-template-rows: repeat(2, 320px);
          gap: 5vh;
          opacity: 0;
          transition: opacity 1s ease;
          margin:0;
      }
      .projects_list.show {
          opacity: 1;
      }





      h2{
        margin:0;
        margin-bottom: 3%;
        transition: opacity 1s ease;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
        border-image-slice: 1;
        width:100%;

    }

    h2::before {
	content: '─';
	margin-right: 0.6em;
	color: black;
}


.image-description {
  position: absolute;
  width:100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
}

    h2:after {
	content: '─';
	margin-left: 0.6em;
	color: black;
}



.carousel {
  height: 400px;
  margin-right: 10px;
  display: grid;
  grid-template-rows: 300px 100px;
  grid-template-columns: 1fr 20px 20px 20px 20px 20px 1fr;
  align-items: center;
  justify-items: center;
  position:relative;
  margin-left :3vw;
  margin-right :3vw;

}



proj#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 60vw;
  height: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 500px;
  --items: 3;
  --middle: 2;
  --position: 1;
  pointer-events:none;
}

div.item {
  position: absolute;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-20deg * var(--r)))
    translateX(calc(-200px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
  pointer-events:all;
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-color: #679436;
}
div.item:nth-of-type(2) {
  --offset: 2;
  background-color: #679436;
}
div.item:nth-of-type(3) {
  --offset: 3;
  opacity: 0.6;
  background-color: #679436;
}
input:nth-of-type(1) {
  grid-column: 3 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ proj#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 4/ 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ proj#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 5 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ proj#carousel {
  --position: 3;
}


.image_test{
  margin-top: 20%;
  margin-left: 12%;
  margin-right: 10%;
}

.button-right{
        display: flex;
        justify-content: right;
        margin-right:2vw;
    }

.button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
        vertical-align: middle;
   }


</style>
