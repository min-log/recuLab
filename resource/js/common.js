const body = document.querySelector("body");
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

function selectOpen(button) {
	// 클릭된 버튼의 부모 요소 중 가장 가까운 .select-type-1 요소를 찾기
	var selectType1 = button.closest('.select-type-1');

	// .select-type-1 요소 내의 모든 .select-con 요소 숨기기
	selectType1.querySelectorAll('.select-con').forEach(function (con) {
		if (con !== button.nextElementSibling) {
			con.classList.remove('show');
		}
	});

	// 클릭된 버튼의 다음 형제 요소인 .select-con 요소 보이기 또는 숨기기
	var selectCon = button.nextElementSibling;
	if (selectCon && selectCon.classList.contains('select-con')) {
		selectCon.classList.toggle('show');
	}
}

// 외부 클릭 시 닫힘
document.addEventListener('click', function (event) {
	// 모든 .select-type-1 요소에 대해 처리
	document.querySelectorAll('.select-type-1').forEach(function (selectType1) {
		var isClickInside = selectType1.contains(event.target);
		if (!isClickInside) {
			selectType1.querySelectorAll('.select-con').forEach(function (con) {
				con.classList.remove('show');
			});
		}
	});
});


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


// 팝업 닫기
function popupClose(){
	const bg = document.querySelector(".bg_wrap");
	const popup = document.querySelector(".popup_wrap");
	body.style.overflow = "auto";
	bg.style.display = "none";
	popup.style.display = "none";

}

const menuPopup = document.getElementById("menuPopup");
function menuPopupShow(event) {
	const target = event; // 클릭된 요소를 참조합니다.

	if (target) { // target이 존재하는지 확인합니다.
		target.classList.toggle("active"); // active 클래스를 토글합니다.

		// menuPopup 표시 상태를 토글합니다.
		if (menuPopup.style.display === "block") {
			menuPopup.style.display = "none";
		} else {
			menuPopup.style.display = "block";
		}
	} else {
		console.error("이벤트 대상이 정의되지 않았습니다.");
	}
}


