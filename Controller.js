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
      addIframe("SGLogin","https://slappdev.appspot.com/signin","auto","100%","100%","no");
      addIframe("SGEvent","https://slappstg.appspot.com/campaigns?apiKey=AIzaSyDGmkUoLlk2oc1YWPpeTWlYuhIYX9bd1Lw&campaignType=event","auto","1350","540","yes");
      addIframe("SGVolunteer","https://slappstg.appspot.com/campaigns?apiKey=AIzaSyDGmkUoLlk2oc1YWPpeTWlYuhIYX9bd1Lw&campaignType=volunteerCampaign","auto","1350","540","yes");
      let redirectURL = sessionStorage.getItem("redirectURL");
      if (redirectURL!= null){
	addIframe("SGRegistration",localhost +redirectURL,"auto","1350","540","yes");	
	sessionStorage.removeItem("redirectURL");
	}
    }
	
  window.onmessage = (event) => {
      if (event.data) { 
          if(event.data.action=="redirect"){
            sessionStorage.setItem("redirectURL",event.data.url);
              window.location = "index2.html"
          }
          if(event.data.action=="previous"){
                window.history.go(-1);
          }
        }	
      };
