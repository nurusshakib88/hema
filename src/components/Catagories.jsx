import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/CategoryData";
import { FaAngleRight } from "react-icons/fa6";

const Categories = ({ className }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const categoriesRef = useRef(null);
  const subcategoriesRef = useRef(null);

  // Handle entering a category
  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category);
    setHoveredSubcategory(null);
  };

  // Handle leaving the entire category + subcategory section
  const handleMouseLeave = (event) => {
    const isLeavingCategory = categoriesRef.current?.contains(
      event.relatedTarget
    );
    const isLeavingSubcategory = subcategoriesRef.current?.contains(
      event.relatedTarget
    );

    if (!isLeavingCategory && !isLeavingSubcategory) {
      setHoveredCategory(null);
      setHoveredSubcategory(null);
    }
  };

  // Stop the `hoveredCategory` from resetting when hovering subcategories
  const handleSubcategoryMouseEnter = (sub) => {
    setHoveredSubcategory(sub);
  };

  return (
    <div className={className}>
      <div
        className="grid grid-cols-4 border-t h-full overflow-y-auto "
        onMouseLeave={handleMouseLeave}
      >
        {/* First Div - Categories */}
        <div ref={categoriesRef} className="border-r pt-3">
          <h2 className="font-bold mb-5">categorieën</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnterCategory(category)}
                className="flex items-center gap-3 h-14"
              >
                <Link className="flex items-center gap-3 w-full">
                  <img
                    src={category.icon}
                    alt=""
                    className="w-10 aspect-square rounded-full object-cover"
                  />
                  <span>{category.name}</span>

                  {hoveredCategory === category && (
                    <FaAngleRight className="ms-auto me-2 text-xs" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Div - Subcategories */}

        <div ref={subcategoriesRef} className="border-r px-3 pt-3">
          {hoveredCategory && (
            <>
              <h2 className="font-bold mb-5">{hoveredCategory.name}</h2>
              <ul>
                {hoveredCategory.subcategory.map((sub) => (
                  <li
                    key={sub.id}
                    onMouseEnter={() => handleSubcategoryMouseEnter(sub)}
                    className=" h-14 flex items-center"
                  >
                    <Link className="flex items-center gap-3 w-full">
                      {sub.name}

                      {hoveredSubcategory === sub && (
                        <FaAngleRight className="ms-auto me-2 text-xs" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Third Div - Nested Subcategories */}
        <div className="border-r col-span-2 px-3 pt-3">
          {hoveredSubcategory && (
            <>
              <h2 className="font-bold mb-5">{hoveredSubcategory.name}</h2>
              <ul>
                {hoveredSubcategory.subcategory?.map((nestedSub) => (
                  <li key={nestedSub.id} className=" h-14 flex items-center">
                    <Link>{nestedSub.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
