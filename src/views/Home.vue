<template>
  <b-container>
    <b-row align-v="center" align-h="center" cols="1" cols-sm="3" class="row1">
      <b-col>
        <cube-3d></cube-3d>
      </b-col>
      <b-row cols="1" cols-sm="1">
        <b-col style="padding: 0">
          <div class="name">
            <img src="../assets/nombre.svg" alt="name" width="100%" />
          </div>
        </b-col>
        <b-col align-v="center" align-h="center">
          <b-button variant="outline-danger">GET IN TOUCH</b-button>
        </b-col>
      </b-row>
      <b-col>
        <cube-3d></cube-3d>
      </b-col>
    </b-row>
    <!--     <b-row align-v="center">
      <skills-card></skills-card>
      <skills-card></skills-card>
      <skills-card></skills-card>
      <skills-card></skills-card>
    </b-row> -->
    <b-row cols="1" cols-sm="2" class="mt-4 contactInfo">
      <b-col v-scrollanimation>
        <div>
          <h2>Do you want to work together?</h2>
        </div>
        <div>
          <h3>Address</h3>
          <p>Montcada i Reixac, Barcelona</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>727735532</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>opt3.oscar@gmail.com</p>
        </div>
      </b-col>
      <b-col align-h="center">
        <b-card style="max-width: 20rem" class="mx-auto mb-2">
          <div class="mt-2">Name</div>
          <b-form-input placeholder="e.g. John Doe"></b-form-input>
          <div class="mt-2">Email</div>
          <b-form-input placeholder="Enter your name"></b-form-input>
          <div class="mt-2">Message</div>
          <b-form-textarea
            id="textarea"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <b-button href="#" variant="primary" class="mt-2">Send</b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <footer-landing v-scrollanimation></footer-landing>
    </b-row>
  </b-container>
</template>

<script>
/* import SkillsCard from "@/components/SkillsCard.vue"; */
import Cube3d from "@/components/Cube3d.vue";
import FooterLanding from "@/components/FooterLanding.vue";
export default {
  name: "Home",
  components: {
    /* "skills-card": SkillsCard,  */ "cube-3d": Cube3d,
    "footer-landing": FooterLanding,
  },
};
</script>

<style lang="scss" scoped>
.name {
  background-color: white;
  border-radius: 25px;
  margin: 20px;
}
@media only screen and (min-width: 768px) {
  .row1 {
    height: 70vh;
    margin: 0;
  }
  .row2 {
    top: 70vh;
  }
}
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
.contactInfo {
  color: white;
}
.card-body {
  color: black;
}
</style>
