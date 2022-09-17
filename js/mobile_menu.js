function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');

    const navigation = document.querySelector('.listLinks');
    navigation.classList.toggle('active');
}