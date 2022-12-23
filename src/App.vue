<script>

export default {
  data() {
    return {
      //所有信息
      msgs:[{"from":"洼子地出土","age":"商","id":"1A","material":"青铜","name":"史爵","size":"高21.5厘米","weight":"855克"},{"from":"洼子地出土","age":"商","id":"2A","material":"青铜","name":"觚","size":"高22.5厘米","weight":"815克"},{"from":"洼子地出土","age":"商","id":"3A","material":"青铜","name":"觯","size":"高17.58厘米","weight":"635克"},{"from":"蔡庄出土","age":"春秋","id":"6","material":"青铜","name":"簠","size":"高19.7厘米","weight":"8260克"},{"from":"蔡庄出土","age":"春秋","id":"7","material":"青铜","name":"盘","size":"高12.3厘米","weight":"6040克"},{"from":"丘上出土","age":"春秋","id":"8","material":"青铜","name":"舟","size":"高14厘米","weight":"1050克"},{"from":"铜石锅泉出土","age":"西周","id":"9A","material":"青铜","name":"鬲","size":"高19厘米","weight":"2060克"},{"from":"丘上出土","age":"春秋","id":"10A","material":"青铜","name":"鼎","size":"高27厘米","weight":"5050克"},{"from":"卞桥安靖出土","age":"西周","id":"11A","material":"青铜","name":"鼎","size":"高29.1厘米","weight":"6665克"},{"from":"铜石锅泉出土","age":"西周","id":"12A","material":"青铜","name":"鼎","size":"高16.5厘米","weight":"1200克"},{"from":"保太寨上出土","age":"春秋","id":"13","material":"青铜","name":"戈","size":"长19厘米","weight":"115克"},{"from":"武太水沟出土","age":"唐","id":"14A","material":"青铜","name":"双龙镜","size":"径20厘米","weight":"1280克"},{"from":"卞桥出土","age":"唐","id":"15A","material":"青铜","name":"双凤衔环镜","size":"径15.2厘米","weight":"650克"},{"from":"药材公司出土","age":"唐","id":"16","material":"青铜","name":"禽兽镜","size":"径17.7厘米","weight":"1430克"},{"from":"魏庄出土","age":"汉","id":"17","material":"青铜","name":"四乳虺镜","size":"径17.7厘米","weight":"845克"},{"from":"西埠阴出土","age":"唐","id":"18","material":"青铜","name":"花鸟镜","size":"径21.4厘米","weight":"1265克"},{"from":"洼子地出土","age":"唐","id":"19A","material":"青铜","name":"双鹦鹉镜","size":"径13.6厘米","weight":"365克"},{"from":"魏庄出土","age":"汉","id":"20A","material":"青铜","name":"盘龙镜","size":"径9.8厘米","weight":"180克"},{"from":"中流庄出土","age":"汉","id":"21A","material":"青铜","name":"青龙镜","size":"径10.8厘米","weight":"235克"},{"from":"卞桥国太庄","age":"汉","id":"22","material":"青铜","name":"位至三公镜","size":"径10.8厘米","weight":"150克"},{"from":"魏庄花峪庄","age":"汉","id":"23","material":"青铜","name":"长宜子孙镜","size":"径11.2厘米","weight":"215克"},{"from":"陈家寨出土","age":"金","id":"24A","material":"青铜","name":"双鱼镜","size":"径10.9厘米","weight":"100克"},{"from":"旧藏","age":"北朝","id":"25","material":"青铜","name":"神兽镜","size":"径11.7厘米","weight":"290克"},{"from":"魏庄出土","age":"魏晋","id":"26","material":"青铜","name":"飞鸟镜","size":"径8.8厘米","weight":"105克"},{"from":"旧藏","age":"汉","id":"27","material":"青铜","name":"袁氏博局镜","size":"径11.3厘米","weight":"225克"},{"from":"魏庄出土","age":"汉","id":"28","material":"青铜","name":"连弧铭文镜","size":"径8.6厘米","weight":"125克"},{"from":"魏庄出土","age":"汉","id":"29","material":"青铜","name":"连弧铭文镜","size":"径9.2厘米","weight":"180克"},{"from":"保太出土","age":"汉","id":"30","material":"青铜","name":"君宜高官镜","size":"径8.8厘米","weight":"105克"},{"from":"河湾出土","age":"唐","id":"31","material":"青铜","name":"葡萄镜","size":"径9.3厘米","weight":"160克"},{"from":"万寿宫出土","age":"宋","id":"33A","material":"银质","name":"银锭","size":"长14厘米","weight":"2000克"},{"from":"临涧前桃沟出土","age":"清","id":"35","material":"银质","name":"元宝","size":null,"weight":"1500克"},{"from":"白彦东沟出土","age":"北朝","id":"36A","material":"青铜","name":"镇远将军章","size":"面3X2.9厘米","weight":"105克"},{"from":"铜石遗址出土","age":"商","id":"37A","material":"陶质","name":"大口尊","size":"高41厘米","weight":"8150克"},{"from":"安靖出土","age":"新石器","id":"38A","material":"石质","name":"石铲","size":"高26.31厘米","weight":"540克"},{"from":"丰阳城后出土","age":"新石器","id":"39","material":"石质","name":"石斧","size":"高12.2厘米","weight":"870克"},{"from":"蔡庄遗址出土","age":"新石器","id":"40A","material":"骨质","name":"骨锥","size":"长18厘米","weight":null},{"from":"旧藏","age":"新石器","id":"41A","material":"石质","name":"钺","size":"高21.6厘米","weight":"340克"},{"from":"洼子地出土","age":"新石器","id":"42A","material":"石质","name":"斧","size":"高13.2厘米","weight":"560克"},{"from":"邱舆出土","age":"新石器","id":"43A","material":"石质","name":"刀","size":"长11.7厘米","weight":"80克"},{"from":"前孙庄出土","age":"新石器","id":"44","material":"石质","name":"斧","size":"高23厘米","weight":null},{"from":"卞桥安靖出土","age":"春秋","id":"45","material":"青铜","name":"鼎","size":"径16.8厘米","weight":"4290克"},{"from":"蔡庄出土","age":"春秋","id":"46A","material":"青铜","name":"匜","size":"高16.5厘米","weight":"3430克"},{"from":"县城种子站","age":"汉","id":"47A","material":"青铜","name":"炉","size":"高13.3厘米","weight":"1820克"},{"from":"保太堤后出土","age":"汉","id":"48A","material":"青铜","name":"洗","size":"高11厘米","weight":"2270克"},{"from":"地方出土","age":"新石器","id":"49","material":"陶质","name":"白陶鬹","size":"高25厘米","weight":"670克"},{"from":"保太出土","age":"汉","id":"50","material":"青铜","name":"多乳禽兽镜","size":"径16厘米","weight":"486克"},{"from":"沈武阳出土","age":"唐","id":"51","material":"青铜","name":"双风马镜","size":"径16.8厘米","weight":"575克"},{"from":"地方西崮出土","age":"宋","id":"52","material":"青铜","name":"福寿铭文镜","size":"径13.6厘米","weight":"205克"},{"from":"平邑同台出土","age":"金","id":"53","material":"青铜","name":"仙人镜","size":"径9.8厘米","weight":"210克"},{"from":"地方康太出土","age":"汉","id":"54A","material":"青铜","name":"部曲督印","size":"边长2.4厘米","weight":"60克"},{"from":"旧藏","age":"金","id":"55A","material":"青铜","name":"勾当公事印","size":"边长6.3厘米","weight":"695克"},{"from":"旧藏","age":"明","id":"56A","material":"青铜","name":"镏金佛像","size":"高12.5厘米","weight":"347克"},{"from":"旧藏","age":"明","id":"57A","material":"青铜","name":"菩萨像","size":"高27.3厘米","weight":"2970克"},{"from":"旧藏","age":"明","id":"58A","material":"青铜","name":"镏金菩萨像","size":"高20厘米","weight":"925克"},{"from":"仲村陈家寨出土","age":"金","id":"59","material":"瓷质","name":"四系瓶","size":"高34.3厘米","weight":"2400克"},{"from":"旧藏","age":"明","id":"60A","material":"铜质","name":"观音菩萨像","size":"高27.3厘米","weight":"2970克"},{"from":"公安移交","age":"明","id":"61A","material":"玉质","name":"带钩","size":"长14厘米","weight":"140克"},{"from":"捐献","age":"清","id":"65A","material":"纸质","name":"左宝贵书信集[114页]","size":null,"weight":null}],
      //当前展示
      
      ages:[],
      matter:[],

      selected_age:"all",
      selected_matter:"all",
    }
  },

  components: {
 
  },
  computed:{
    exhibit_msgs(){
      // console.log("in computed",this.selected_age,this.selected_matter);
      return this.msgs
      .filter(m=>(this.selected_age=="all"?true:(m.age==this.selected_age)))
      .filter(m=>(this.selected_matter=="all"?true:(m.material==this.selected_matter)));
    },
  },
  methods: {

  },

  beforeMount() {
    const nonExists=["7","21A","24A","25","29","45","47A","51","53","65A",];
    this.msgs = this.msgs.filter(m=>nonExists.indexOf(m.id)<0);
    

    this.ages= this.msgs.map(m=>m.age);
    this.ages=Array.from(new Set(this.ages));

    this.matter= this.msgs.map(m=>m.material);
    this.matter=Array.from(new Set(this.matter));

  }
}
</script>

