function switchTab(index) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${index}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

function closeMenu() {
    if (window.cef) {
        cef.emit('close_window');
    } else {
        document.getElementById('app').classList.add('hidden');
    }
}

function sendAction(name) {
    if (window.cef) {
        cef.emit(name);
    } else {
        alert('Действие отправлено в Lua!');
    }
}

// Прием событий от Lua-скрипта
if (window.cef) {
    cef.on('toggle_menu', function(visible) {
        const app = document.getElementById('app');
        if (visible) {
            app.classList.remove('hidden');
        } else {
            app.classList.add('hidden');
        }
    });
}