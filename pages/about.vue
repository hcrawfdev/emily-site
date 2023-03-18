<template>
  <div id="content-div" class="about-div">
    <div class="about-text">
      <h2>Born and raised in Cincinnati, OH.</h2>
      <p>
        Emily attended the prestigious college preparatory Mount Notre Dame high school in Reading, OH before earning
        her B.S.B.A. in Marketing and Entrepreneurship from Xavier University. Throughout high school she played golf
        and bowling, became a leader in multiple school clubs, and attended the Hugh O' Brien Youth (HOBY) Leadership
        conference on behalf of her high school's class. Her involvement and leadership in extracurriculars stayed
        constant throughout her college years.
      </p>
      <p>
        Emily became her neighborhood paper girl in third grade and has worked hard ever since. Throughout high school
        and college, her passion for understanding every aspect of business led her to pursue positions in retail,
        sales, and market research.</p>
      <p>After graduation, Emily landed a job with Total Quality Logistics. After a time in their sales department, she
        transitioned to a role on the Client Services team (known internally as the Prospecting Department) and quickly
        landed a promotion to Sales Data Analyst. Daily, Emily gets to interact with external clients, internal
        salesreps, and create actionable synergies amongst internal departments. She wants to continue to make an impact
        on the CPG products and brands that consumers need and trust.</p>
      <p>When not working, Emily can be found playing golf, reading, trying new restaurants, or exploring the outdoors.
      </p>
    </div>
    <img class="about-img" alt="" src="~/assets/ivy-em-bg.jpg">
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
  padding: 5px
}

p {
  padding-bottom: 2rem;
}

.about-img {
  width: 400px;
  height: auto;
  grid-area: picture;
  box-shadow: 17px 15px 12px 5px rgba(0, 0, 0, 0.42);
  border: 1px solid black;
  border-radius: 30px;
}

.about-text {
  text-align: center;
  grid-area: text;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-right: 10px;
}

.about-div {
  grid-area: content;
  display: grid;
  padding-top: 5vh;
  padding-left: 5vw;
  padding-right: 5vw;
  grid-template-areas:
    "text text picture"
}

#content-div {
  margin-top: 10vh;
}

@media (max-width: 480px) {
  .about-img {
    width: 300px;
    margin: auto;
  }

  .about-div {
    grid-template-areas:
      "picture"
      "text";
    padding-top: 0;
  }

  #content-div {
    margin-top: 0;
  }
}
</style>
