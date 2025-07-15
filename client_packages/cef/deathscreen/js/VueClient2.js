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
        MedicButton2() {
            mp.trigger("MedicButton2::click");
        },
        LoseButton2() {
            mp.trigger("LoseButton2::click");
        },
    }
});