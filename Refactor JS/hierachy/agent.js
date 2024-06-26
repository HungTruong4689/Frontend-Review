class Agent{
    constructor(name,type){
        this.name = 'name'
        if(Math.random()>0.5){
            this.type = 'user'
        }else{
            this.type = 'project'
        }
    }
    static makeProjectOrUser(agent){
        if(agent.type === 'user'){
            return Object.assign(Object.create(new User),agent)
        }else{
            return Object.assign(Object.create(new Project),agent)
        }
    }
}

class User extends Agent{
    sayName(){
        return `my name is ${this.name}`
    }
}

class Project extends Agent{
    sayTheName(){
        return `my project name is ${this.name}`
    }
}

const agent = new Agent('name')

const projectOrUser = Agent.makeProjectOrUser(agent)