export function CM_CALL() {
    "use strict";
    /**
     * Function to check if we clicked inside an element with a particular class
     * name.
     * 
     * @param {Object} e The event
     * @param {String} className The class name to check against
     * @return {Boolean}
     */
    function clickInsideElement( e, className ) {
      var el = e.srcElement || e.target;
      
      if ( el.classList.contains(className) ) {
        return el;
      } else {
        // eslint-disable-next-line no-cond-assign
        while ( el = el.parentNode ) {
          if ( el.classList && el.classList.contains(className) ) {
            return el;
          }
        }
      }
  
      return false;
    }

    /**
     * Get's exact position of event.
     * 
     * @param {Object} e The event passed in
     * @return {Object} Returns the x and y position
     */
    function getPosition(e) {
      var posx = 0;
      var posy = 0;
  
      // eslint-disable-next-line no-redeclare
      if (!e) var e = window.event;
      
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
  
      return {
        x: posx,
        y: posy
      }
    }
    var contextMenuLinkClassName = "context-menu__link";
    var contextMenuActive = "context-menu--active";

    var taskItemClassName = "icon";
    var taskItemInContext;
    var clickCoords;
    var clickCoordsX;
    var clickCoordsY;
    var menu = document.querySelector("#context-menu");
    var menuState = 0;
    var menuWidth;
    var menuHeight;
    var windowWidth;
    var windowHeight;

    function init() {
      contextListener();
      clickListener();
      keyupListener();
      resizeListener();
    }
  
    function contextListener() {
      document.addEventListener( "contextmenu", function(e) {
        taskItemInContext = clickInsideElement( e, taskItemClassName );
  
        if ( taskItemInContext ) {
          e.preventDefault();
          toggleMenuOn();
          positionMenu(e);

        } else {
          taskItemInContext = null;
          toggleMenuOff();
        }
      });
    }

    function clickListener() {
      document.addEventListener( "click", function(e) {
        var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );
  
        if ( clickeElIsLink ) {
          e.preventDefault();
          menuItemListener( clickeElIsLink );
        } else {
          var button = e.which || e.button;
          if ( button === 1 ) {
            toggleMenuOff();
          }
        }
      });
    }

    function keyupListener() {
      window.onkeyup = function(e) {
        if ( e.keyCode === 27 ) {
          toggleMenuOff();
        }

      }
    }
  

    function resizeListener() {
      // eslint-disable-next-line no-unused-vars
      window.onresize = function(e) {
        toggleMenuOff();
      };
    }
  

    function toggleMenuOn() {
      if ( menuState !== 1 ) {
        menuState = 1;
        menu.classList.add( contextMenuActive );
      }
    }
  

    function toggleMenuOff() {
      if ( menuState !== 0 ) {
        menuState = 0;
        menu.classList.remove( contextMenuActive );
      }
    }
  
    /**
     * Positions the menu properly.
     * 
     * @param {Object} e The event
     */
    function positionMenu(e) {
      clickCoords = getPosition(e);
      clickCoordsX = clickCoords.x;
      clickCoordsY = clickCoords.y;
      menuWidth = menu.offsetWidth + 4;
      menuHeight = menu.offsetHeight + 4;
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
  
      if ( (windowWidth - clickCoordsX) < menuWidth ) {
        menu.style.left = windowWidth - menuWidth + "px";
      } else {
        menu.style.left = clickCoordsX + "px";
      }
  
      if ( (windowHeight - clickCoordsY) < menuHeight ) {
        menu.style.top = windowHeight - menuHeight + "px";
      } else {
        menu.style.top = clickCoordsY + "px";
      }
    }
  
    /**
     * Dummy action function that logs an action when a menu item link is clicked
     * 
     * @param {HTMLElement} link The link that was clicked
     */
    function menuItemListener( link ) {
      console.log( "Task ID - " + taskItemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
      toggleMenuOff();
    }
    init();
  }