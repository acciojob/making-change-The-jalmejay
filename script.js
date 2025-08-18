const makeChange = (c) => {
	let obj={
		0:["q",0.25],
		1:["d",0.10],
		2:["n",0.05],
		3:["p",0.01],
	}
  // your name here
	
	class makeUSDChange{
		constructor(num){
			this.money=num;
			this.object=obj;
		}

		change(){
			let mon=this.money;
			let count={
		"q":0;
		"d":0;
		"n":0;
		"p":0;
	                    }

			for(let i=0;i<this.object.length;i++){
				let [symbol,value]=this.object[i];
				while(num>value){
					if(count.has(symbol)){
						count.symbol++;
					}
					num=num-value;
				}
			}

			return count;
		}
	}
	const changes=new makeUSDChange(c)
	changes.change();
};
console.log(makeChange(47))
Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
