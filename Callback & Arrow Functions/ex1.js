const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(func) {
    setTimeout(func, 1000)
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"
