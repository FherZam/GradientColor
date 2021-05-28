const app = Vue.createApp({
    data() {
        return {
            title: 'Garient Generator',
            fcolor: '#FFFFFF',
            scolor: '#AAAAAA',
            orientation: 'right'
        }
    },
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation},${this.fcolor},${this.scolor});`
        }
    }
})