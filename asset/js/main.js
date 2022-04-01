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
                    done: true
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
                this.newTask = ''
            },
            doneTrue(elem){
                if(elem.done == true){
                    elem.done = false
                } else{
                    elem.done = true
                }
            },
            remove(element){
                this.toDoArray.splice(element, 1)
            }
        },
    }
)