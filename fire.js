function createFire(containerId) {
    const container = document.getElementById(containerId);

    setInterval(() => {
        const fireElement = document.createElement('div');
        fireElement.classList.add('fire');
        fireElement.style.left = Math.random() * 80 + 'px';
        fireElement.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';

        container.appendChild(fireElement);

        setTimeout(() => {
            fireElement.remove();
        }, 1000);
    }, 100);
}

createFire('fire-left');
createFire('fire-right');