<template>
  <div id="topContainer">
    <div id="header">
      <img id="logo" src="./assets/logo.png" />
    </div>
   <div id="body">
      <div id="sider">

        <div class="radioCard">
          <span class="radioheader">年代</span>
          <a-radio-group v-model:value="selected_age" class="radiogroup">
              <a-radio   value="all">
                <span class="radiotxt">全部</span>
              </a-radio>
              <a-radio v-for="age in ages"  :value="age">
                <span class="radiotxt">{{ age }}</span>
              </a-radio>
          </a-radio-group>
        </div>
        <br />
        <div class="radioCard">
          <span class="radioheader">材质</span> 
          <a-radio-group v-model:value="selected_matter" class="radiogroup">
              <a-radio  value="all">
                <span class="radiotxt">全部</span>
              </a-radio>
              <a-radio v-for="mtr in matter"  :value="mtr">
                <span class="radiotxt">{{ mtr }}</span>
              </a-radio>
          </a-radio-group>
        </div>

      </div>
      <div id="content">
        <div v-for="msg in exhibit_msgs" class="card">
          <a-image :src="'./img/'+msg.id+'.JPG'" />
          <span>{{msg.age+" "+msg.material+" "+msg.name}}</span>
          <br />
          <span>{{msg.from}}</span>
        </div>

      </div>
   </div>

  </div>


