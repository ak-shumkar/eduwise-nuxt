<template>
  <div class="loader-content">
      <div class="loader blasting-ripple"></div>
  </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style scoped>

.loader-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: auto;
    z-index: 2000;
}


/*
The loaders use CSS custom properties (variables) to control the attributes of the loaders
*/
:root{
	--loader-width: 70px;
	--loader-height: 70px;
	--loader-color-primary: #27ae60;
	--loader-color-secondary: #eee;
	--line-width: 3px;
	--animation-duration: 2s;
	--loader-initial-scale: 0.1;
}
.loader,.loader:before,.loader:after{
	box-sizing: border-box;
	flex-grow: 0;
	flex-shrink: 0;
}
/*
In order to get optimal results, please only change the 
variables above and don't change anything in the actual loader code
*/
	
	

/*
    Blasting Ripple Styles
*/
@keyframes blast-ripple {
    0% {
        top: calc(var(--loader-height, 100px) / 2 - var(--line-width, 4px));
        left: calc(var(--loader-width, 100px) / 2 - var(--line-width, 4px));
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: -1px;
        left: -1px;
        width: calc(var(--loader-width, 100px) - var(--line-width, 4px));
        height: calc(var(--loader-height, 100px) - var(--line-width, 4px));
        opacity: 0;
    }
}

.loader.blasting-ripple {
    position: relative;
    width: var(--loader-width, 100px);
    height: var(--loader-height, 100px);
}

.loader.blasting-ripple::after {
    opacity: 0;
    content: "";
    position: absolute;
    border: var(--line-width, 4px) solid var(--loader-color-primary, #00f);
    opacity: 1;
    border-radius: 50%;
    animation: blast-ripple var(--animation-duration, 1s) cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader.blasting-ripple::before {
    opacity: 0;
    top: calc(var(--loader-height, 100px) / 2 - var(--line-width, 4px));
    left: calc(var(--loader-width, 100px) / 2 - var(--line-width, 4px));
    content: "";
    position: absolute;
    border: var(--line-width, 4px) solid var(--loader-color-primary, #00f);
    opacity: 1;
    border-radius: 50%;
    animation: blast-ripple var(--animation-duration, 1s) cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation-delay: calc(var(--animation-duration,1s) / 2);
}
</style>