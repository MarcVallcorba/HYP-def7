<!--
    Home page
-->
<script setup>
    import { ref } from "vue";
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: projects } = await useFetch(useRuntimeConfig().baseURL + '/server/projects')

    const name = ref("");
    
    const filteredProjects = computed(() => {
        // Checking for values where the full list is provided
        if(name.value == 0 || name.value == "")
            return projects.value

        const arr = []

        // Filtering the list
        for(let project of projects.value) {
            if(project.project_name.toLowerCase().includes(name.value))
                arr.push(project)
        }

        // Returning the filtered list
        return arr
    })
</script>



<template>
  <div class = introduction>
        <div id = "title"><p>Our projects</p></div>
  </div> 
  <main>

    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/projects"><a>Projects</a></NuxtLink></li>
    </ol>
      <Overview class="overview" :sections="['What are our projects about?','Top 5 relevant projects', 'Projects by area', 'All our projects']"/>
      <Return></Return>

  <div class="thebody">
      <div class ="block" id="Top 5 relevant projects">
        <h2>What are our projects about?</h2>
        At Ivy Ventures, we take immense pride in the diverse range of projects and startups we have nurtured and supported throughout our journey. Our commitment to driving innovation and making a positive impact in the world is reflected in the exceptional ventures that we have had the privilege to work with.

        Our portfolio of supported projects spans a wide array of industries, from groundbreaking environmental initiatives to revolutionary transportation solutions and life-changing healthcare innovations. Each project represents our dedication to supporting startups that are not only financially promising but also aligned with our mission to create a better future.

        We are proud to celebrate the achievements of our supported projects, which serve as beacons of innovation, social impact, and technological advancement. From clean energy solutions that combat climate change to transformative transportation technologies that revolutionize mobility, and from breakthrough medical treatments that save lives to digital health platforms that enhance access to care, our supported projects are making a difference in their respective domains.        <br>
      
      </div>
      <br>
      
      <div class ="block" id="Top 5 relevant projects">
        <div class ="block" id="Projects by area">
        <div class = "buttons">
        <NuxtLink to = "/projects/top5projects/"><TheButton color = "#679436">Top 5 relevant projects</TheButton></NuxtLink>
        &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
        <NuxtLink to = "/areas/projects_by_area/"><TheButton color = "#679436">Projects by area</TheButton></NuxtLink>
      </div>
    </div>
    </div>
        <br>
        

        <h2>All our projects</h2>
        <div class ="block" id="All our projects">
        Here are all the projects that we helped foster. Browse to your heart's content!
          
        <br><br>

          <div class="search-container">
          <input type="text" class="search-input" placeholder="Search projects" id = "age-filter" v-model = "name"/>
          
        </div>
          

        <div class="projects">
          <div v-for="project of filteredProjects" :key=index>
            <a class="project" :href="`/projects/${project.id}`" >
              <h3>{{project.project_name}}</h3>
              <br>
              <img :src='project.logo'  alt="Project Image">
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
  .introduction {
          background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
      padding-top:6%;
          font-size: 3vh;
          text-align:left;
          padding-bottom: 2%;
          width:100%;
          height: 40vh;
          background-color: #679436;
          opacity: 1;
          background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
          text-shadow: black 0 0 10px;
      }
#title{
    height: 250px;
    position : relative;
    margin-left:5%;
}


#title p {
    position : absolute;
    bottom: 0;
    font-size: 6vw;
    font-family: 'Arial Black';
}

    .thebody{
        padding-left:25vw;
        padding-right:5vw;
        padding-bottom:1vh;
        max-width: 80%;
        margin-top: -300px;
    }
.overview{
  margin-left: -150%;
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



.search-container {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 6px 10px;
  width: auto; /* Adjust the width as needed */
}

.search-input {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  font-size: 16px;
  padding: 4px;
  outline: none;
  width: 100%;
}

.search-input::placeholder {
  color: #888888;
}
.search-input:focus {
  box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
}

/* Additional styles to mimic Google's search bar */
.search-container:hover {
  box-shadow: 0 0 3px rgba(66, 133, 244, 0.3);
}

.search-container:focus-within {
  box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
  background-color: white;
}


.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    
</style>

