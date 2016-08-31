<script type="text/javascript">
$(document).ready(function(){
	$(".socialIcons").click(function(){
		var category="social"
		var action="click"
		var label=$(this).attr("id");
		ga('send','event',category,action,label);
	});
});
</script>