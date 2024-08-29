(function(){

  var createEmbedFrame = function(){
    var uid                   = "JSFEMB_" + (~~(new Date().getTime() / 86400000))
    var uriOriginal           = "https://jsfiddle.net/hd1gr3yv/2/embed"
    var uriOriginalNoProtocol = uriOriginal.split("//").pop()
    var uriEmbedded           = "https://jsfiddle.net/hd1gr3yv/2/embedded/"
    var currentSlug           = "hd1gr3yv"
    var target                = document.querySelector("script[src*='" + uriOriginalNoProtocol + "']")
    var iframe                = document.createElement("iframe")

    iframe.src               = uriEmbedded
    iframe.id                = uid
    iframe.width             = "100%"
    iframe.height            = "0"
    iframe.frameBorder       = "0"
    iframe.allowtransparency = true
    iframe.sandbox           = "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads"
    iframe.allow             = "midi; geolocation; microphone; camera; display-capture; encrypted-media; speaker-selection;"

    target.parentNode.insertBefore(iframe, target.nextSibling)

    var setHeight = function(data){
      if (data.slug === currentSlug) {
        var height = data.height <= 0 ? 400 : data.height + 50
        iframe.height = height
      }
    }

    var listeners = function(event){
      var eventName = event.data[0]
      var data      = event.data[1]

      switch (eventName) {
        case "embed":
          setHeight(data)
        case "resultsFrame":
          setHeight(data)
      }
    }

    window.addEventListener("message", listeners, false)
  }

  setTimeout(createEmbedFrame, 5)

}).call(this)