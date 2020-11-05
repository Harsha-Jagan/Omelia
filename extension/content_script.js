// var recognition = new SpeechRecognition()
let recognition = new webkitSpeechRecognition()
recognition.continous = true;
let recognizing = false;


// All about the button that was added
let sheets_toolbar = document.querySelector(".docs-titlebar-buttons")
let audio_button = document.createElement("span");
let text_display = document.createElement("span");

audio_button.displayname = "null";
// audio_button.vsjson = "{&quot;role&quot;:0,&quot;summary&quot;:&quot;Shared with 2 people&quot;,&quot;details&quot;:&quot;&quot;,&quot;visibilityState&quot;:&quot;private&quot;,&quot;restrictedToDomain&quot;:true,&quot;restrictedToSingleUserScope&quot;:false,&quot;hasInvalidEntries&quot;:false,&quot;hasNamedPartiesForPublish&quot;:false,&quot;publishVisibilityState&quot;:&quot;named_parties&quot;}";
// audio_button.id="docs-titlebar-share-client-button"
// audio_button.class="scb-container";
audio_button.style = "padding: 10px; padding-left: 20px; padding-right: 20px; border-radius: 4px; margin-right: 5px; margin-left: 3px; background-color: red;";

text_display.style = "font-size: 14px; padding-right: 10px;";
let text_display_original = "<text style='color: gray; font-weight: bold;'>Say something! Your command will show up here.</text>";

text_display.innerHTML = text_display_original;

let record_style = audio_button.innerHTML = "<div role='button' aria-disabled='false' style='user-select: none; color: white; font-weight: bold;' tabindex='0'>Record</div>";
let stop_style = audio_button.innerHTML = "<div role='button' aria-disabled='false' style='user-select: none; none; color: white; font-weight: bold;' tabindex='0'>Stop</div>";
let command = "";

audio_button.onclick = function() {
   if (recognizing) {
     recognition.stop();
     recognizing = false
     command = "";
     audio_button.innerHTML = record_style;
   } else {
     recognition.start();
     recognizing = true;
     audio_button.innerHTML = stop_style;
    //  text_display.innerHTML = "<text style='color: gray; font-weight: bold;'>Recording...</text>"
   }
}

function reset() {
   recognizing = false;
   audio_button.innerHTML = record_style;
 }

recognition.onresult = async function (event) {
   command = ""
   for (let i = event.resultIndex; i < event.results.length; ++i) {
     if (event.results[i].isFinal) {
       console.log("result: " + event.results[i][0].transcript);
       command += event.results[i][0].transcript
       console.log(location.href)
      //  const response = await fetch("https://us-central1-excelify-293504.cloudfunctions.net/text-processing-1", {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'no-cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify({text: command, url: "https://us-central1-excelify-293504.cloudfunctions.net/text-processing-1"}) // body data type must match "Content-Type" header
      // });
      // console.log(response)
      //  fetch("https://us-central1-excelify-293504.cloudfunctions.net/text-processing-1").then((response) => response.json()).then((data) => console.log(data))
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/", true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.send(JSON.stringify({
          url: location.href,
          text: command
      }));
     }
   }
   let text_to_show = command.length > 45 ? command.substring(0, 45) + "..." : command;
   text_display.innerHTML = command.length == 0 ? text_display_original : "<text style='font-weight: bold;'>\"" + text_to_show + "\"</text>";
}

recognition.onend = reset()

audio_button.innerHTML = record_style;
sheets_toolbar.prepend(audio_button)
sheets_toolbar.prepend(text_display)
