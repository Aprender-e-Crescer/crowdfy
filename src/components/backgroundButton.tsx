import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export function BackgroundButton() {
  return (
    <div className="flex items-center justify-center bg-lime-100 border-2 border-lime-50 rounded-full w-24 h-6 p-1">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-xs mr-2" />
        <span className="text-green-700 text-md">$53.88</span>
      </div>
    </div>
  );
};

