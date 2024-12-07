export default function ToggleSwitch({ isOn, onChange }: { isOn: boolean; onChange: (newState: boolean) => void }) {
  return (
    <label className="relative inline-block h-8 w-16">
      <input type="checkbox" checked={isOn} onChange={() => onChange(!isOn)} className="h-0 w-0 border opacity-0" />
      <div
        className={`absolute inset-0 flex items-center rounded-full transition-all duration-300 ${
          isOn ? 'bg-[#525A92]' : 'bg-[#F5F2FA]'
        }`}
      >
        <span
          className={`block h-6 w-6 rounded-full bg-[#DBD8E0] transition-transform duration-300 ${
            isOn ? 'translate-x-8 transform' : 'translate-x-2 transform'
          }`}
        ></span>
      </div>
    </label>
  );
}
