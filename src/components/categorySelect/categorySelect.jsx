import Select from 'react-select';

import animalLabel from "../../images/categoryImages/animal label.svg"
import businessLabel from "../../images/categoryImages/Business label.svg"
import charityLabel from "../../images/categoryImages/charity label.svg"
import communityLabel from "../../images/categoryImages/Community label.svg"
import environmentLabel from "../../images/categoryImages/environment label.svg"
import faithLabel from "../../images/categoryImages/Faith label.svg"
import familyLabel from "../../images/categoryImages/Family label.svg"
import footballLabel from "../../images/categoryImages/Football icon.svg"
import medicalLabel from "../../images/categoryImages/medical label.svg"
import othersLabel from "../../images/categoryImages/Others icon.svg"
import travelLabel from "../../images/categoryImages/travel label.svg"
import wishLabel from "../../images/categoryImages/Wish label.svg"

const CategorySelect = (props) => {
    const options = [      
      { value: 'environment', label: 'Environment', image: environmentLabel },
      { value: 'medical', label: 'Medical', image: medicalLabel },
      { value: 'sports', label: 'Sports' , image:footballLabel },
      { value: 'family', label: 'Family', image:familyLabel },
      {value:'faith', label:'Faith', image:faithLabel }
    ];
  
    return (
      <div>
        <Select
          options={options}
          onChange={props.handleInputChange}
          className={`noAppearance`}
            id="category"
            name = "tags"
          getOptionLabel={(option) => (
            <div className="flex items-center justify-start gap-1 px-8 " >
              <span>{option.label}</span>
              {option.image && <img src={option.image} alt={option.label} className = "w-[15px] h-[15px] " />}
            </div>
          )}
        />
      </div>
    );
  };
  
  
export default CategorySelect;


/* `block cursor-pointer appearance-none w-full bg-white border border-gray-400 
            hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none 
            focus:shadow-outline` */