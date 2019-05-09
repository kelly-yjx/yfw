$(function(){
	$('#txtUserName').focus(function(){
		$("#txtUserName").parent().next('.oninfo').css('display','inline');
		$('.oninfo').attr('class','oninfo focus');
	});
	$('#txtUserName').blur(function(){
		if($('#txtUserName').val().length < 2){
			$('.oninfo').attr('class','oninfo err');
		}else{
			$('.oninfo').attr('class',' oninfo ok').html('<i></i>');
		}
	});
});
