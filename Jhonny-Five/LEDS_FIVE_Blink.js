const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led1 = new Led(12);
  const led2 = new Led(13);

  board.loop(500, () => {
    led1.toggle();
    led2.toggle();
  });
});
