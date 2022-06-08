import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    easing: 'ease-out-quart',
    duration: 600,
    once: true
});

export default ({ app }) => {
    app.router.afterEach((to, from) => {
        setTimeout(() => {
            AOS.refresh();
        }, 400);
    })
}
