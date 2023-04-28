'use strict'


const response = require('../response')
const db = require('../settings/db')

exports.getAllPrigorod = (req, res) => {

    db.query('SELECT * FROM `prigorods`', (error, rows, fields) => {
        if(error) {
            response.status(400, error, res)
        } else {
            response.status(200, rows, res)
        }
    })

}
exports.postPrigorod = (req, res) => {
    const p_o = req.body.p_o;
    const p_p = req.body.p_p;
    const time_o = req.body.time_o;
    const time_p = req.body.time_p;
    const count_m = req.body.count_m;
    const count_mo = req.body.count_mo;
    const price = req.body.price;
    const name_vod = req.body.name_vod;
    const gos_nomer = req.body.gos_nomer;

    db.query("INSERT INTO `prigorods`(`id`, `p_o`, `p_p`, `time_o`, `time_p`, `count_m`, `count_mo`, `price`, `name_vod`, `gos_nomer`) VALUES(NULL, '" + p_o + "', '" + p_p + "', '" + time_o + "', '" + time_p + "', '" + count_m + "', '" + count_mo + "', '" + price + "', '" + name_vod + "', '" + gos_nomer + "')", (error, rows, results) => {
        if(error) {
            response.status(400, error, res)
        } else {

            response.status(200, {message: `Posted.`, results}, res)
        }
    })

}

exports.getId = (req, res) => {
    const id = req.params.id

    db.query("SELECT * FROM `prigorods` WHERE `id` = '" + req.params.id + "'", (error, rows, results) => {
        if(error) {
            response.status(400, error, res)
        } else {

            response.status(200, {message: `GetID.`, rows}, res)
        }
    })

}
exports.putId = (req, res) => {
    const id = req.body.id
    const p_p = req.body.p_p
    const p_o = req.body.p_o
    const time_o = req.body.time_o
    const time_p = req.body.time_p
    const count_m = req.body.count_m
    const count_mo = req.body.count_mo
    const price = req.body.price
    const name_vod = req.body.name_vod
    const gos_nomer = req.body.gos_nomer

    db.query("UPDATE`prigorods` SET `p_o`='" + p_o + "', `p_p`='" + p_p + "', `time_o`='" + time_o + "', `time_p`='" + time_p + "', `count_m`='" + count_m + "', `count_mo`= '" + count_mo + "', `price`='" + price + "', `name_vod`='" + name_vod + "', `gos_nomer`='" + gos_nomer + "' WHERE `prigorods`.`id`='" + req.params.id + "'", (error, rows, results) => {
        if(error) {
            response.status(400, error, res)
        } else {

            response.status(200, {message: `Updated.`, results}, res)
        }
    })

}
exports.delId = (req, res) => {
    const id = req.params.id

    db.query("DELETE FROM `prigorods` WHERE `prigorods`.`id` = '" + req.params.id + "'", (error, rows, results) => {
        if(error) {
            response.status(400, error, res)
        } else {

            response.status(200, {message: `Deleted.`, results}, res)
        }
    })

}
