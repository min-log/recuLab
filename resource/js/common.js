$(document).ready(function () {

	// 헤더 푸터 
	function includeHTML() {
		let elements = document.querySelectorAll('[data-include]');
		elements.forEach(element => {
			let file = element.getAttribute('data-include');
			fetch(file)
				.then(response => response.text())
				.then(data => {
					element.innerHTML = data;

					// 모든 셀렉트 스타일 추가
					$('select').selectric();

				});
		});
	}
	window.onload = includeHTML;

});