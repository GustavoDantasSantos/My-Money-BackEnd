const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.Messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.Messages.Number.min = "O '{VALUE}' informador é menor que o limite mínino de '{MIN}'."
mongoose.Error.Messages.Number.max = "O '{VALUE}' informador é maior que o limite máximo de '{MAX}'."
mongoose.Error.Messages.String.enum = "O '{VALUE}' informador não é permitido para o atributo  '{PATH}'."