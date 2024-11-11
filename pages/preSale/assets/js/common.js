const body = document.querySelector('html')
const menu = document.getElementById('headerNav');

function menuShow(){

	menu.style.display = 'flex';
	body.style.overflow = 'hidden';

}


function menuHide() {

	menu.style.display = 'none';
	body.style.overflow = 'auto';

}

function toggleShow(event){

	const allList = document.querySelectorAll(".toggle_box li");
	const parentElement = event.currentTarget.parentElement;

	allList.forEach(item => {
		if (item !== parentElement) {
			item.classList.remove('active');
		}
	});

	if (parentElement.classList.contains('active')) {

		parentElement.classList.remove('active');

	} else {

		parentElement.classList.add('active');

	}

}

//슬라이드 탭 ---------------------------------------------------------------------
const tabSlide1 = new Swiper('.tab_slide1', {
	slidesPerView: 'auto',
	loop: false,
	spaceBetween: 0,
});

const tabSlide2 = new Swiper('.tab_slide2', {
	slidesPerView: 'auto',
	loop: false,
	spaceBetween: 0,
});

function addTabClickListener(tabSlideBtns, tabSlideClass, muCenterFunction) {
	tabSlideBtns.forEach(item => {
		item.addEventListener('click', function (event) {
			const target = event.currentTarget.parentElement;
			tabSlideBtns.forEach(btn => {
				if (btn !== target) {
					btn.parentElement.classList.remove("active");
				}
			});

			target.classList.add("active");
			muCenterFunction(target, tabSlideClass);
		})
	});
}

function muCenter(target, tabSlideClass) {
	const container = document.querySelector("." + tabSlideClass);
	const containerWidth = container.offsetWidth;
	const targetWidth = target.offsetWidth;
	const targetLeft = target.offsetLeft;
	const targetCenter = targetLeft + targetWidth / 2;
	const containerCenter = containerWidth / 2;

	const scrollPos = targetCenter - containerCenter;

	container.scrollTo({
		left: scrollPos,
		behavior: 'smooth'
	});
}

const tabSlideBtns1 = document.querySelectorAll(".tab_type1 .swiper-slide a");
const tabSlideBtns2 = document.querySelectorAll(".tab_type2 .swiper-slide a");

addTabClickListener(tabSlideBtns1, "tab_slide1", muCenter);
addTabClickListener(tabSlideBtns2, "tab_slide2", muCenter);



// 모달 ----------------------------------------------------------------------
const modalBg = document.querySelector('.modal_bg');
const modal = document.querySelector('.modal');
const modalDrag = document.querySelector('.modal .bar');
const modalContent = document.querySelector('.modal .modal_content');

let isDragging = false, startY, startHeight;

const updateModalHeight = (height) => {
	modalContent.style.height = `${height}px`; // 단위를 px로 변경
}

const dragStart = (e) => {
	isDragging = true;
	startY = e.clientY || e.touches[0].clientY; // 터치 이벤트인 경우 e.touches[0].clientY 사용
	startHeight = modalContent.clientHeight; // 현재 높이를 가져옴

	
}

const dragging = (e) => {
	if (!isDragging) return;
	const deltaY = startY - (e.clientY || e.touches[0].clientY); // 터치 이벤트인 경우 e.touches[0].clientY 사용
	const newHeight = startHeight + deltaY; // 드래그 이동한 만큼을 현재 높이에 더함
	updateModalHeight(newHeight);
	if (newHeight < 20) {
		modalClose();
	}
}

const dragStop = () => {
	if (!isDragging) return;
	isDragging = false;
}


function addModalDragEvent() {

	if (modalDrag) {
		// 드레그 이벤트 
		modalDrag.addEventListener("mousedown", dragStart);
		document.addEventListener("mousemove", dragging);
		document.addEventListener("mouseup", dragStop);
		// 터치 이벤트
		modalDrag.addEventListener("touchstart", dragStart);
		document.addEventListener("touchmove", dragging);
		document.addEventListener("touchend", dragStop);
	}
}
function removeModalDragEvent() {
	if (modalDrag) {
		// 드레그 이벤트 
		modalDrag.removeEventListener("mousedown", dragStart);
		document.removeEventListener("mousemove", dragging);
		document.removeEventListener("mouseup", dragStop);
		// 터치 이벤트 제거
		modalDrag.removeEventListener("touchstart", dragStart);
		document.removeEventListener("touchmove", dragging);
		document.removeEventListener("touchend", dragStop);
	}
}


// 모달 닫기
function modalClose() {
	modal.classList.remove('active');
	modalBg.classList.remove('active');
	modalContent.style.height = 'auto';
}



// 모달이 열릴 때마다 이벤트를 추가
modal.addEventListener('transitionend', function () {
	if (modal.classList.contains('active')) {
		addModalDragEvent();
		body.style.overflow = 'hidden';
	} else {
		removeModalDragEvent();
		body.style.overflow = 'auto';
	}
});

// 모달 닫힐 때마다 이벤트 제거
modal.addEventListener('transitionend', function () {
	
	if (!modal.classList.contains('active')) {
		removeModalDragEvent();
	}
});


// 메인모달
const modalMain = document.getElementById('modalBottom');
const modalDiv = document.querySelectorAll('.modal_content > div');
const modalScheduleDiv = document.querySelector('.program_schedule');
const modalProgrameDiv = document.querySelector('.program_list');
const modalProgrameViewDiv = document.querySelector('.program_view');
const modalMap = document.querySelector('.sec_map');

// 스크롤이 있는 div 요소를 선택
const modalScrollableDiv = document.querySelector('#modalBottom .inner');


// 메인 모달 show 
function modalMainShow(){ 
	
	modalContent.style.height = '50vh';
	modalMap.classList.add('active');
	modalBg.classList.add('active');
	modalMain.classList.add('active');
	modalScheduleDiv.style.display = 'none';
	modalProgrameDiv.style.display = 'block';
	modalProgrameViewDiv.style.display = 'none';

}


function modalSchedule(){
	
	modalDiv.forEach(item=>{
		item.style.display ='none';
	});
	
	modalScrollableDiv.scrollTop = 0;
	modalScheduleDiv.style.display = 'block';

}

function modalProgrameList() {
	
	modalDiv.forEach(item => {
		item.style.display = 'none';
	});
	modalScrollableDiv.scrollTop = 0;
	modalProgrameDiv.style.display = 'block';
}

function modalProgrames() {

	modalDiv.forEach(item => {
		item.style.display = 'none';
	});
	modalScrollableDiv.scrollTop = 0;
	modalProgrameDiv.style.display = 'block';
}

function modalProgrameView() {
	modalDiv.forEach(item => {
		item.style.display = 'none';
	});
	modalScrollableDiv.scrollTop = 0;
	modalProgrameViewDiv.style.display = 'block';
}



// 모달 닫힐 때마다 이벤트 제거
modalMain.addEventListener('transitionend', function () {

	if (!modalMain.classList.contains('active')) {
		console.log("메인모달 닫힘");
		modalMap.classList.remove('active');
	}
});


//TOP 버튼
function viewTop(){
	window.scrollTo({
		top:0,
		left:0,
		behavior :'smooth'
	});
}
