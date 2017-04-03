(function(){

	var form = document.querySelector("form")

	var name = document.querySelector(".your-name")
	var email = document.querySelector(".email")
	var address = document.querySelector(".address")
	var address2 = document.querySelector(".address2")
	var zipcode = document.querySelector(".zipcode")
	var select = document.querySelector(".select")
console.log(select.value)

	form.addEventListener("submit", function(e){
		if(validate_form () == false){
			event.preventDefault()
		}
	});


	function validate_form ( ){
		valid = true;
		if ((name.value === "") || (name.value.length < 3 || name.value.length > 30) || (!/^[A-Za-z\-\s]*$/g.test(name.value))){
            valid = false;
	    }

	    if ((email.value === "") || (!/^[A-Za-z0-9._]+@[a-z]+\.[a-z]{2,3}/g.test(email.value))){
            valid = false;
	    }

	     if ((address.value === "") || (!/^[A-z0-9\s,/]+/g.test(address.value))){
            valid = false;
	    }

	     
	     if ((zipcode.value === "") || (!/^[0-9]{5}$/g.test(zipcode.value))){
            valid = false;
	    }
	    if (select.value === ""){
            valid = false;
	    }

        return valid;
	}


})();

