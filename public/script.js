// import openai from 'openai';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  // organization: "org-Dx5AwmroyN0U4fOu6Pu8T4yb",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response.data);
// const openaiInstance = new openai.OpenAIApi(
//   new openai.Configuration({
//     apiKey: "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",
//   })
// );

let prompt;

let promptTextarea = document.getElementById("promptTextarea");
let responseTextarea = document.getElementById("responseTextarea");
let loadingAnimation = document.querySelector(".loading-animation");

async function processResponse() {
  prompt = promptTextarea.value;
  console.log(prompt);

  if (prompt === "") {
    return;
  }
  promptTextarea.value = "";
  // Show loading animation
  loadingAnimation.style.display = "block";
  responseTextarea.style.display = "none";

  const createChatCompletion = async (prompt) => {
    console.log("response sent with " + prompt);
    const completion = await openai.createCompletion({
      engine: "text-davinci-003",
      prompt: prompt,
      maxTokens: 100,
      n: 1,
      stop: ["\n"],
    });

    return completion.choices[0].text;
  };

  const responseContent = await createChatCompletion(prompt);

  // Hide loading animation and show response
  loadingAnimation.style.display = "none";
  responseTextarea.style.display = "block";
  responseTextarea.value = responseContent;
}
try {
  promptTextarea.addEventListener("keydown", keyPress, false);
} catch (e) {
  promptTextarea.attachEvent("onkeydown", keyPress);
}

function keyPress(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    console.log("Enter key was pressed");
    processResponse();
  } else {
    return;
  }
}
promptTextarea.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    processResponse();
  }
});
promptTextarea.value = "";