import { Printer, Building2, Clock, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface DropdownProps {
  icon: 'printer' | 'building' | 'clock';
  label: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}

export default function Dropdown({ icon, label, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getIcon = () => {
    switch (icon) {
      case 'printer':
        return <Printer className="mr-2 h-4 w-4" />;
      case 'building':
        return <Building2 className="mr-2 h-4 w-4" />;
      case 'clock':
        return <Clock className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-w-[200px] items-center justify-between rounded-lg bg-[#EFEDF4] px-4 py-2"
      >
        <div className="flex items-center">
          {getIcon()}
          <span className="text-gray-700">{selectedOption || label}</span>
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleSelect(option.value, option.label)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
