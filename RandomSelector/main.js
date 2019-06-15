window.onload=function()
{
    //document.write("Hello JaveScript!");
	$('img[name="img1"]').hide(); 
			$('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
};

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem = $("#choice li").length;
        var randomChindNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("#choice li").eq(randomChindNumber).text());
        if(randomChindNumber === 0)
        {
            $('img[name="img1"]').show(); 
			$('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
        }
        else if(randomChindNumber === 1)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').show();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();			
        }
        else if(randomChindNumber === 2)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').show();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
        }
		else if(randomChindNumber === 3)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').show();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
        }
		else if(randomChindNumber === 4)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').show();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
        }
		else if(randomChindNumber === 5)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').show();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').hide();
        }
		else if(randomChindNumber === 6)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').show();
			$('img[name="img8"]').hide();
        }
		else if(randomChindNumber === 7)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
			$('img[name="img4"]').hide();
			$('img[name="img5"]').hide();
			$('img[name="img6"]').hide();
			$('img[name="img7"]').hide();
			$('img[name="img8"]').show();
        }
		
    })
});