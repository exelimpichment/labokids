import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { titleFont } from '../fonts';

const LanguageSelect = () => {
  return (
    <Select value={'En'}>
      <SelectTrigger
        className={`${titleFont.className} w-20 border-0 text-lg text-black lg:text-white xl:text-[22px] xl:leading-[1.85rem]`}
      >
        <SelectValue placeholder="Pl" className={`${titleFont.className} `} />
      </SelectTrigger>
      <SelectContent
        className={`${titleFont.className} w-20 border-0 text-lg `}
      >
        <SelectItem
          value="Pl"
          className="cursor-pointer text-lg text-black lg:text-white   xl:text-[22px] xl:leading-[1.85rem]"
        >
          Pl
        </SelectItem>
        <SelectItem
          value="En"
          className="cursor-pointer text-lg text-black lg:text-white  xl:text-[22px] xl:leading-[1.85rem]"
        >
          En
        </SelectItem>
        <SelectItem
          value="Ukr"
          className="cursor-pointer text-lg text-black lg:text-white   xl:text-[22px] xl:leading-[1.85rem]"
        >
          Ukr
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
