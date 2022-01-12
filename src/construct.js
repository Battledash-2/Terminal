module.exports = {
    /**
     * @param {Int | String} code Color code
     * @param {String} string String to append after color code
     */
    cons2b = (code, string)=>{
        return "\u001b["+code.toString()+"m"+string;
    },

    /**
     * @param {Int | String} code ANSI Color code :1
     * @param {Int | String} code2 ANSI Color code :2
     * @param {String} string String to append after color code
     */
    cons3b = (code, code2, string)=>{
        return "\u001b["+code.toString()+";"+code2.toString()+"m"+string;
    },

    /**
     * @param {Int | String} code ANSI Color code :1
     * @param {Int | String} code2 ANSI Color code :2
     * @param {Int | String} code3 ANSI Color code :3
     * @param {String} string String to append after color code
     */
    cons4b = (code, code2, code3, string)=>{
        return "\u001b["+code.toString()+";"+code2.toString()+";"+code3.toString()+"m"+string;
    },
}