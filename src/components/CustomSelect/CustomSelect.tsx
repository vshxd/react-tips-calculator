import Select, { OnChangeValue, StylesConfig } from "react-select";

interface IProps {
  value: string;
  onSelect: (value: string) => void;
}
interface IOption {
  value: string;
  label: string;
}

export const CustomSelect = ({ value, onSelect }: IProps) => {
  const options: IOption[] = [
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
  ];
  const handleSelect = (newValue: OnChangeValue<IOption, boolean>) => {
    onSelect((newValue as IOption).value);
  };
  const getOptionValue = (value: string): IOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };

  const colorStyles: StylesConfig<IOption, false> = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#b7fbf3" : "transparent",
      color: "black",
      padding: 20,
    }),
    control: (styles) => ({
      ...styles,
      borderRadius: 30,
      border: "none",
      padding: 10,
      textAlign: "center",
      fontSize: "24px",
    }),
  };

  return (
    <Select
      options={options}
      styles={colorStyles}
      value={getOptionValue(value)}
      onChange={handleSelect}
    />
  );
};
