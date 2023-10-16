import { navbarLinks } from './navbarData';
import NavbarLink from './navbarLink';

const NavbarLinkList = () => {
  return (
    <div className="flex flex-col gap-3">
      {navbarLinks.map((item) => (
        <NavbarLink key={item.id} link={item}></NavbarLink>
      ))}
    </div>
  );
};

export default NavbarLinkList;
