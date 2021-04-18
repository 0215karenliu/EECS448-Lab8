document.addEventListener('DOMContentLoaded', () => {
	ex1();
});

function ex1(){
	let validate_btn = document.getElementById('validate_btn');
	validate_btn.addEventListener('click', () => {
		console.log('validate_btn clicked');
		let user_input = document.getElementById('user_input');
		let validate_input = document.getElementById('validate_input');
		let input_str = user_input.value;
		let validate_str = validate_input.value;
		if(input_str.length < 8 || validate_str < 8){
			alert("The password is too short");
			return;
		}else if(input_str != validate_str){
			alert("The passwords do not match");
		}else{
			alert("Validated! It matches");
		}
	});
}
