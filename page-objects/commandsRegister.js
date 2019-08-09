var registerCommands = {
    validateForm: function () {
        return this.waitForElementVisible('body', 1000)
            .verify.visible('@username')
            .verify.visible('@password')
            .verify.value('@register', 'Register')
            .verify.elementNotPresent('#error')
    },
    fillInForm: function (username, password) {
        return this.waitForElementVisible('body', 1000)
            .setValue('@username', username)
            .setValue('@password', password)

    },
    register: function () {
        return this.verify.value('@register', 'Register')
            .click('@register')
    },
    validateError: function (errorMessage) {
        return this.verify.visible('#error')
            .verify.containsText('#error', errorMessage)

    }
};


module.exports = {
    commands: [registerCommands],
    url: function () {
        return this.api.launchUrl;
    },

    sections: {
        registerinput: {
            selector: '#registerfrm',


            elements: {
                username: {
                    selector: 'input[name=user_name]'
                },
                password: {
                    selector: 'input[name=password]'
                },
                email: {
                    selector: 'input[name=email]'
                },
                register: {
                    selector: 'input[type=submit]'
                }
            }
        }
    }
};
