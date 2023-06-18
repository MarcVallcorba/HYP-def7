<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: team } = await useFetch(useRuntimeConfig().baseURL + '/server/teams/' + id)

    const { data: AllProjects } = await useFetch(useRuntimeConfig().baseURL + '/server/projects')

    var projects;

    projects  = AllProjects.value.filter(element => element.supervisor_name === team.value.name);
</script>


<template>
    <div class="main-team">
        <img src="~/public/img/handshake.png" alt="handshake" class="handshake-img"/>
      <div class="image-container2">
          <div class="overlay">{{team.name}}</div>
      </div>
    </div>

     <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/team"><a>Our team</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/team/id"><a>{{team.name}}</a></NuxtLink></li>
     </ol>
   <main>
    <NuxtLink to="/team" class="link"><TheButton color="#427AA1" textcolor="white">See the whole team</TheButton></NuxtLink>
    <Overview class="overview" :sections="['Education','Job Experience','Main Expertise','Supervised Projects']"/>
    <Return class="return_top"/>
     
    <div class="body-employee">
    <div class="employee-role">{{ team.role }}</div>
       <div class="employee-image-container">
           <img style="max-width:40%;" :src="'../'+team.image"/>
       </div>

       <div id="Education">
           <div class="section">Education</div>
           {{ team.education }}
       </div>


       <div id ="Job Experience">
           <div class="section">Job Experience</div>
           {{ team.job_experience }}
       </div>


       <div id="Main Expertise">
           <div class="section">Main Expertise</div>
           {{ team.main_expertise }}

           
       </div>


       <div id="Supervised Projects">
           <div class="section">Supervised Projects</div>
           {{ team.name }} worked on many projects with Ivy Ventures, but in particular, {{ team.name }} supervised so far:
           <div class="projects">
          <div v-for="project of projects" :key=index>
            <a class="project" :href="`/projects/${project.id}`" >
              <h3>{{project.project_name}}</h3>
              <br>
              <img :src="'../'+project.logo"  alt="Project Image">
              <p>
            </p>
            </a>
          </div>
        </div>
      </div>
    </div>
</main>


</template>

<style scoped>

main {
       display: block;
       margin-left:20%;
       padding-right:0;
       padding-bottom:5vh;
       max-width: 80%;
       margin-top: -10%;
   }

   .main-team {
        padding-bottom: 2%;
        background-color: #679436;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
        padding-top:4%;
    }


    .handshake-img{
      height:auto;
      width:45%;
      margin-left:55%;
      margin-top:2vh
    }

    .overview {
        margin-left: -15%;
    }
    .image-container2 {
        position: relative;
        display: inline-block;
        z-index: 2;
        background-size: contain;
        background-color: #679436;
    }

    
    .overlay {
        position: absolute;
        top: 35vh;
        margin:10%;
        width: 100%;
        right:90vw;
        height: 100%;
        color: white;
        padding: 0px;
        white-space: nowrap;
        margin-top:-350px;
        display: flex;
        align-items:center;
        text-align: center;
        font-size: 7vw;
        font-family: 'Arial Black';
        font-weight: bold;
        text-shadow: white 0 0 10px;
    }

   .employee-image-container{
       display: flex;
       justify-content: center;
       align-items: center;
   }
   .employee-role {
    font-size:5vw;
    font-family:'Garamond';
    text-align: center;
   }

   .link{
       font-size: 3vh;
       bottom:2%;
       font-family: 'Lato';
       left:3vw;        
       position: -webkit-sticky;
       position:fixed;
   
   }

   [id="Education"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Job Experience"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Main Expertise"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Supervised Projects"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }

   .section{
       margin:0;
       margin-bottom: 3%;
       margin-top: 5%;
       transition: opacity 1s ease;
       text-align: left;
       font-family: 'Garamond';
       font-size:xx-large;
       text-align: center;
       border-bottom: 2px solid transparent;
       border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
       border-image-slice: 1;
       width:100%;
       font-weight: bold;;
       z-index: 3;

   }
   .section::before {
   content: '─';
   margin-right: 0.6em;
   color: black;
}
   .section:after {
   content: '─';
   margin-left: 0.6em;
   color: black;
}

   /* Projects container */
   .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
}


.project {
  max-width: 15rem; /* Adjust the value as needed */
  flex-basis: calc(33.33% - 50px);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0px;
  border: 2px solid green;
  margin-bottom: 40px;
  margin-right: 20px;
  margin-left: 20px;
  overflow: hidden;
  width: 500px;
}


.project img {
  display: block;
  margin: 0 auto;
  width: -webkit-fill-available;
  height: auto;
  margin-right: 20px;
  margin-left: 20px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  
}


.project h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.project p {
  font-size: 14px;
  margin-bottom: 0;
  color: black;
  white-space: pre-wrap; /* Allows line breaks within the text */
}

.body-employee {
    margin-top:-20%;
}
   </style>