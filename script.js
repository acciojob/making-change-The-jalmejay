const makeChange = (c) => {
	 let obj = [
    ["q", 25],
    ["d", 10],
    ["n", 5],
    ["p", 1]
  ];
  
  class makeUSDChange {
    constructor(num) {
      this.money = num;
      this.object = obj;
    }

    change() {
      let mon = this.money;
      let count = {
        "q": 0,
        "d": 0,
        "n": 0,
        "p": 0
      };

      for (let i = 0; i < this.object.length; i++) {
        let [symbol, value] = this.object[i];
        while (mon >= value) {
          count[symbol]++;
          mon -= value;
        }
      }
      return count;
    }
  }

  const changes = new makeUSDChange(Number(c));
  return changes.change();
};
console.log(makeChange(47))
Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
