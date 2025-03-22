import React from 'react';

function DashboardAssessDetails() {
  return (
    <div className="p-4">
      {/* Responsive Heading */}
      <h3 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto mt-4 opacity-90">
        Test your Knowledge in just 5 minutes!
      </h3>

      {/* Responsive Questions Container */}
      <div className="mt-6 space-y-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
        {/* Question 1 */}
        <div className="bg-gray-100 font-semibold p-4 sm:p-6 rounded-lg shadow-sm">
          <p className="p-1 text-lg sm:text-xl">Question 1: Linear Equation</p>
          <p className="p-1 text-base sm:text-lg">
            Solve for x: 5x + 3 = 18
          </p>

          <div className="mt-4 space-y-2">
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="answers" value={2} className="mr-2" />
              <span className="text-base sm:text-lg">A) 2</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="answers" value={3} className="mr-2" />
              <span className="text-base sm:text-lg">B) 3</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="answers" value={5} className="mr-2" />
              <span className="text-base sm:text-lg">C) 5</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="answers" value={6} className="mr-2" />
              <span className="text-base sm:text-lg">D) 6</span>
            </label>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-gray-100 font-semibold p-4 sm:p-6 rounded-lg shadow-sm">
          <p className="p-1 text-lg sm:text-xl">Question 2: Linear Equation</p>
          <p className="p-1 text-base sm:text-lg">
            Solve for x: 5x + 3 = 18
          </p>

          <ul className="mt-4 space-y-2">
            <li className="p-1 text-base sm:text-lg">A) 2</li>
            <li className="p-1 text-base sm:text-lg">B) 3</li>
            <li className="p-1 text-base sm:text-lg">C) 5</li>
            <li className="p-1 text-base sm:text-lg">D) 6</li>
          </ul>
        </div>

        {/* Question 3 */}
        <div className="bg-gray-100 font-semibold p-4 sm:p-6 rounded-lg shadow-sm">
          <p className="p-1 text-lg sm:text-xl">Question 3: Linear Equation</p>
          <p className="p-1 text-base sm:text-lg">
            Solve for x: 5x + 3 = 18
          </p>

          <ul className="mt-4 space-y-2">
            <li className="p-1 text-base sm:text-lg">A) 2</li>
            <li className="p-1 text-base sm:text-lg">B) 3</li>
            <li className="p-1 text-base sm:text-lg">C) 5</li>
            <li className="p-1 text-base sm:text-lg">D) 6</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardAssessDetails;