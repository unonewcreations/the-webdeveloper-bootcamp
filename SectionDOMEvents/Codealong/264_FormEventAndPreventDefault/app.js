const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   !option 1 get input value
  //   const userNameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  //   console.log(userNameInput.value, tweetInput.value);
  //   !end
  //   !option2 get input value
  //   console.log(tweetForm.elements.username.value);
  //   console.log(tweetForm.elements.tweet.value);
  //   !end
  //   !create li item
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetContainer.append(newTweet);
};
//   !end
// console.log("Submit!!");
