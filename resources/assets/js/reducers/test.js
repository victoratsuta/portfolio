class Interpreter {
    constructor() {
        this.vars = {};
        this.functions = {};
        this.error = false;
    }

    isNumeric(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    isLetter(str) {
        return typeof str !== 'undefined' && str.length === 1 && str.match(/[a-z]/i);
    }

    isUndefined(str) {
        return typeof str == 'undefined'
    }

    tokenize(program) {
        if (program === "")
            return [];
        var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
        return program.split(regex).filter(function (s) {
            return !s.match(/^\s*$/);
        });

    };

    input(expr) {
        this.tokens = this.tokenize(expr);

        const result = this.resolve(this.tokens)[0]
        /*        console.log( this.error) */
        if (this.error) {
            throw this.error
        } else {
            return result
        }

    };

    binary(operation, tokens, i) {

        if (this.isNumeric(tokens[i - 1]) && this.isNumeric(tokens[i + 1])) {

            const start = tokens.slice(0, i - 1)
            const end = tokens.slice(i + 2)
            let result

            switch (operation) {
                case '+':
                    result = parseInt(tokens[i - 1]) + parseInt(tokens[i + 1])
                    break;
                case '-':
                    result = parseInt(tokens[i - 1]) - parseInt(tokens[i + 1])
                    break;
                case '*':
                    result = parseInt(tokens[i - 1]) * parseInt(tokens[i + 1])
                    break;
                case '/':
                    result = parseInt(tokens[i - 1]) / parseInt(tokens[i + 1])
                    break;
                case '%':
                    result = parseInt(tokens[i - 1]) % parseInt(tokens[i + 1])
                    break;
            }

            return [
                ...start,
                result,
                ...end
            ]
        }

    }

    assign(tokens, i) {
        if (this.isLetter(tokens[i - 1]) && this.isNumeric(tokens[i + 1])) {
            this.vars[tokens[i - 1]] = parseInt(tokens[i + 1])
            return this.vars[tokens[i - 1]]
        }
    }

    resolve(tokens) {

        do {

            for (let i = 0; i < tokens.length; i++) {

                // check for breakets
                if (tokens[i] == '(') {

                    if (this.isUndefined(tokens[i + 1])) console.log('error with breakets')
                    let breaketsStack = 1;
                    let breaketsEnd;
                    let breaketsStart = i + 1

                    for (let j = breaketsStart; j < tokens.length; j++) {
                        if (tokens[j] == '(') ++breaketsStack
                        if (tokens[j] == ')') --breaketsStack
                        if (breaketsStack == 0) {
                            breaketsEnd = j
                            break
                        }

                    }

                    const start = tokens.slice(0, breaketsStart - 1)
                    const inBreackets = tokens.slice(breaketsStart, breaketsEnd)
                    const end = tokens.slice(breaketsEnd + 1)

                    tokens = [
                        ...start,
                        ...this.resolve(inBreackets),
                        ...end
                    ]
                    continue
                }
                // check for breakets

                //multiply
                else if (tokens[i] == '*') {
                    tokens = this.binary('*', tokens, i)
                    continue
                }
                //multiply

                //divide
                else if (tokens[i] == '/') {
                    if (tokens[i + 1] == '(') continue
                    tokens = this.binary('/', tokens, i)
                    continue
                }
                //divide

                //dividePercent
                else if (tokens[i] == '%') {
                    tokens = this.binary('%', tokens, i)
                    continue
                }
                //dividePercent

                //sum
                else if (tokens[i] == '+') {
                    tokens = this.binary('+', tokens, i)
                    continue
                }
                //sum

                //minus
                else if (tokens[i] == '-') {
                    tokens = this.binary('-', tokens, i)
                    continue
                }
                //minus

                //sign
                else if (tokens[i] == '=') {
                    tokens = [this.assign(tokens, i)]
                    continue
                }
                //sign

                //symbol
                else if (this.isLetter(tokens[i])) {

                    if (!this.isUndefined(this.vars[tokens[i]])) {
                        tokens[i] = this.vars[tokens[i]]
                        continue
                    }
                    else if (tokens[i + 1] !== '=') {

                        this.error = 'ERROR: Invalid identifier. No variable with name ' + tokens[i] + ' was found.'
                        tokens = 0
                        continue
                    }

                }
                //symbol
            }

        } while (!this.isNumeric(tokens))


        return tokens

    }
}

