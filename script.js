function stringChop(str, size) {
	if(str == ""){
		let array = [];
		return array;
	}
  let arr = [];
let i=0;
while(i<str.length){
    let string = ""
for(var j=i; j<size+i; j++){
    string += str.charAt(j);
    
}
arr.push(string);
i+=size;
}
return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size)); 
