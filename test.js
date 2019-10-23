describe('Page', () => {
  it('compare screens', function() {
    return this.browser
      .url('/')
      .assertView('components file list', 'body')
  })
})
