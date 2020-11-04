// Quote List

const quoteList = [
    {
        quote:"Keep different ideas together in order to catch the truth and agitate thoughts like agitating musk for butter in order to bring about the true and firm thoughts.",
        author:"Imam Ali"
    },
    {
        quote:"Don`t ever regret deep reflection and rationalisation, for thinkingrevives the alert heart and is a key to doors of wisdom.",
        author:"Imam Hasan"
    },
    {
        quote:"Everything has a foundation and the foundation of Islam is loving us, the Prophet's household. ",
        author:"Rasool' Allah"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        quote:"Silence is the best reply to a fool.",
        author:"Imam Ali"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    }
];

const btn = document.getElementById("generate-btn")
btn.addEventListener('click',quoteFunc)

function quoteFunc(){
    let index = Math.floor(Math.random() * quoteList.length)
    document.getElementById("quote").textContent = quoteList[index].quote
    document.querySelector(".author").textContent = quoteList[index].author

}
  