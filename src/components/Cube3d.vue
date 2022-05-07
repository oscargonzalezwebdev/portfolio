<template>
  <div id="wrapD3Cube">
    <div id="D3Cube">
      <div id="side1"></div>
      <div id="side2"></div>
      <div id="side3"></div>
      <div id="side4"></div>
      <div id="side5"></div>
      <div id="side6"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#wrapD3Cube {
  width: 100%;
  height: 213px;
  margin: 20px auto;
}
#D3Cube {
  width: 112px;
  height: 112px;
  top: 50px;
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -moz-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  margin: auto;
  position: relative;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-animation: cubeRotation 5s infinite; /* Safari 4.0 - 8.0 */
  animation: cubeRotation 5s infinite;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes cubeRotation {
  0% {
    -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  }
  50% {
    -webkit-transform: rotateX(-22deg) rotateY(-128deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(-22deg) rotateY(-398deg) rotateZ(0deg);
  }
}
/* Standard syntax */
@keyframes cubeRotation {
  0% {
    transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  }
  50% {
    transform: rotateX(-22deg) rotateY(-238deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-22deg) rotateY(-398deg) rotateZ(0deg);
  }
}
#D3Cube > div {
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 112px;
  height: 112px;
  float: left;
  overflow: hidden;
  /*   opacity: 0.85; */
}
#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  background-image: url("../assets/dado1.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#side2 {
  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  background-image: url("../assets/dado5.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#side3 {
  transform: translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(56px);
  background-image: url("../assets/dado3.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#side4 {
  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  background-image: url("../assets/dado2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#side5 {
  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px)
    translateZ(56px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px)
    translateZ(56px);
  background-image: url("../assets/dado4.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#side6 {
  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px)
    translateZ(56px);
  background-image: url("../assets/logo.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
