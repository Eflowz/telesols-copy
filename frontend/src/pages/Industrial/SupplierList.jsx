import React from 'react';
import { FaPlay } from 'react-icons/fa'; 

const suppliers = [
  "Appleton", "Okonite", "Panduit", "Hoffman", "Hubbell", "ABB", "3M", "Weidmuller", "Thomas&Betts", "Cooper B-Line", 
  "Eaton", "Southwire", "Legrand", "Federal Signal", "GE", "Burndy", "General Cable", "Phillips", "Emerson", 
  "Raychem", "Killark", "Brady", "Siemens", "Sylvania", "Carhartt", "Larson Electronics", "Herbert Hiller", 
  "Steiner Toughguard", "MSA", "DeWALT", "Salisbury", "Sperian", "BRK", "Bulwark", "DuPont", "Uvex", "Swagelok"
];

const SupplierList = () => {
  const halfLength = Math.ceil(suppliers.length / 2);
  const firstColumn = suppliers.slice(0, halfLength);
  const secondColumn = suppliers.slice(halfLength);

  return (
    <div className="flex m-3 mt-8 md:px-113">
      <div className="grid grid-cols-2 gap-10">
        <div>
          {firstColumn.map((supplier, index) => (
            <div key={index} className="flex items-center mb-2">
              <FaPlay className="text-blue-600 mr-2" /> 
              <span className="text-gray-800">{supplier}</span>
            </div>
          ))}
        </div>
        <div>
          {secondColumn.map((supplier, index) => (
            <div key={index} className="flex items-center mb-2">
              <FaPlay className="text-blue-600 mr-2" /> 
              <span className="text-gray-800">{supplier}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplierList;
