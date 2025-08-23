const makeChange = (c) => {
if (Number(c) < 1 || Number(c) >= 100) return "Please enter a valid number between 1 and 99.";
	
  
  class CoinTypes {
	  let obj = [
    ["q", 25],
    ["d", 10],
    ["n", 5],
    ["p", 1]
  ];
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

  const changes = new coinTypes(Number(c));
  return changes.change();
};
// console.log(makeChange(47))
// console.log(makeChange(24))
Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
