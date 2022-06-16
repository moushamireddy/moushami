
function ReverseString(str) {
	const revArray = [];
	const length = str.length - 1;
	
	for(let i = length; i >= 0; i--) {
		revArray.push(str[i]);
	}
	
	return revArray.join('');
}

document.write(ReverseString("Hello"))
