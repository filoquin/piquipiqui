const { Component, useState, onMounted, onWillUnmount } = owl;

export class Dashboard extends Component {
    static template = 'Dashboard';

    setup() {
        this.state = useState({ fullscreen: !!document.fullscreenElement });
        this._onFsChange = () => { this.state.fullscreen = !!document.fullscreenElement; };
        onMounted(() => document.addEventListener('fullscreenchange', this._onFsChange));
        onWillUnmount(() => document.removeEventListener('fullscreenchange', this._onFsChange));
    }

    go(route) { location.hash = route; }

    logout() { location.href = '/web/session/logout'; }

    toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    get supportsFullscreen() {
        return !!document.documentElement.requestFullscreen;
    }
}
