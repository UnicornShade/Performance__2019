describe('Page', () => {
  it('compare screens', function() {
    return this.browser
      .url('/')
      .assertView('components file list', 'body')
  })

  // it('compare bottom', function () {
  //   this.browser
  //     .url('/')
  //     .scroll(0, 1000)
  //     .setViewportSize({ width: 1920, height: 3000 })
  //     .assertView('plain', 'body')
  // })
})
