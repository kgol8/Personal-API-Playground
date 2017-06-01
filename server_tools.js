var quoteList = require("./quoteList").get_quote_list();
// OBJECTS

function random_quote (filter) {
    return {
        get_quote:  function get_quote (filter) {
            if (!filter) {
                return quoteList[Math.floor(Math.random() * quoteList.length)];
            }
        }
    }
}

module.exports = {
    get_random_quote:   random_quote
}
