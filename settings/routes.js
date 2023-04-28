'use strict'

module.exports = (app) => {
    const PrigorodController = require('../Controller/PrigorodController')
    const MezgorodController = require('../Controller/MezgorodController')

    app
        .route('/api/mezgorods')
        .get(MezgorodController.getAllMezgorod)
    app
        .route('/api/mezgorods')
        .post(MezgorodController.postMezgorod)

    app
        .route('/api/mezgorods/:id')
        .get(MezgorodController.getId)
    app
        .route('/api/mezgorods/:id')
        .put(MezgorodController.putId)
    app
        .route('/api/mezgorods/:id')
        .delete(MezgorodController.delId)



    app
        .route('/api/prigorods')
        .get(PrigorodController.getAllPrigorod)
    app
        .route('/api/prigorods')
        .post(PrigorodController.postPrigorod)

    app
        .route('/api/prigorods/:id')
        .get(PrigorodController.getId)
    app
        .route('/api/prigorods/:id')
        .put(PrigorodController.putId)
    app
        .route('/api/prigorods/:id')
        .delete(PrigorodController.delId)



}