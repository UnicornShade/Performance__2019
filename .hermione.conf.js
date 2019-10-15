module.exports = {
  baseUrl: 'http://localhost:5000',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      compositeImage: true,
      windowSize: '2560x3000'
    }
  },

  plugins: {
    'html-reporter/hermione': {
      path: 'reports/hermione-html'
    }
  }
}
