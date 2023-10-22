import { navbarLinks } from '../navbarData';
import DropdownItem from './dropdownItem';

const DropdownItemsList = () => {
  return (
    <div className="p-1">
      {navbarLinks.map((link) => (
        <DropdownItem key={link.id} />
      ))}
    </div>
  );
};

export default DropdownItemsList;
