var app = new Vue({
    el: "#app",
    data: {
       Opened: false,
    },
    methods: {
        Open() {
            this.Opened = true;
        },
        Close() {
            this.Opened = false;
        },
    }
});