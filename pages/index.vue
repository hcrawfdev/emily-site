<template>
  <div id="content-div">
    <img class="cta-image" src="~/assets/EMC-LinkedIn.png" />
    <div class="link-buttons">
      <button class="link-button">
        <span>About</span>
      </button>
       <button class="link-button">
        <span>Service</span>
      </button>
       <button class="link-button">
        <span>Blog</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.cta-image {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
  width: 100%;
  height: auto;
}

#content-div {
  grid-area: content;
}

.link-buttons {
  display: flex;
  margin-top: 2vw;
}

.link-button {
  overflow: hidden;
  transition: all 300ms ease;
  min-height: 100px;
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  position: relative;
  border: 2px solid #111;
  margin: 0 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.link-button::before,
.link-button::after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
}

.link-button span {
  color: #111;
}

.link-button:after {
  width: 300%;
  height: 450%;
  left: -300%;
  transform: rotate(45deg);
  background-color: #E1A177;
  transition: all 300ms ease;
}

.link-button:hover span {
  color: #fff;
  z-index: 10;
  font-weight: 600;
}

.link-button:hover::after {
  left: -100%;
}

.link-button:hover {
  border: 2px solid #1B0C3D;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.9) 0px 30px 60px -30px;
}

@media (max-width: 480px) {
  .link-buttons{
    flex-direction: column;
  }

  .link-button{
    width:75%;
    margin-top: 20px;
  }
}
</style>
