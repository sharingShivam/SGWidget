  console.log("File Imported Sucessfully"); 

  function addIframe(id,url,overflow,width,height,scrolling) {
      var element = document.getElementById(id);
      if (element != undefined ){
	      var makeIframe = document.createElement("iframe");
	      makeIframe.setAttribute("src", url);
	      makeIframe.setAttribute("overflow",overflow);
	      makeIframe.setAttribute( "width",width)
	      makeIframe.setAttribute( "height",height)
	      makeIframe.setAttribute("scrolling",scrolling)
	      makeIframe.setAttribute("frameBorder","0")
	      element.appendChild(makeIframe);
      }
    }
	
    window.onload = function () { 
    serverhost = "https://slappdev.appspot.com/"
    addIframe("SGLogin",serverhost + "signin","auto","100%","100%","no");
    addIframe("SGEvent",serverhost + "campaigns?apiKey=AIzaSyA3IgZ69XoXYURcy6Q6yWpzqMke_jMWUhg","auto","1350","540","yes");
    addIframe("SGVolunteer",serverhost +"campaigns?apiKey=AIzaSyDGmkUoLlk2oc1YWPpeTWlYuhIYX9bd1Lw&campaignType=volunteerCampaign","auto","1350","540","yes");
      let redirectURL = sessionStorage.getItem("redirectURL");
      if (redirectURL!= null){
	addIframe("SGRegistration",serverhost +redirectURL,"auto","1350","540","yes");	
	sessionStorage.removeItem("redirectURL");
	}
    }
	
  window.onmessage = (event) => {
      if (event.data) { 
          if(event.data.action=="redirect"){
            sessionStorage.setItem("redirectURL",event.data.url);
              window.location = "/registration"
          }
          if(event.data.action=="previous"){
                window.history.go(-1);
          }
        }	
      };
