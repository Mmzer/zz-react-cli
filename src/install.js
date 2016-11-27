let which = require('which')

function runCmd(cmd, args, fn) {
  args = args || []
  let runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  })
  runner.on('close', function (code) {
    if (fn) {
      fn(code)
    }
  })
}

function findNpm() {
  let npms = ['tnpm', 'cnpm', 'npm']
  for (let i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i])
      console.log('use npm: ' + npms[i])
      return npms[i]
    } catch (e) {}
  }
  throw new Error('please install npm')
}

module.exports = function (done) {
  let npm = findNpm()
  runCmd(which.sync(npm), ['install'], function () {
    console.log(npm + ' install end')
    done()
  })
}
