<script setup>
    const route = useRoute()
    const id = route.params.id


    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: project } = await useFetch(useRuntimeConfig().baseURL + '/server/projects/' + id)

    // WE GET THE SUPERVISOR

    console.log("project supervisor name:", project.value.supervisor_name)

    const { data: team } = await useFetch(useRuntimeConfig().baseURL + '/server/teams')

    //console.log("teams:", team.value);

    const supervisor  = team.value.find(element => element.name === project.value.supervisor_name);

    console.log("project supervisor:", supervisor.id);

    // WE GET THE AREAS 

    const { data: area } = await useFetch(useRuntimeConfig().baseURL + '/server/area')

    const project_areas = project.value.project_areas;

    console.log("project areas:", project_areas);

    const areasArray = project_areas.split(";");

    console.log("areas array:", areasArray);

    const area1  = area.value.find(element => element.name === areasArray[0]);
    
    const area2  = area.value.find(element => element.name === areasArray[1]);

    var twoAreas;

    if (area2 == null){
      twoAreas = "false";
      console.log("area 1:", area1);
      console.log("two aread:", twoAreas);


    }else{
      twoAreas = "true";
      console.log("area 1:", area1.id);
      console.log("area 2:", area2.id);
      console.log("two aread:", twoAreas);
    }

</script>

<template>
  <div class="introduction">
          <div class="overlay">{{project.project_name}}</div>
  </div>

  

  <Overview class="overview" :sections="['Introducing the startup', 'The team', 'More about the product','Related areas','The supervisor of the project']"/>
      
  <NuxtLink to="/projects" class="link"><TheButton color="#427AA1" textcolor="white">See all the projects</TheButton></NuxtLink>
  

  <main>
    <Return></Return>
  <div class="thebody">

  <div class="project_name">{{project.project_name}}&nbsp  <img  :src="'../'+project.logo" width="90" height="90"></div>

  
  <div class = "block" id="Introducing the startup">
    <h2>Introducing  {{ project.project_name }}</h2>          
        <img :src="'../'+ project.image" class = "imgtowrap"  width="500" height="500"> 
        {{ project.startup_presentation }} 
  </div>

  <br>
  <br>
  <h2>{{project.project_name}}'s team</h2>
  {{ project.startup_team }}

  <br>

  <br>
  <br>
  <h2>More about {{project.project_name}}'s service </h2>
  {{ project.startup_team }}   

  <br>
  <br>
  <br>


  <div class = "block" id="The supervisor of the project">
      <h2>{{supervisor.name}}, the supervisor of the project</h2>    
        
      
        <img :src="'../'+supervisor.image" class = "imgtowrapsupervisor" alt="Avatar" style="width:300px;height:300px;">


    {{ supervisor.education }}
    {{ supervisor.job_experience }}
    {{ supervisor.main_expertise }}

    <br>
    <br>

    <a :href="`/team/${supervisor.id}`">
    <TheButton color = "#679436">Learn more</TheButton>
    </a>
    

    </div>

    

    <div class = "block" id="Related areas">
      <h2>Related areas </h2>    
      This project is asociated with the following areas, click to discover what they are about and find similar projects!

      <br>
      <br>

      <div class = "buttons">

      <a :href="`/areas/${area1.name}`">
      <TheButton color = "#679436">{{area1.name}}</TheButton>
      </a>
      &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
      <div v-if="twoAreas == 'true'">
        
        <a :href="`/areas/${area2.name}`">
        <TheButton color = "#679436">{{area2.name}}</TheButton>
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
        padding-bottom:5vh;
        max-width: 95%;
        margin-top: -10%;
        padding-right: 20px;
    }

    .introduction {
        padding-top:6%;
        font-size: 3vh;
        text-align:left;
        padding-bottom: 2%;
        height: 40vh;
        background-color: #679436;
        opacity: 1;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
        text-shadow: black 0 0 10px;
    }

#title{
    height: 600px;
    position : relative;
    margin-left:5%;
}


#title p {
    position : absolute;
    bottom: 0;
    font-size: 6vw;
    font-family: 'Arial Black';
}

.project_name{
      font-size: 8vw;
      font-family:'Garamond';
      text-align: center;
  }
    .introduction {
        background-color: #679436;
        padding: 150px;
        font-size: 3vh;
        text-align:left;
        height:12vh;
    }
    #title{
    height: 250px;
    position : relative;
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

    #title p {
        position : absolute;
        bottom: 0;
        font-size: 6vw;
        font-family: 'Arial Black';
    }

.thebody{
        padding-left:25vw;
        padding-bottom:1vh;
        margin-top: -10%;

    }
  
    .supervisor {
  max-width: 100%; /* Set to 100% to occupy the full width */
  flex-basis: calc(33.33% - 20px);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  border: 2px solid green;
  margin-bottom: 50px;
  margin-right: 50px;
  overflow: hidden;
  
}

.supervisor img {
  display: block;
  margin: 0 auto;
  width: auto;
  height: auto;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}

.supervisor h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.supervisor p {
  font-size: 14px;
  margin-bottom: 0;
  color: black;
  white-space: pre-wrap; /* Allows line breaks within the text */
}


    .link{
        font-size: 3vh;
        margin-top:15%;
        font-family: 'Lato';
        left:3vw;        
        position: -webkit-sticky;
        position:fixed;
    
    }

    [id="Introducing the startup"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
        padding-bottom: 15%;

    }
    [id="The supervisor of the project"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: white;
        border-radius: 50% 40% / 10% 10% ;
        padding-bottom: 150px;

    }

    .imgtowrap {
        float: right;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
        margin-left:15px;
    }
    .imgtowrapsupervisor {
        float: left;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
        margin-left:15px;
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

    a{
      display: flex;
      justify-content: center;
      align-items: center;

        }
    .buttons{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

  


</style>