const demo1 = document.getElementById('demo')
const arr = ['haha', 'hehe']
let content = ''
arr.map(value => {
    content += `<p>${value}</p>`
})
demo1.innerHTML = content

// 2.2
const node = document.createElement('p')
const node1 = document.createElement('p')
node.innerHTML = 'insert ở cuối'
demo1.appendChild(node)
node1.innerHTML = 'insert ở đầu'
demo1.insertBefore(node1,document.getElementsByTagName('p')[0])