// eslint-disable-next-line react/prop-types
export default function GenderCheckBox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" && "selected"
          }`}
        >
          <span className="label-text  text-gray-100">Feminino</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" && "selected"
          }`}
        >
          <span className="label-text  text-gray-100">Masculino</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
    </div>
  );
}
