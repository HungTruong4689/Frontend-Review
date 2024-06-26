class Report{
    constructor(params){
        this.params = params;
    }

    printReport(params){
        return params
    }
}

class GenericReport extends Report{
    constructor(params){
        super(params)
        this.params = params
    }
    printReport(params){
        return super.printReport(Object.assign(this.params,params))
    }
}

class ClientReport extends GenericReport{
    constructor(params){
        super(params)
        this.params = params
    }
    printReport(params){
        return super.printReport(Object.assign(this.params,params))
    }
}

class SpecificReport extends ClientReport{
    constructor(params){
        super(params)
        this.params = params
    }
    printReport(params){
        return super.printReport(Object.assign(this.params,params))
    }
}

const report = new SpecificReport({whatever: 'we want',to: 'add'})
console.log(report.printReport({extra: 'params'}))