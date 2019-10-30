const db = require ('../Configs/db');

module.exports = {
    getByStatus: statuscheck => {
        return new Promise ((resolve,reject) => {
            db.query(
                `SELECT * FROM bookcollection where status = ? ORDER by title ASC`,
                [statuscheck],
                (err,response) => {
                    if (!err){
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });

    },
};