jQuery(document).ready(function(){
    $('.info').hide();
    $('h2').click(function(){
		$(this).next('.info').slideToggle(1000);
			
    });
    
    //images changing with specials
    $("#mon-h2").click(
        function()
          {
            $("#specialimg").attr("src","images/blackforest.jpg");
          });

    $("#tues-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialcups.jpg");
        });
    
    $("#wed-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialssavoury.jpg");
        });

    $("#thurs-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialdonuts.jpg");
        });

    $("#fri-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialsfriday.jpg");
        });

    $("#sat-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/bacon.jpg");
        });


    $("#sun-h2").click(
        function()
          {
            $("#specialimg").attr("src","images/creamymacarons.jpg");
          });
});