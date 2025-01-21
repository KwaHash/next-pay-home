import React from 'react';
import { TbSearch } from "react-icons/tb";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import MInputField from "@/components/atoms/MInputField";
import MSelectBox from "@/components/atoms/MSelectBox";

import { areas, specialities } from "@/utils/data";

export interface IBuilderSearchForm {
  name: string;
  area: string;
  speciality: string;
}

interface BuilderSearchBarProps {
  setSearchData: (values: IBuilderSearchForm) => void;
}

const BuilderSearchBar: React.FC<BuilderSearchBarProps> = ({ setSearchData }) => {

  const { control, handleSubmit } = useForm<IBuilderSearchForm>();
  const onSubmit = (data: IBuilderSearchForm) => {
    setSearchData(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MInputField id="name" placeholder="会社名・キーワードで検索" control={control} />
        <MSelectBox id="area" options={areas} control={control} />
        <MSelectBox id="speciality" options={specialities} control={control} />
        <Button type="submit" variant="contained">
          <TbSearch className="w-5 h-5 font-bold" />
          <span className="font-semibold">検索する</span>
        </Button>
      </div>
    </form>
  );
};

export default BuilderSearchBar;