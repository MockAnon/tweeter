$(document).ready(function(){
//word rapp
// window.setInterval(loadTweets, 10000);
//_____________remove trash________

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

//___________Toggle newpost______________
  var $toggle = $('#header-compose');
  $toggle.on('click', function ( event ) {
    $(".new-tweet").slideToggle();
    $("#post-text").select();
  });


  // $(document).ready(function(){
  //   $("button").click(function(){
  //       $("p").slideToggle();
  //   });


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

  // $(function() {
    var $button = $('#submitTweet');
    $button.on('click', function ( event ) {
      event.preventDefault();
// let $posttext =
      if($('#post-text').val() == '' || $('#post-text').val() == null) {
        $("#error").text("Error: please enter in a message");
        $("#error").slideDown();
        // $('#error').css('visibility', 'visible');

        // $(".new-tweet").slideToggle();



      } else if($('#post-text').val().length >= 141) {
          $("#error").text("Error: only post up to 140 characters");
          $("#error").slideDown();

          // $('#error').css('visibility', 'visible');


          // return alert("You can only post up to 140 characters");

       } else {

        $("#error").slideUp();
        // $('#error').css('visibility', 'hidden');
        // $("#error").text("");


      const $serialOut = $("#post-form").serialize();
      console.log($serialOut);
      $.post('/tweets', $serialOut, function(data, status){
        console.log(data, status);

        createTweetElement(data);

        // $('#tweets-container').prepend(createTweetElement(data));
      });

    }

  });
  // });
  // });



//___________Posting older tweets_________

function createTweetElement(obj){
  // console.log('called');
  const userName = obj.user.name;
  const postContent = obj.content.text;
  const creationTime = obj.created_at;
  const postAvatar = obj.user.avatars['small'];
  const handle = obj.user.handle;




  // ("<div class='content'>").html(postContent);

 // <div class="content"> ${postContent} </div>

 // {escape(textFromUser)}

$('#tweets-container').prepend(`
  <article class="tweet">
    <header>
      <img class="thumb" src= ${escape(postAvatar)} >
      <h1> ${escape(userName)} </h1>
      <p> ${escape(handle)} </p>
    </header>
    <div class="content"> ${escape(postContent)} </div>
    <footer>${escape(creationTime)}</footer>
  </article>`
  )

}

// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }
// }

//___________RENDERING TWEETS DAY 3_____________

  function renderTweets(obj) {
    console.log("testing",obj)

    $.each(obj, function(i, val) {
      const userName = obj[i].user.name;
      const postContent = obj[i].content.text;
      const creationTime = obj[i].created_at;
      const postAvatar = obj[i].user.avatars['small'];
      const handle = obj[i].user.handle;

      $('#tweets-container').prepend(`
        <article class="tweet">
          <header>
            <img class="thumb" src= ${escape(postAvatar)} >
            <h1> ${escape(userName)} </h1>
            <p> ${escape(handle)} </p>
          </header>
          <div class="content"> ${escape(postContent)} </div>
          <footer>${escape(creationTime)}</footer>
        </article>`
      )
    });
  }

//____don't touch below____________
  // createTweetElement(tweetData);
});
