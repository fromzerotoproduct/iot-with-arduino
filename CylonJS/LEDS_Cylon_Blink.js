const Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/ttyACM0" }
  },

  devices: {
    led1: { driver: "led", pin: 12 },
    led2: { driver: "led", pin: 13 }
  },

  work: function(my) {
    every((0.5).second(), function() {
      my.led1.toggle();
      my.led2.toggle();
    });
  }
}).start();
