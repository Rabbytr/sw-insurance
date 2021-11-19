<template>
  <teleport to="body">
    <canvas id="expoptc"></canvas>
  </teleport>
</template>


<script>

import {onMounted} from "vue";
import html2canvas from "html2canvas";
import {createParticleAtPoint, createParticleCanvas} from "./ptkexpd";

export default {
  name: "particle",
  setup(){
    let particleCtx = null
    let particles = []

    onMounted(()=>{
      // html2canvas(ele.value).then(canvas=>{
      //   document.body.appendChild(canvas);
      // })
    })

    const fadeOut = (el) => {
      html2canvas(el.value).then(canvas=>{
        let ctx = canvas.getContext("2d")
        particleCtx = createParticleCanvas(
            document.getElementById("expoptc")
        )
        let reductionFactor = 17;

        // Get the color data for our button
        let width = el.value.offsetWidth;
        let height = el.value.offsetHeight
        let colorData = ctx.getImageData(0, 0, width, height).data;

        // Keep track of how many times we've iterated (in order to reduce
        // the total number of particles create)
        let count = 0;

        // Go through every location of our button and create a particle
        for(let localX = 0; localX < width; localX++) {
          for(let localY = 0; localY < height; localY++) {
            if(count % reductionFactor === 0) {
              let index = (localY * width + localX) * 4;
              let rgbaColorArr = colorData.slice(index, index + 4);

              let bcr = el.value.getBoundingClientRect();
              let globalX = bcr.left + localX;
              let globalY = bcr.top + localY;

              createParticleAtPoint(particles,globalX, globalY, rgbaColorArr);
            }
            count++;
          }
        }

        window.requestAnimationFrame(update);
      })
    }

    const update = () =>{
      // Clear out the old particles
      if(typeof particleCtx !== "undefined") {
        particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }

      // Draw all of our particles in their new location
      for(let i = 0; i < particles.length; i++) {
        particles[i].draw(particleCtx);

        // Simple way to clean up if the last particle is done animating
        if(i === particles.length - 1) {
          let percent = (Date.now() - particles[i].startTime) / particles[i].animationDuration;

          if(percent > 1) {
            particles = [];
          }
        }
      }

      // Animate performantly
      if(particles.length>0){
        window.requestAnimationFrame(update);
      }
    }

    return {fadeOut}
  }
}



</script>

<style scoped>

</style>