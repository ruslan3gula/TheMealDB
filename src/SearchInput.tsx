import { Link } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

export const SearchInput = ({ setSearch, startSearch }) => {
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onChange={(e) => setSearch(e.target.value)}
      onSearch={startSearch}
    />
  );
};
