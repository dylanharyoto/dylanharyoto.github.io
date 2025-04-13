import React from "react";
import ActivityBoxLeft from "../components/ActivityBoxLeft";
import ActivityBoxRight from "../components/ActivityBoxRight";

const Activities = () => {
  return (
    <div id="activities" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900 to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold">Leading by Example</h4>
          <p className="text-lg text-gray-400">Making a Difference through Guiding Others</p>
        </div>
        <div className="space-y-12">
          <ActivityBoxLeft
            imageName="/images/l1.jpg"
            position="Student Ambassador"
            activityName="HSBC/HKU Business Case Competition"
            activityWeb="https://competition.acrc.hku.hk/"
            detail1="Selected as one of the 30+ student ambassadors in charge of guiding case preparation and presentation."
            detail2="Successfully guided my team from the preparation round to reach the final round of the competition."
            timeline="May 2024"
            location="Hong Kong SAR"
          />
          <ActivityBoxRight
            imageName="/images/l2.jpg"
            position="Vice President"
            activityName="Google Developer Student Clubs PolyU"
            activityWeb="https://gdsc.community.dev/hong-kong-polytechnic-university-hong-kong-hong-kong/"
            detail1="Selected from 100+ candidates to lead a team of technical leads in organizing tech-related workshops."
            detail2="Organized 5+ tech workshops accessible to 20,000+ undergraduates, masters, PhDs, and faculty members."
            timeline="Aug 2023 - Present"
            location="Hong Kong SAR"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;