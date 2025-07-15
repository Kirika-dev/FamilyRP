var app = new Vue({
    el: "#app",
    data: {
	Opened: false,

        	killerName: "",
		killerStatic: null,
		weapon: "",
		distance: null,
    },
    computed: {
    formattedkillerName() {
      return this.killerName.replace(/_/g, ' ');
    },
    formattedDistance() {
            return Math.floor(this.distance);
    },
  },
    methods: {
        Open() {
            this.Opened = true;
        },
        Close() {
            this.Opened = false;
        },
        MedicButton() {
            mp.trigger("MedicButton::click");
        },
        LoseButton() {
            mp.trigger("LoseButton::click");
        },
    }
});