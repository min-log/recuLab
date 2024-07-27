document.addEventListener('DOMContentLoaded', function () {

	// S : 헤더 푸터 --- 개발 후 제거 필요
	function includeHTML() {
		let elements = document.querySelectorAll('[data-include]');
		elements.forEach(element => {
			let file = element.getAttribute('data-include');
			fetch(file)
				.then(response => response.text())
				.then(data => {
					element.innerHTML = data;
					$('select').selectric();
				});
		});
	}
	window.onload = includeHTML;
	// E : 헤더 푸터 

	
	// 모든 셀렉트 스타일 추가
	$('select').selectric();
	
	

});


// 셀렉트
function selectOpen(button) {
	// 모든 .select-con 요소 숨기기
	document.querySelectorAll('.select-con').forEach(function (con) {
		if (con !== button.nextElementSibling) {
			button.classList.remove('active');
			con.classList.remove('show');
		}
	});

	// 클릭된 버튼의 다음 형제 요소인 .select-con 요소 보이기 또는 숨기기
	var selectCon = button.nextElementSibling;
	if (selectCon && selectCon.classList.contains('select-con')) {
		button.classList.toggle('active');
		selectCon.classList.toggle('show');
	}

}

// 로딩 화면 보이기 함수
function loadingShow() {
	const bg = document.querySelector(".bg_wrap");
	const loading = document.querySelector(".loading_wrap");
	bg.style.display = "block";
	loading.style.display = "block";
}

// 로딩 화면 숨기기 함수
function loadingHide() {
	const bg = document.querySelector(".bg_wrap");
	const loading = document.querySelector(".loading_wrap");
	bg.style.display = "none";
	loading.style.display = "none";
}


// 메시지 화면 보이기 
function msgShow(msgText) {
	const bg = document.querySelector(".bg_wrap");
	const msg = document.querySelector(".msg_wrap");
	const msgTextContent = document.querySelector(".msg_txt");
	bg.style.display = "block";
	msg.style.display = "block";
	msgTextContent.textContent = msgText;

}
// 메시지 화면 숨기기
function msgHide() {
	const bg = document.querySelector(".bg_wrap");
	const msg = document.querySelector(".msg_wrap");
	bg.style.display = "none";
	msg.style.display = "none";
}







