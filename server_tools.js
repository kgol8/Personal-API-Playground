
// OBJECTS

function random_quote (filter) {
    return {
        get_quote:  function get_quote (filter) {
            if (!filter) {
                var quoteList = ["ThisQuote", "ThatQuote", "MyQuote"];
                return quoteList[Math.floor(Math.random() * quoteList.length)];
            }
        }
    }
}

module.exports = {
    get_random_quote:   random_quote
}
