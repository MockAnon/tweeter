$(document).ready(function(){

//__________________load tweets________

function loadTweets() {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (getTweets) {
  console.log(getTweets);
  // return getTweets;
  renderTweets(getTweets);
});

};

  loadTweets();

//___________new post _______________

$(function() {
  var $button = $('#submitTweet');
  $button.on('click', function ( event ) {
    event.preventDefault();
    console.log("button clicked, prevented event.");
    const $serialOut = $(this).serialize();
    console.log($serialOut);
    $.post('/tweets', $serialOut, function(data, status){
      console.log(data, status);
    });
    });
  });



//___________Posting older tweets_________

function createTweetElement(obj){
  console.log('called');
  const userName = obj.user.name;
  const postContent = obj.content.text;
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

//___________RENDERING TWEETS DAY 3_____________

// loadTweets

  function renderTweets(obj) {
    console.log("testing",obj)

    $.each(obj, function(i, val) {
      const userName = obj[i].user.name;
      const postContent = obj[i].content.text;
      const creationTime = obj[i].created_at;
      const postAvatar = obj[i].user.avatars['small'];
      const handle = obj[i].user.handle;

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
    });
  }

//____don't touch below____________
  createTweetElement(tweetData);
});
