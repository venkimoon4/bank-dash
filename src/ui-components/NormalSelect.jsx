import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-react";

const NormalSelect = ({ label = "", placeholder = "", data = [] }) => {
  return (
    <Select>
      <SelectAction className="outline-none border-[0.1rem] border-gray-300">
        <SelectValue placeholder={`${placeholder}`} />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data.map((div) => {
            return <SelectItem value={`${div}`}>{div}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default NormalSelect;
