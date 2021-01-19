var operations = {
    sum: function(req, res) {
        return Number(req.params.numberA) + Number(req.params.numberB);
    },
    rest: function(req, res) {
        return req.params.numberA - req.params.numberB;
    },
    mult: function(req, res) {
        return req.params.numberA * req.params.numberB;
    }
};

module.exports = operations;