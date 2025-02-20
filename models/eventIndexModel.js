const connection = require('../config/database');

class eventIndexModel {
    static getAll() {
        return new Promise((resolve, reject) => {
            connection.query(`select * from event_index`, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    }
}

module.exports = eventIndexModel
