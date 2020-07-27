   function addIframe(id,url,overflow,width,height,scrolling) {
      var element = document.getElementById(id);
      var makeIframe = document.createElement("iframe");
      makeIframe.setAttribute("src", url);
      makeIframe.setAttribute("overflow",overflow);
      makeIframe.setAttribute( "width",width)
      makeIframe.setAttribute( "height",height)
      makeIframe.setAttribute("scrolling",scrolling)
      makeIframe.setAttribute("frameBorder","0")
      element.appendChild(makeIframe);
    }
	
    window.onload = function () { 
      addIframe("SGLogin","https://slappdev.appspot.com/signin","auto","100%","100%","no");
    }
	
	window.onmessage = (event) => {
		if (event.data) { 
    		console.log("got message");			         
			if(event.data.startsWith('ERROR:')){
				alert(event.data);
			} else {
                console.log("in successful login"+event.data +window.localStorage.getItem('sazenId') );
				window.parent.postMessage(event.data,"*");
				window.history.go(-1);
					}
			}		
		};
