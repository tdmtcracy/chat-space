$(function(){ 
    function buildHTML(message){
      if ( message.image ) {
        var html =
          `<div class="message">
            <div class="message-info-box">
              <div class="message-info-box__user-name">
                ${message.user_name}
              </div>
              <div class="message-info-box__date-time">
                ${message.created_at}
              </div>
            </div>
            <div class="message-contents">
              <p class="message-contents__text">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
          return html;
      } else {
        var html =
          `<div class="message">
            <div class="message-info-box">
              <div class="message-info-box__user-name">
                ${message.user_name}
              </div>
              <div class="message-info-box__date-time">
                ${message.created_at}
              </div>
            </div>
            <div class="message-contents">
              <p class="message-contents__text">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .always(function() {
      $('.form__submit').prop('disabled',false);
    })
    .fail(function() {
      alert("メッセージの送信に失敗しました");
    })
  });
});