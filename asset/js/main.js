var app = new Vue(
    {
        el: '#root',
        data: {
            newTask: '',
            toDoArray: [
                {
                    text: 'fare i compiti',
                    done: false
                },
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'fare il bucato',
                    done: false
                },
            ],
        },
        methods: {
            newToDo(){
                this.toDoArray.push({text: this.newTask, done:false})
                console.log(this.newTask)
                console.log(this.toDoArray)
            }
        },
    }
)