function BaseCheckbox() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

export default function Checkbox() {
  return (
    <div className="relative size-full" data-name="Checkbox">
      <BaseCheckbox />
    </div>
  );
}