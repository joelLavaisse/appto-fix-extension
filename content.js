const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes) {
      const data = document.querySelector(
        'div.p-dataview.p-component.p-dataview-list.custom-dataview > div.p-dataview-content > div.p-grid.grid.p-nogutter.grid-nogutter',
      )
      if (data) {
        let key = Object.keys(data).find((key) =>
          key.startsWith('__reactProps'),
        )

        let divs = document.querySelectorAll('div.col-12.cursor-pointer')

        divs.forEach((div, index) => {
          div.onclick = function (e) {
            e.stopPropagation()

            window.open(
              `/properties/${data[key].children[index].props.item.id}`,
              '_blank',
            )
          }
        })
      }
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
