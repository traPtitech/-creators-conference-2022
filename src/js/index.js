import '../css/index.scss'

if (process.env.NODE_ENV !== 'production') {
  import('../index.pug')
}

// fisher-yates shuffle
const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

const shuffleChildren = parent => {
  const shuffledChildren = shuffle(parent.children)
  parent.innerHTML = ''
  parent.append(...shuffledChildren)
}

const $categories = document.querySelector('#categories')
shuffleChildren($categories)

const $$groups = $categories.querySelectorAll('.groups')
for (const $groups of $$groups) {
  shuffleChildren($groups)
}
