document.getElementById('pause').style.display = 'none'
document.getElementById('bao_tri').onclick = () => {
    document.getElementById('pause').style.display = 'block'
    document.getElementById('demo').style.display = 'none'
    document.getElementById('bao_tri').style.display = 'none'
}
document.getElementById('back').onclick = () => {
     document.getElementById('pause').style.display = 'none'
    document.getElementById('demo').style.display = 'block'
    document.getElementById('bao_tri').style.display = 'block'

}