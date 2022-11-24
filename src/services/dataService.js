const http = require('http')
const agent = new http.Agent({ rejectUnauthorized: false })

async function match() 
{ 
    console.log(process.env.API_URL)
    const response = await fetch(
        process.env.API_URL + 'matches',
        { 
            method: 'GET', 
            agent,
            headers:
            { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': process.env.SECRET_KEY
            }
        }
    )
    const result = await response.json()
    return result
}


const dataService = 
{ 
    match
}

export default dataService