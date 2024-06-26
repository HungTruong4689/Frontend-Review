const page ={
    say(string){
        console.log(string);

    },
    yell(string){
        alert(string)
    },
    addNewLine(){
        document.body.appendChild(document.createElement('br'))
    },
    addButton(text){
        const button = document.createElement('button');
        button.innerText = text;
        document.body.appendChild(button);
    },
    addText(text){
        const span = document.createElement('span');
        span.innerText = text;
        document.body.appendChild(span);
    },
    changeBackground(color){
        document.body.style.backgroundColor = color;    
    },
    now(asNumber = false){
        
        if(asNumber){
            return new Date().toLocaleTimeString();
        }
        return new Date().getTime();
    },
    timeOnPage(){
        return ((this.now(true) - this._start)/1000) + " seconds"
    },
    loadTime(){
        return ((this._start - this._loaded)/1000) + " seconds"
    },
    eventsSoFar(){
        console.log(this._events);
    },
    _events:[],
    _start:'nothing yet',
    _loaded:'nothing yet'
}

window.onload = function(){
    page._start = page.now(true)
    page._loaded = performance.timing.navigationStart
}