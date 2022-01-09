//disables delete button until row is selected
$(document).ready(function() {

	$('button[name="delete"]').prop('disabled',true);
	
  
	(function() {

		$("body").click(function() {
			if ($(".selected").length > 0) {
				$('button[name="delete"]').removeAttr("disabled")
			}
		});
	 	
	  
	})();
  });

  //disable submit button until everything is filled
$(document).ready(function() {

	$('button[name="submit_button"]').prop('disabled',true);
	
  
	(function() {
	  $(".form-required").change(function() {
		var empty = false;
		$(".form-required").each(function() {
		  if ($(this).val() === "") {
			empty = true;
		  }
		});
  
		if (empty) {
		  $('button[name="submit_button"]').attr("disabled", "disabled");
		} else {
		  $('button[name="submit_button"]').removeAttr("disabled");
		}
	  });
	})();
  });

  //taken from https://github.com/mikhail-cct/ssp-practical/
function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='2']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();

});

//changes background color based on movie score 
//loads when page is ready, used timeout because table also has 

$(document).ready(function() {
	setTimeout(function() { $('.value').each(function(){
		var cellValue = $(this).html();
		if(!isNaN(parseFloat(cellValue))) {
		  if (cellValue < 5) {
			$(this).css('background-color','red');
		  }
		  else if(cellValue <= 8 && cellValue > 5)
		  {
			$(this).css('background-color','#90EE90');
		  }

	    else{
		   $(this).css('background-color','green');
		   }
		}
	});
	  
	}, 500); // for half second delay 
  });
  
  	

  $(document).ready(function() { $('button[name="delete"]').on('click',function() {
	setTimeout(function() { $('.value').each(function(){
		var cellValue = $(this).html();
		if(!isNaN(parseFloat(cellValue))) {
		  if (cellValue < 5) {
			$(this).css('background-color','red');
		  }
		  else if(cellValue <= 8 && cellValue > 5)
		  {
			$(this).css('background-color','#90EE90');
		  }
	    else{
		   $(this).css('background-color','green');
		   }
		}
	});
	  
	}, 1500); // for half second delay 
  });
});

	
  
		
	
	  
	
  



   