</template>

<style scoped>
#logo{
  max-width:8em;
}
.radiogroup{
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: column;
}
.radioCard{
  padding:1em;

  border-radius: 10px;
  backdrop-filter: blur(5px);
  background-color: #fffffe;
  border: 2px rgba(255,255,255,0.4) solid;
}
.radiotxt{
  font-size: 1.1em;
  font-weight: bold;
  color:rgb(193,146,91);
}
.radioheader{
  font-size: 1.2em;
  font-weight: bold;
  color:rgb(21, 146, 16);
}

#topContainer{
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* height:2000px; */
  width:100vw;
  
}
#header{
  display: flex;
  display: -webkit-flex; /* Safari */
  height:4em;
  width:100vw; 
  padding: 0.8em;
  background-color: #B8860B;
  justify-content:center;
  z-index: 99997;
}
#body{
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  
  /* height:2500px; */
  z-index: 100;
  width:100vw;
  background-color: #668b78;
}

#sider{
  height:100vh;
  min-width:12em;
  padding: 1em;
}
#content{
  width:100vw;
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-wrap: wrap;
  flex-direction: row;
  /* height:2500px; */
  justify-content: flex-start;
}
.card{
  padding:1em;
  width:15em;
}
span{
  font-size: 1.1em;
  color: #bedccd;
  font-weight: bold;
}

</style>
