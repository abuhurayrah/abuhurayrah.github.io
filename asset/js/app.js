let modalTemplate = `
    <div class="feedmodal">
      <div @click="$emit('stopmodal')" class="feedmodal-outside"></div>
      <div class="feedmodal-arrow circle lg mirror-x"><div class="arrow"><svg class="arrow-svg text-secondary"><use xlink:href="#arrow-svg"/></svg></div></div>
      <div :style="{backgroundImage : modalphotourl}" class="feedmodal-content"></div>
      <div class="feedmodal-arrow circle lg"><div class="arrow"><svg class="arrow-svg text-secondary"><use xlink:href="#arrow-svg"/></svg></div></div>
    </div>
    `

Vue.component('modalphoto', {
  props: ['modalphotourl'],
  template: modalTemplate
})


  var app = new Vue({
    el: '#app',
    data: {
      hovers: [
        false,false,false
      ],
      showCatalog: false,
      photoUrl: null,
      productPageTab: 'about'
    },
    methods: {
      hover(obj){
        let clone = [...this.hovers]
        clone[obj.number] = obj.status
        this.hovers = clone
      },
      toggleCatalog(param){
        setTimeout(() => {
          this.showCatalog = param
        }, 10);
      },
      activeModal(e){
        this.photoUrl = e.target.style.backgroundImage
      },
      stopmodal(){
        this.photoUrl = null
      }
    }, 

  })
  
  // Vue.component('modalphoto', {
  //   data: function () {
  //     return {
  //       count: 0
  //     } 
  //   },
  //   template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
  // })

 