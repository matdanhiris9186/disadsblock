function adBlockDetected(){var isAdblock=true;if(isAdblock==true){$("div.top-message").html('<span>Xin vui lòng tắt chương trình chặn quảng cáo để chúng tôi có thể phục vụ bạn tốt hơn.</span>').css({"display":"block"});console.log("AdBlock: Enabled");}else{adBlockNotDetected();}}
function checkAdblock(){console.log("Call function FuckAdblock");if(typeof fuckAdBlock==='undefined'){adBlockDetected();}else{fuckAdBlock.setOption({debug:true});fuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);}}