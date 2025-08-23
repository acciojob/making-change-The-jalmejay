const makeChange = (c) => {
if (Number(c) < 1 || Number(c) >= 100) return "Please enter a valid number between 1 and 99.";
	
  let obj = [
    ["q", 25],
    ["d", 10],
    ["n", 5],
    ["p", 1]
  ];
  class CoinTypes {
	  
    constructor(num) {
      this.money = num;
      this.coins = obj;
    }

    change() {
      let mon = this.money;
      let count = {"q": 0, "d": 0, "n": 0, "p": 0};

      let remaining = num;
  for (const [sym, val] of coins) {
    const qty = Math.floor(remaining / val);
    if (qty > 0) {
      count[sym] = qty;
      remaining %= val;
    }
  }
      }
      return count;
    }
  }

  const changes = new CoinTypes(Number(c));
  return changes.change();
};
// console.log(makeChange(47))
// console.log(makeChange(24))
Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
