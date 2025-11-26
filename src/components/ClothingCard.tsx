import React, { useState } from "react";
import { ClothingItem } from "../types";

interface ClothingCardProps {
    item: ClothingItem;
}

export default function ClothingCard({ item }: ClothingCardProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageChange = (index: number) => {
        setSelectedImageIndex(index);
    };

    return (
        <div
            className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
        >
            {/* Main Image Container */}
            <div className="relative overflow-hidden bg-white">
                {/* New Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-800 text-white text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 z-10">
                    New
                </div>

                <img
                    src={item.images[selectedImageIndex]}
                    alt={item.name}
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-300"
                />

                {/* Thumbnail Navigation - Show on Hover or Touch */}
                {item.images.length > 1 && isHovered && (
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
                        {item.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageChange(index);
                                }}
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                                    selectedImageIndex === index
                                        ? "bg-white w-4 sm:w-6"
                                        : "bg-white/60 hover:bg-white/80"
                                }`}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 md:p-6 text-center">
                {/* Product Name */}
                <h2 className="text-sm sm:text-base font-normal text-gray-900 mb-2 sm:mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                    {item.name}
                </h2>

                {/* Price */}
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Rs {item.price.toLocaleString()}.00
                </p>

                {/* Colors - Show on hover or touch */}
                {/*{isHovered && item.colors.length > 0 && (*/}
                {/*    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">*/}
                {/*        <p className="text-xs text-gray-500 mb-2">Available Colors</p>*/}
                {/*        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">*/}
                {/*            {item.colors.map((color) => (*/}
                {/*                <span*/}
                {/*                    key={color}*/}
                {/*                    className="text-xs text-gray-600 px-2 py-1 bg-gray-50 rounded"*/}
                {/*                >*/}
                {/*                    {color}*/}
                {/*                </span>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
}