export default {
    methods: {
        async callApi(url, prms = {}) {
            let result = await this.$http.post(url,prms,{
                emulateJSON: true
            })
                .then(response => {
                    let dt = response.body;
                    if (dt.result) {
                        return {result: dt.data};
                    } else {
                        return {error: (dt.error) ? dt.error : 'Что-то пошло не так'};
                    }
                }).catch((err) => {
                    return {error: err}
                });

            if(result.error){
                this.$toast.error(result.error);
            }

            return (result.result) ? result.result : false
        },
        scroll(id){
            // Получение ссылки на элемент
            let slide = document.getElementById(id);
            // Определение расстояния от начала страницы до нужного элемента
            let top = window.scrollY + slide.getBoundingClientRect().y;
            // Перемотка
            window.scrollTo(0, top)

        }
    }
}
