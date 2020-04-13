import { checkImgLoading } from './slides'

export const setupDetails = () => {
  const $$button = document.querySelectorAll(".toggle-details")
  for (const $button of $$button) {
    const $details =
      $button.parentElement.querySelector(".details") ??
      $button.closest(".details")
    $button.addEventListener("click", () => {
      $details.classList.toggle("hidden")

      checkImgLoading($details.querySelector('.slides .slide[is-selected]'))
    })
  }
}
