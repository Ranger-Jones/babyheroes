const NavbarItem = ({ url, title, svg }) => {
  return (
    <li class="nav-item">
      <a href={url} class="nav-link">
        {svg}
        <span class="link-text">{title}</span>
      </a>
    </li>
  );
};

export default NavbarItem;
