const root = document.getElementById('root')
var columns = ['id', 'name', 'username', 'email', 'address']


function getData(url,method='GET'){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest()
        request.open(method,url)
        request.send()
        request.onload = function(){
            if (this.status >= 200 && this.status < 300) {
                resolve({
                    response: request.response,
                    json: function(){
                        return new Promise(function(resolve1){
                            resolve1(JSON.parse(request.response))
                        })
                    }
                })
            }
            else{
                reject({
                    status: this.status,
                    statusText: this.statusText
                })
            }
        }
        request.onerror = function(){
            reject({
                status: this.status,
                statusText: this.statusText
            })
        }
    })

}

// fetch(url='https://jsonplaceholder.typicode.com/users')
getData(url='https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => createPage(json))
    .catch(err => console.log(err.statusText,'Error'))


function createPage(users){
    // header
    root.appendChild(createHeader())

    // table
    root.appendChild(createTable(users))


}

function createHeader(){
    const header = document.createElement('h2')
    header.textContent = 'User List - XHR'
    header.style.textAlign = 'center'
    header.style.fontFamily = 'Courier New'

    return header
}

function createTable(users){
    // table
    const table = document.createElement('table')
    table.setAttribute('class','styled-table')
    table.setAttribute('width','100%')
    
    // table header
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    table.appendChild(thead)
    thead.appendChild(tr)

    columns.forEach(column => {
        const th = document.createElement('th')
        th.textContent = column
        tr.appendChild(th)
    })

    const thDelete = document.createElement('th')
    tr.appendChild(thDelete)

    // table data
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    
    users.forEach(element => {
        const user = new User(element) 
        tbody.appendChild(user.createUser())
    })

    return table
}


class User {
    constructor({id, name, username, email, address}){
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this._address = address
    }

    get address(){
        return `${this._address.city} ${this._address.street} ${this._address.suite}` 
    }

    createUser(){
        const tr = document.createElement('tr')
        tr.setAttribute('id',`id-${this.id}`)
    
        columns.forEach(column => {
            const td = document.createElement('td')
            td.textContent = this[column]
            tr.appendChild(td)
        })

        const tdDelete = document.createElement('td')
        tr.appendChild(tdDelete)
        const trash = document.createElement('li')
        trash.setAttribute('class','fas fa-trash')
        trash.style.cursor= 'pointer'
        tdDelete.appendChild(trash)
        tdDelete.addEventListener('click',event => this.removeUserFromList())
        
        
        return tr
    }    

    removeUserFromList(){
        const record = document.getElementById(`id-${this.id}`)
        record.remove()
    }
}