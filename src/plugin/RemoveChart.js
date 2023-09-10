export default {
    install(Vue) {

        Vue.config.globalProperties.$remove_chart = 
            function(class_name) {
                const BOLLINGER_BAND = document.querySelectorAll(class_name);
                for(const E of BOLLINGER_BAND) E.remove();
            } // function : $remove_chart

    }
}