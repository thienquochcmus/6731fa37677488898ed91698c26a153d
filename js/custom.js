var Skype=new function(){var t=[],e=!1,n="https://swc.cdn.skype.com/contactme/v/1.0.0/skype-uri.min.js";this.ui=function(a){for(var c=document.getElementsByTagName("script"),i=c.length,r=!1;i--;)if(c[i].src===n){r=!0;break}if(!r){var s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.setAttribute("type","text/javascript"),u.setAttribute("src",n),u.onload=function(){e=!0;for(var n=t.length;n--;)SkypeButton.ui(t[n])},s.appendChild(u)}e?SkypeButton.ui(a):t.push(a)}};
Skype.ui({
    "name": "chat",
    "element": "SkypeButton_Call_vankhoicv",
    "participants": ["vankhoicv"],
    "imageSize": 32
  });
$('.skypeicon').click(function(){
    // $('#SkypeButton_Call_vankhoicv').click();
    SkypeWebControl.SDK.Chat.startChat({ConversationType: 'person', ConversationId: 'vankhoicv'});
})