jQuery(document).ready(function() {
          $.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

          
          jQuery("h3.click").click(function() {
            jQuery(this).toggleClass("selected");
            jQuery(this).next().slideToggle();
            return false;
          });
          jQuery("a.hideAll").click(function() {
            jQuery('.selected').next().slideToggle();
            jQuery('.selected').removeClass("selected");
          });
          jQuery('a.backToTop').click(function() {
            jQuery('html, body').animate({
              scrollTop: '0px'
            }, 300);
            return false;
          });
          jQuery('a').click(function() {
            var path = jQuery(this).attr("class");
            jQuery('html,body').animate({
              scrollTop: jQuery("body").top
            }, 'fast');
          });

          $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
              $('.menuWrap').addClass("sticky");
              $('.headerMast').addClass("headerMastAnim");
            } else {
              $('.menuWrap').removeClass("sticky");
              $('.headerMast').removeClass("headerMastAnim");

            }
          });
          
          
$('.box').click(function(){
    alert($('.orange').isOnScreen());
});

          
          
        });