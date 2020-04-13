export const checkImgLoading = $slide => {
  if (!$slide || $slide.dataset.loaded) return

  const $img = $slide.querySelector('img')
  if ($img.complete) {
    $slide.dataset.loaded = true
    return
  }

  $slide.dataset.loaded = false

  $img.addEventListener('load', () => {
    $slide.dataset.loaded = true
  }, { once: true })
}

export const setupSlides = () => {
  const $$slides = document.querySelectorAll(".slides")
  for (const $slides of $$slides) {
    $slides.dataset.now = 1
    $slides.dataset.length = $slides.children.length

    $slides.addEventListener('click', () => {
      const $selected = $slides.querySelector('[is-selected]')
      $selected.removeAttribute('is-selected')
      if ($selected.nextElementSibling) {
        $selected.nextElementSibling.setAttribute('is-selected', 'is-selected')
        checkImgLoading($selected.nextElementSibling)
        $slides.dataset.now++
      } else {
        $slides.firstChild.setAttribute('is-selected', 'is-selected')
        $slides.dataset.now = 1
      }
    })
  }
}
