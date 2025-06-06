import React from 'react';
const FeaturesCard=( { Icon, title, subtitle })=>{
return(
    <div className="featurecard">
    <Icon size={32} className="text-orange-500 " />
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  </div>
)
}
export default FeaturesCard;