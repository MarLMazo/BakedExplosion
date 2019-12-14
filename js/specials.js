jQuery(document).ready(function(){
    //when page is loaded sections for specials are hidden s
    $('.info').hide();
    $('h2').click(function(){
		$(this).next('.info').slideToggle(1000);
			
    });
    
    //images changing with specials
    //when you click on monday image stays same but the information toggles 
    $("#mon-h2").click(
        function()
          {
            $("#specialimg").attr("src","images/blackforest.jpg");
          });
//tuesday
    $("#tues-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialcups.jpg");
        });
//wednesday  
    $("#wed-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialssavoury.jpg");
        });
//thursday
    $("#thurs-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialdonuts.jpg");
        });
//friday
    $("#fri-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/specialsfriday.jpg");
        });
//saturday
    $("#sat-h2").click(
        function()
        {
            $("#specialimg").attr("src","images/bacon.jpg");
        });

//sunday
    $("#sun-h2").click(
        function()
          {
            $("#specialimg").attr("src","images/creamymacarons.jpg");
          });
});