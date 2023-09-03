import ('./FilterCheckbox.css');
import ('./__checkbox-blank/filter-checkbox__checkbox-blank.css');
import ('./__checkbox/filter-checkbox__checkbox.css');

export default function FilterCheckbox ({ onClick, isChecked }) {

  return (
    <label className="filter-checkbox">
      <input type="checkbox" name="filter-checkbox" checked={isChecked} onChange={onClick} className="filter-checkbox__checkbox-blank" />
      <span className="filter-checkbox__checkbox"></span>
      Короткометражки
    </label>
  );
}
