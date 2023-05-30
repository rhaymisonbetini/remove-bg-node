'use strict'
const { exec } = require("child_process");

class RemoveBackground {
    /**
     * This method invokes a rembg python to remove background: ;
     * @param {string} current 
     * @param {string} save 
     * @returns 
     */
    async asyncRemoveBackground(current, save) {
        return new Promise((resolve, reject) => {
            let command = `rembg -p  ${current} ${save}`;
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`error: ${error.message}`)
                }
                if (stderr) {
                    reject(`stderr: ${stderr}`)
                }
                resolve(`stdout: ${stdout}`)
            });
        })
    }
}

module.exports = RemoveBackground