import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App);

// -----------------------------------------------------
//引入antdv相关
import 'ant-design-vue/dist/antd.css';

import { 
    Layout,
    Image,
    Divider,
    Radio,
    RadioGroup,
    RadioButton,
} from 'ant-design-vue';


app.use(Layout)
.use(Image)
.use(Radio)
.use(RadioGroup)
.use(RadioButton)
.use(Divider)
.mount('#app');


