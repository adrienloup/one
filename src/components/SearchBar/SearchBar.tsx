import { StatusType } from '../../models/Status';
import { TextFieldComponent } from '../TextField/TextField';

interface SearchBarProps {
  cssClass?: string;
  id?: string;
  placeholder?: string;
  status?: StatusType;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
}

export const SearchBarComponent = ({
  cssClass,
  id,
  placeholder,
  status,
  value,
  onChange,
}: SearchBarProps) => {
  // console.log("SearchBarComponent");

  return (
    <TextFieldComponent
      cssClass={cssClass ? `${cssClass}` : ''}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      prefix="manage_search"
      status={status}
    />
  );
};
