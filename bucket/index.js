
  const widthBucket = $(".bucket-img").width();
	let docWidth = document.documentElement.clientWidth;
	//$(".bucket-img").css('left', docWidth / 2 - widthBucket / 2);

$('.bucket').click(()=>{
	$('body').css('cursor','none');
	$('.bucket-img').css('cursor','none');
	$(document).mousemove((e)=>{
	e.preventDefault();

	$(window).resize(()=>{
		docWidth = document.documentElement.clientWidth;
		console.log('resize');
	})

	if ((e.clientX <= docWidth - widthBucket / 2) && 
	   (e.clientX >= widthBucket / 2) ){
		$(".bucket").css('left',`${e.clientX - (widthBucket / 2)}px`);
	}

})	
})
