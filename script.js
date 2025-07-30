/**
 * 切换移动端菜单的显示状态
 * 当用户点击汉堡图标时，此函数会被调用
 * 它会切换菜单和图标的'open'类，从而显示或隐藏菜单
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");  // 获取菜单元素
  const icon = document.querySelector(".hamburger-icon");  // 获取汉堡图标元素
  menu.classList.toggle("open");  // 切换菜单的'open'类
  icon.classList.toggle("open");  // 切换图标的'open'类
}
