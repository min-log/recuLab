
/**
 * 회원가입 
 * 이메일 직접입력
 */
function emailAddressChange() {
	
	const emailAddressSelect = document.querySelector(".email_address");
	const emailAddressInput = document.querySelector(".form_email_input");

	let option = emailAddressSelect.options[emailAddressSelect.selectedIndex];

	if (option.value == "i") {
		emailAddressInput.style.display = "block";
	} else {
		emailAddressInput.style.display = "none";
	}

}

function joinNextPage(nextPage){
	
	// 모든 li 요소를 선택
	const steps = document.querySelectorAll('.join_stap li');

	// 현재 active 클래스가 있는 li 요소를 찾음
	let currentIndex = -1;
	steps.forEach((step, index) => {
		if (step.classList.contains('active')) {
			currentIndex = index;
		}
	});

	// 다음 li 요소에 active 클래스를 추가
	if (currentIndex < steps.length - 1) {
		steps[currentIndex + 1].classList.add('active');
		setTimeout(function () {
			window.location.href = nextPage; // 페이지 이동
		}, 1200); // 1.2초 후 페이지 이동
	}

}






