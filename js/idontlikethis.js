<script type="text/javascript">
ga('create', 'UA-34674807-1', 'auto');
$(document).ready(function(){
	$(".socialIcons").click(function(){
		var category="social"
		var action="click"
		var label=$(this).attr("id");
		ga('send','event',category,action,label);
	});
});
</script>