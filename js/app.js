var app = new Vue({
    el: '#app',
    data: {
        subscribe: {
            email: '',
            post: ''
        }
    },
    methods: {
        getArticleName: function () {
            app.subscribe.post = document.getElementById("title").innerText
        },
        articleSubscribe() {
            app.getArticleName(),
                axios.post('/api/v1/feedback', app.subscribe, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                    .then((response) => {
                        app.subscribe.post = "";
                        app.subscribe.email = "";
                        Vue.$toast.open({
                            message: 'Спасибо за проявленный интерес',
                            type: 'success',
                        })
                            .catch((error) => {
                                console.log(error);
                            })
                    });
        }
    }
})