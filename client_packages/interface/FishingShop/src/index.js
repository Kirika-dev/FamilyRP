var app = new Vue({
    el: "#app",
    data: {
        Opened: !true,
        categories: ["fishingCategoryRod", "fishingCategoryBait"],
        selectedCategoryId: "fishingCategoryRod",
        selectedProductIndex: -1,
        products: {
            "fishingCategoryBait": [
                { ItemId: 603, Name: "Наживка", Price: 1000, Value: 1 }
            ],
            "fishingCategoryRod": [
                { ItemId: 600, Name: "Удочка", Price: 200, Value: 1 },
                { ItemId: 601, Name: "Удочка Улучш.", Price: 200, Value: 1 },
                { ItemId: 602, Name: "Удочка MK2", Price: 200, Value: 1 },
            ]
        }
    },
    methods: {
        Open(items) {
            this.categories = Object.keys(items);
            this.products = items;

            this.selectedCategoryId = this.categories[0];
            this.selectedProductIndex = -1;

            this.Opened = true;
            this.$forceUpdate();
        },

        TryClose() {
            this.CallClient("client.fishing.store.close");
        },

        Reset() {
            this.Opened = false;
        },

        KeyUp(event) {
            if (!this.Opened) return;
            switch(event.keyCode) {
                case 27:
                    this.TryClose();
                    return;
            }
        },

        CallClient(eventName, ...args) {
            try {
                mp.trigger(eventName, ...args);
            }
            catch { console.log(`eventName: ${eventName} | ${args}`) }
        },
        selectCategory(cateogry) {
            this.selectedCategoryId = cateogry;
        },
        OnAction(index, value) {
            this.CallClient("client.fishing.store.action", this.selectedCategoryId, index, value);
        },
    }
});

document.addEventListener('keyup', app.KeyUp);