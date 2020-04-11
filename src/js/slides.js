export const setupSlides = () => {
  const $$slides = document.querySelectorAll(".slides")
  for (const $slides of $$slides) {
    $slides.addEventListener('click', () => {
      const $selected = $slides.querySelector('[is-selected]')
      $selected.removeAttribute('is-selected')
      if ($selected.nextElementSibling) {
        $selected.nextElementSibling.setAttribute('is-selected', 'is-selected')
      } else {
        $slides.firstChild.setAttribute('is-selected', 'is-selected')
      }
    })
  }
}
