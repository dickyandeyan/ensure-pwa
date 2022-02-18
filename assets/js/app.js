$(document).ready(function(){       
   var scroll_pos = 0;
   $(document).scroll(function() { 
       scroll_pos = $(this).scrollTop();
       console.log(scroll_pos);
       if(scroll_pos > 210) {
           $('#navbar-fix').addClass('gradient');
       }
   });
});