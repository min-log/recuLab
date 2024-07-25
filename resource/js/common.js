$(document).ready(function () {

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

