const allowed = true;
const articles = [1, 2, 3]
console.log('début');

(async () => {
    try {
        let member = await getMember();
        let articles = await getArticles(member);
        console.log(articles)
    } catch(err) {
        console.log(err.message)
    }
})()


console.log('success')

function getMember(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(allowed) {
                resolve('member 1')
            } else {
                reject(new Error('You are not allowed'))
            }
        }, 1500)
    })
}

function getArticles(member){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(member && articles.length){
                resolve([1, 2, 3])
            } else {
                reject(new Error('Error during getArticles()'))
            }
        }, 1500)
    })
}