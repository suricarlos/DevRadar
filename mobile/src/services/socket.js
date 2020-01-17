import socketio from 'socket.io-client'

const socket = socketio('http://172.16.8.106:3333', {
  autoConnect: false,
})

function subscribeToNewDevs(subcribesFunction) {
  socket.on('new-dev', subcribesFunction)
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  }

  socket.connect()
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect()
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
}