$(document).ready(function(){

function createTweetElement(obj){
  console.log('called');
  const userName = obj.user.name;
  const postContent = obj.content.text;
  // const creationTime = obj.created_at;
  const creationTime = obj.created_at;
  const postAvatar = obj.user.avatars['small'];
  const handle = obj.user.handle;

$('#tweets-container').append(`
  <article class="tweet">
    <header>
      <img class="thumb" src= ${postAvatar} >
      <h1> ${userName} </h1>
      <p> ${handle} </p>
    </header>


    <div class="content"> ${postContent} </div>
    <footer>${creationTime}</footer>

  </article>`
  )

}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

//_______________formattedTime_________

// var formatTime = function(unixTimestamp) {
//     var dt = new Date(unixTimestamp * 1000);

//     var hours = dt.getHours();
//     var minutes = dt.getMinutes();
//     var seconds = dt.getSeconds();

//     // the above dt.get...() functions return a single digit
//     // so I prepend the zero here when needed
//     if (hours < 10)
//      hours = '0' + hours;

//     if (minutes < 10)
//      minutes = '0' + minutes;

//     if (seconds < 10)
//      seconds = '0' + seconds;

//     return hours + ":" + minutes + ":" + seconds;
// }

// var formattedTime = formatTime(obj.created_at);


////_____________

function renderTweets(tweets) {

}

createTweetElement(tweetData);
});
