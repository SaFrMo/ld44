import _throttle from 'lodash/throttle'

// resize handler
const setSizes = store => {
    store.commit('browser/SET_WIN_WIDTH', window.innerWidth)
    store.commit('browser/SET_WIN_HEIGHT', window.innerHeight)
    const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )
    store.commit('browser/SET_DOC_HEIGHT', docHeight)
}

// scroll handler
const setScroll = store => {
    const sTop = window.pageYOffset || document.documentElement.scrollTop
    store.commit('browser/SET_SCROLL_TOP', sTop)
}

// plugin
export default ({ store }, inject) => {
    // size/scroll handlers
    const onResize = () => setSizes(store)
    const onScroll = () => setScroll(store)

    // set listeners + kick
    window.addEventListener('resize', _throttle(onResize, 50))
    window.addEventListener('scroll', _throttle(onScroll, 200))
    onResize()
    onScroll()

    // detect window blur/focus
    window.onblur = () => {
        store.commit('browser/SET_WINDOW_BLURRED')
    }
    window.onfocus = () => {
        store.commit('browser/SET_WINDOW_FOCUSSED')
    }

    // load fonts
    store.dispatch('browser/LOAD_FONTS')
}
