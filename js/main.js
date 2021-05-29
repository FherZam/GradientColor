const app = Vue.createApp({
    data() {
        return {
            title: 'Gradient Generator',
            fcolor: '#d5ee11',
            scolor: '#f59e24',
            orientation: 'right'
        }
    },
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation},${this.fcolor},${this.scolor});`
        }
    }
})