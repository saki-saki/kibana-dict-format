export default function (server) {

  server.route({
    path: '/api/dict-field/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
