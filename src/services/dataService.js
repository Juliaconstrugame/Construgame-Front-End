const http = require('http')
const agent = new http.Agent({ rejectUnauthorized: false })

async function match() 
{ 
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

async function ranking({company, type}) 
{ 
    const response = await fetch(
        process.env.API_URL + '/v1/quiz/ranking?company='+ company + '&type=' + type,
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

async function questions({company, game, question}) 
{ 
    const response = await fetch(
        process.env.API_URL + 'questions?company='+ company + '&game=' + game + '&question=' + question,
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
    match,
    ranking,
    questions
}

export default dataService